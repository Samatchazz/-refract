# backup-A.ps1 - survey + backup Claude Code setup on "PC-A" before migrating to "PC-B"
# Run on PC-A:  powershell -ExecutionPolicy Bypass -File "Z:\Claude Code\backup-A.ps1"
# Writes:  <Desktop>\claude-backup-A\   and   Z:\Claude Code\claude-backup-A-REPORT.md
# The report lists file NAMES and sizes only - never the contents of .credentials.json / .env / keys.

$ErrorActionPreference = 'Continue'
$User     = 'SaChaz'
$Home_    = "C:\Users\$User"
$Desktop  = [Environment]::GetFolderPath('Desktop')
$Dest     = Join-Path $Desktop 'claude-backup-A'
$Report   = 'Z:\Claude Code\claude-backup-A-REPORT.md'
$CodeDirs = @('Z:\Claude Code', 'Z:\planc-site')
$SecretRx = '(?i)(key|token|secret|password|passwd|credential|auth|bearer|sk-|ghp_|xox)'

$R = New-Object System.Collections.Generic.List[string]
function W($s) { $script:R.Add($s) }
function Mask($line) {
  if ($line -match $SecretRx) { return ($line -replace '(?<=[=:]\s*["'']?)[^"'',\s]{8,}', '***MASKED***') }
  return $line
}
function SizeOf($path) {
  if (-not (Test-Path $path)) { return 0 }
  $it = Get-Item -Force $path
  if ($it.PSIsContainer) { return (Get-ChildItem -Force -Recurse -File $path -ErrorAction SilentlyContinue | Measure-Object Length -Sum).Sum }
  return $it.Length
}
function Fmt($bytes) {
  if ($null -eq $bytes) { $bytes = 0 }
  if ($bytes -ge 1GB) { return ('{0:N2} GB' -f ($bytes/1GB)) }
  if ($bytes -ge 1MB) { return ('{0:N1} MB' -f ($bytes/1MB)) }
  if ($bytes -ge 1KB) { return ('{0:N0} KB' -f ($bytes/1KB)) }
  return "$bytes B"
}

W "# claude-backup-A report"
W ""
W "- Generated: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
W "- Machine: $env:COMPUTERNAME  |  User: $env:USERNAME  |  Home: $Home_"
W "- Desktop resolved to: $Desktop"
W "- Backup folder: $Dest"
W ""

# ---------- 0. Tools present ----------
W "## 0. Tools on this machine"
foreach ($t in 'git','node','npm','npx','claude','uv','uvx','python','bun') {
  $c = Get-Command $t -ErrorAction SilentlyContinue
  if ($c) {
    $v = try { (& $t --version 2>&1 | Select-Object -First 1) } catch { '?' }
    W "- $t : $($c.Source)  ($v)"
  } else { W "- $t : NOT FOUND" }
}
W ""

# ---------- 1. What is Z: ----------
W "## 1. What is drive Z:"
try {
  $ld = Get-CimInstance Win32_LogicalDisk -Filter "DeviceID='Z:'"
  $types = @{2='Removable';3='Local disk';4='Network drive';5='CD';6='RAM disk'}
  W "- DriveType: $($ld.DriveType) ($($types[[int]$ld.DriveType]))"
  W "- VolumeName: $($ld.VolumeName)  |  FileSystem: $($ld.FileSystem)  |  Provider: $($ld.ProviderName)"
  W "- Size: $(Fmt $ld.Size)  |  Free: $(Fmt $ld.FreeSpace)"
} catch { W "- Win32_LogicalDisk failed: $_" }
try {
  $part = Get-Partition -DriveLetter Z -ErrorAction Stop
  $disk = Get-Disk -Number $part.DiskNumber
  $pd   = Get-PhysicalDisk | Where-Object { $_.DeviceId -eq $disk.Number } | Select-Object -First 1
  W "- Physical disk #$($disk.Number): $($disk.FriendlyName)  |  Bus: $($disk.BusType)  |  MediaType: $($pd.MediaType)  |  $(Fmt $disk.Size)"
} catch { W "- No physical partition for Z: (likely virtual/cloud/network mount): $($_.Exception.Message)" }
$gd = Get-Process -Name 'GoogleDriveFS' -ErrorAction SilentlyContinue
W "- Google Drive for desktop process running: $([bool]$gd)"
$subst = cmd /c subst 2>$null
if ($subst) { W "- subst mappings: $subst" }
W ""

# ---------- 2. Git status of code dirs (top-level + nested repos) ----------
W "## 2. Git repositories"
$repos = @()
foreach ($d in $CodeDirs) {
  if (-not (Test-Path $d)) { W "- MISSING: $d"; continue }
  $gits = Get-ChildItem -Path $d -Directory -Filter '.git' -Recurse -Force -Depth 3 -ErrorAction SilentlyContinue |
          Where-Object { $_.FullName -notmatch '\\node_modules\\' }
  $repos += $gits | ForEach-Object { $_.Parent.FullName }
}
$repos = $repos | Sort-Object -Unique
if (-not $repos) { W "- No .git found in $($CodeDirs -join ', ')" }
foreach ($repo in $repos) {
  W ""
  W "### $repo"
  Push-Location $repo
  try {
    $branch = git rev-parse --abbrev-ref HEAD 2>&1
    $last   = git log -1 --format='%h %ad %s' --date=short 2>&1
    $remote = git remote -v 2>&1 | Select-Object -First 2
    $status = git status --porcelain 2>&1
    $stash  = git stash list 2>&1
    $ahead  = git status -sb 2>&1 | Select-Object -First 1
    W "- Branch: $branch  |  $ahead"
    W "- Last commit: $last"
    if ($remote) { $remote | ForEach-Object { W "- Remote: $_" } } else { W "- Remote: (none - repo only exists on this disk!)" }
    $mod = @($status | Where-Object { $_ -match '^(.M|M.|A.|D.|R.|.D)' }).Count
    $unt = @($status | Where-Object { $_ -match '^\?\?' }).Count
    W "- Uncommitted changes: $mod modified/staged, $unt untracked"
    if ($status) { W '```'; $status | Select-Object -First 60 | ForEach-Object { W $_ }; if (@($status).Count -gt 60) { W "... ($(@($status).Count) total)" }; W '```' }
    if ($stash) { W "- Stashes: $(@($stash).Count)"; $stash | ForEach-Object { W "  - $_" } }
    $ign = git check-ignore -q .env 2>&1; W "- .env ignored by git: $($LASTEXITCODE -eq 0)"
  } catch { W "- git error: $_" }
  Pop-Location
}
W ""

# ---------- 3. .env files ----------
W "## 3. .env files found (names + size only)"
foreach ($d in $CodeDirs) {
  if (-not (Test-Path $d)) { continue }
  Get-ChildItem -Path $d -Recurse -Force -File -ErrorAction SilentlyContinue |
    Where-Object { $_.Name -match '^\.env(\..+)?$' -and $_.FullName -notmatch '\\node_modules\\' } |
    ForEach-Object {
      $keys = (Get-Content $_.FullName -ErrorAction SilentlyContinue | Where-Object { $_ -match '^\s*[A-Za-z_][A-Za-z0-9_]*\s*=' } | ForEach-Object { ($_ -split '=')[0].Trim() })
      W "- $($_.FullName)  ($(Fmt $_.Length))  | variables: $($keys -join ', ')"
    }
}
W ""

# ---------- 4. Copy everything ----------
W "## 4. Backup copy"
New-Item -ItemType Directory -Force -Path $Dest | Out-Null
$log = Join-Path $Dest '_robocopy.log'

# 4a  ~/.claude  (skip cache, shell-snapshots, session-env)
if (Test-Path "$Home_\.claude") {
  robocopy "$Home_\.claude" "$Dest\.claude" /E /XD cache shell-snapshots session-env /R:1 /W:1 /NFL /NDL /NJH /NP /LOG+:$log | Out-Null
  W "- ~/.claude copied -> $(Fmt (SizeOf "$Dest\.claude"))  (skipped cache, shell-snapshots, session-env)"
} else { W "- ~/.claude NOT FOUND at $Home_\.claude" }

# 4b  single files + .ssh
New-Item -ItemType Directory -Force -Path "$Dest\home-files" | Out-Null
foreach ($f in '.claude.json', '.gitconfig', '.npmrc', '.bashrc', '.bash_profile') {
  $p = Join-Path $Home_ $f
  if (Test-Path $p) { Copy-Item $p "$Dest\home-files\" -Force; W "- $f copied ($(Fmt (SizeOf $p)))" } else { W "- $f : not present" }
}
if (Test-Path "$Home_\.ssh") {
  robocopy "$Home_\.ssh" "$Dest\home-files\.ssh" /E /R:1 /W:1 /NFL /NDL /NJH /NP /LOG+:$log | Out-Null
  W "- .ssh copied -> files: $((Get-ChildItem -Force "$Dest\home-files\.ssh" | Select-Object -ExpandProperty Name) -join ', ')"
} else { W "- .ssh : not present" }

# 4c  code (skip node_modules; keep .git)
foreach ($d in $CodeDirs) {
  if (-not (Test-Path $d)) { continue }
  $name = Split-Path $d -Leaf
  robocopy $d "$Dest\code\$name" /E /XD node_modules /R:1 /W:1 /NFL /NDL /NJH /NP /LOG+:$log | Out-Null
  W "- $d copied -> code\$name  ($(Fmt (SizeOf "$Dest\code\$name")))  (skipped node_modules)"
}
W ""

# ---------- 5. Inventory of ~/.claude (names/sizes only) ----------
W "## 5. ~/.claude inventory (names + sizes, no contents)"
if (Test-Path "$Dest\.claude") {
  Get-ChildItem -Force "$Dest\.claude" | Sort-Object PSIsContainer -Descending | ForEach-Object {
    $sz = SizeOf $_.FullName
    $kind = if ($_.PSIsContainer) { 'dir ' } else { 'file' }
    W "- [$kind] $($_.Name)  ($(Fmt $sz))"
  }
  W ""
  W "### projects/"
  if (Test-Path "$Dest\.claude\projects") {
    Get-ChildItem -Directory "$Dest\.claude\projects" | ForEach-Object {
      $n = @(Get-ChildItem -File $_.FullName -Filter '*.jsonl' -ErrorAction SilentlyContinue).Count
      W "- $($_.Name)  |  $n session files  |  $(Fmt (SizeOf $_.FullName))"
    }
  }
  foreach ($sub in 'plugins','skills','commands','agents','hooks','ide','statsig','todos') {
    $p = "$Dest\.claude\$sub"
    if (Test-Path $p) { W ""; W "### $sub/"; Get-ChildItem -Force $p | Select-Object -First 40 | ForEach-Object { W "- $($_.Name)" } }
  }
}
W ""

# ---------- 6. MCP servers + user-path references ----------
W "## 6. MCP servers configured (command/args shown, env values hidden)"
function DumpMcp($obj, $label) {
  if ($null -eq $obj) { return }
  $obj.PSObject.Properties | ForEach-Object {
    $s = $_.Value
    $envKeys = if ($s.env) { ($s.env.PSObject.Properties.Name -join ', ') } else { '' }
    $hdr = if ($s.headers) { ($s.headers.PSObject.Properties.Name -join ', ') } else { '' }
    W "- [$label] **$($_.Name)**  type=$($s.type)  command=$($s.command)  args=$($s.args -join ' ')  url=$($s.url)  env-keys=[$envKeys]  header-keys=[$hdr]"
  }
}
$cj = "$Dest\home-files\.claude.json"
if (Test-Path $cj) {
  try {
    $j = Get-Content $cj -Raw | ConvertFrom-Json
    W "- .claude.json top-level keys: $($j.PSObject.Properties.Name -join ', ')"
    DumpMcp $j.mcpServers 'global'
    if ($j.projects) {
      W ""
      W "### Projects registered in .claude.json (these paths must change on PC-B)"
      $j.projects.PSObject.Properties | ForEach-Object {
        W "- $($_.Name)"
        DumpMcp $_.Value.mcpServers "project $($_.Name)"
        if ($_.Value.enabledMcpjsonServers) { W "  - enabledMcpjsonServers: $($_.Value.enabledMcpjsonServers -join ', ')" }
      }
    }
  } catch { W "- Could not parse .claude.json: $_" }
}
foreach ($d in $CodeDirs) {
  Get-ChildItem -Path $d -Recurse -Force -File -Filter '.mcp.json' -Depth 3 -ErrorAction SilentlyContinue |
    Where-Object { $_.FullName -notmatch '\\node_modules\\' } | ForEach-Object {
      W ""; W "### $($_.FullName)"
      try { DumpMcp ((Get-Content $_.FullName -Raw | ConvertFrom-Json).mcpServers) 'mcp.json' } catch { W "- parse error" }
    }
}
W ""
W "### settings.json files (secret-looking values masked)"
foreach ($sf in @("$Dest\.claude\settings.json", "$Dest\.claude\settings.local.json") + (Get-ChildItem -Path $Dest\code -Recurse -Force -File -Include 'settings.json','settings.local.json' -ErrorAction SilentlyContinue | Where-Object { $_.FullName -match '\\\.claude\\' -and $_.FullName -notmatch 'node_modules' } | Select-Object -ExpandProperty FullName)) {
  if (Test-Path $sf) { W ""; W "**$sf**"; W '```json'; Get-Content $sf | ForEach-Object { W (Mask $_) }; W '```' }
}
W ""

W "## 7. Files referencing the old user path (C:\Users\$User) - fix these on PC-B"
$scan = @("$Dest\home-files\.claude.json", "$Dest\home-files\.gitconfig") +
        (Get-ChildItem -Path "$Dest\.claude" -Recurse -Force -File -ErrorAction SilentlyContinue | Where-Object { $_.FullName -notmatch '\\projects\\|\\todos\\|\\statsig\\|\\debug\\' -and $_.Extension -match '^\.(json|md|txt|bat|ps1|cmd|sh|js|ts|toml|yaml|yml)$' } | Select-Object -ExpandProperty FullName) +
        (Get-ChildItem -Path "$Dest\code" -Recurse -Force -File -ErrorAction SilentlyContinue | Where-Object { $_.FullName -notmatch 'node_modules|\\\.git\\' -and $_.Extension -match '^\.(json|md|bat|ps1|cmd|sh|js|mjs|ts|toml|yaml|yml|env)$' -and $_.Length -lt 2MB } | Select-Object -ExpandProperty FullName)
$hits = $scan | Sort-Object -Unique | ForEach-Object {
  $f = $_
  Select-String -Path $f -Pattern "C:\\\\Users\\\\$User|C:/Users/$User|\\\\$User\\\\|/$User/" -ErrorAction SilentlyContinue |
    Select-Object -First 5 | ForEach-Object { "- $($f -replace [regex]::Escape($Dest), '<backup>'):$($_.LineNumber)  ->  $(Mask $_.Line.Trim())" }
}
if ($hits) { $hits | ForEach-Object { W $_ } } else { W "- (no references found)" }
W ""

# ---------- 8. Total ----------
$total = SizeOf $Dest
W "## 8. Total backup size"
W "- **$(Fmt $total)**  ($total bytes) at $Dest"
W "- .claude: $(Fmt (SizeOf "$Dest\.claude"))  |  home-files: $(Fmt (SizeOf "$Dest\home-files"))  |  code: $(Fmt (SizeOf "$Dest\code"))"

$R | Set-Content -Path $Report -Encoding UTF8
Copy-Item $Report (Join-Path $Dest 'REPORT.md') -Force
Write-Host "`nDONE. Report: $Report`nBackup: $Dest  ($(Fmt $total))" -ForegroundColor Green

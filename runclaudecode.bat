@echo off
setlocal enabledelayedexpansion
REM ===========================================================================
REM  run-claude-code.bat — launch Claude Code with every scratch write on Z:
REM
REM  C: on this machine runs low, which is what has been killing the desktop app
REM  and long builds. Nothing here frees space on C: — it stops node, npm,
REM  Playwright and Chrome from writing there at all.
REM
REM  Double-click this file, or run it from cmd. Do NOT run it from inside the
REM  Claude desktop app — being independent of that app is the whole point.
REM ===========================================================================

set "SCRATCH=Z:\claude-scratch"

if not exist "%SCRATCH%"              mkdir "%SCRATCH%"
if not exist "%SCRATCH%\temp"         mkdir "%SCRATCH%\temp"
if not exist "%SCRATCH%\npm-cache"    mkdir "%SCRATCH%\npm-cache"
if not exist "%SCRATCH%\pw-browsers"  mkdir "%SCRATCH%\pw-browsers"

REM Windows temp — node, Chrome profiles and screenshot buffers all land here
set "TEMP=%SCRATCH%\temp"
set "TMP=%SCRATCH%\temp"
REM npm's package cache (normally C:\Users\<you>\AppData\Local\npm-cache)
set "npm_config_cache=%SCRATCH%\npm-cache"
REM if Playwright ever does download a browser, keep it off C: too
set "PLAYWRIGHT_BROWSERS_PATH=%SCRATCH%\pw-browsers"

cd /d "Z:\Claude Code"

REM --- locate claude -------------------------------------------------------
REM 1) a standalone install on PATH  (npm i -g @anthropic-ai/claude-code)
REM 2) fallback: the copy bundled inside the Claude desktop app package.
REM    That one lives on C: and is REPLACED every time the app reinstalls —
REM    fine for today, but install the standalone one when you get a chance.
set "CLAUDE="
where claude >nul 2>nul && set "CLAUDE=claude"

if not defined CLAUDE (
  set "BUNDLED=%LOCALAPPDATA%\Packages\Claude_pzs8sxrjxfjjc\LocalCache\Roaming\Claude\claude-code"
  if exist "!BUNDLED!" (
    for /f "delims=" %%p in ('dir /b /a-d /s "!BUNDLED!\claude.exe" 2^>nul') do set "CLAUDE=%%p"
  )
)

echo.
echo   scratch dir : %SCRATCH%
echo   working dir : %CD%
for /f "tokens=3" %%a in ('dir /-c C:\ ^| find "bytes free"') do set "FREE=%%a"
echo   C: free     : %FREE% bytes
if defined CLAUDE (
  echo   claude      : !CLAUDE!
) else (
  echo   claude      : NOT FOUND
)
echo.

if not defined CLAUDE (
  echo   !! Claude Code is not installed anywhere this script can see.
  echo.
  echo      Install the standalone version once and this stops being a problem:
  echo          npm install -g @anthropic-ai/claude-code
  echo.
  echo      It then survives desktop-app reinstalls, unlike the bundled copy.
  echo.
  pause
  exit /b 1
)

"!CLAUDE!"

import numpy as np
from PIL import Image
from scipy import ndimage

SRC='/mnt/user-data/uploads/Claude Code/Neo Plan C/Catwalk/Catwalk start.png'
im = Image.open(SRC).convert('RGB')
a = np.asarray(im).astype(np.float32)
L = a.min(axis=2)          # min channel = catches any tinted white
H,W = L.shape

# 1) loose background candidate, flood-filled from the border so白 inside the cat stays
cand = L > 225
lab,n = ndimage.label(cand)
border = set(lab[0,:]) | set(lab[-1,:]) | set(lab[:,0]) | set(lab[:,-1])
border.discard(0)
bg = np.isin(lab, list(border))

# 2) soft alpha ramp so the edge is not jagged
lo, hi = 205.0, 246.0
soft = np.clip((hi - L) / (hi - lo), 0, 1)
alpha = np.where(bg, soft, 1.0)

# 3) kill stray specks in the alpha (isolated opaque dust in the bg)
solid = alpha > 0.5
lab2,n2 = ndimage.label(solid)
if n2:
    sizes = ndimage.sum(solid, lab2, range(1, n2+1))
    keep = (np.argmax(sizes) + 1)
    big = lab2 == keep
    # drop components smaller than 0.02% of the canvas
    small = np.isin(lab2, [i+1 for i,s in enumerate(sizes) if s < H*W*0.0002])
    alpha[small] = 0.0

# 4) de-halo: pull the residual white out of semi-transparent edge pixels
out = a.copy()
edge = (alpha > 0.02) & (alpha < 0.98)
al = alpha[edge][:,None]
out[edge] = np.clip((a[edge] - 255.0*(1-al)) / np.maximum(al,1e-3), 0, 255)

rgba = np.dstack([out, alpha*255]).astype(np.uint8)
img = Image.fromarray(rgba, 'RGBA')

bbox = img.getbbox()
print('bbox', bbox, 'of', img.size)
img = img.crop(bbox)
print('trimmed', img.size)
img.save('/home/claude/cat/cat-idle.png')

# a 2x-downscaled web version
img.resize((img.width//2, img.height//2), Image.LANCZOS).save('/home/claude/cat/cat-idle@1024.png')

# compare two snap.mjs output folders pixel by pixel
import sys, pathlib
from PIL import Image, ImageChops
a, b = pathlib.Path(sys.argv[1]), pathlib.Path(sys.argv[2])
bad = 0; n = 0
for f in sorted(a.glob('*.png')):
    g = b / f.name
    if not g.exists(): print('MISSING', f.name); bad += 1; continue
    ia, ib = Image.open(f).convert('RGB'), Image.open(g).convert('RGB')
    n += 1
    if ia.size != ib.size: print('SIZE', f.name, ia.size, ib.size); bad += 1; continue
    d = ImageChops.difference(ia, ib).convert('L').point(lambda v: 255 if v > 24 else 0)
    px = d.histogram()[255]
    if px > int(sys.argv[3]) if len(sys.argv) > 3 else px > 40: print(f'DIFF {f.name}: {px} px, box {d.getbbox()}'); bad += 1
print(f'{n} frames compared, {bad} differ')

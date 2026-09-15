# -*- coding: utf-8 -*-
"""Install any generated product-*-{angle,flat,detail}.png into views as JPG."""
from pathlib import Path
from PIL import Image

SEARCH = [
    Path(r"C:\Users\timme\.cursor\projects\c-Users-timme-Downloads\assets"),
    Path(r"C:\Users\timme\Downloads\dryco-website\assets\images\products\views"),
]
DST = Path(r"C:\Users\timme\Downloads\dryco-website\assets\images\products\views")
DST.mkdir(parents=True, exist_ok=True)

count = 0
seen = set()
for folder in SEARCH:
    if not folder.exists():
        continue
    for p in folder.glob("product-*-*.png"):
        name = p.name.lower()
        if not any(v in name for v in ("-angle.png", "-flat.png", "-detail.png")):
            continue
        key = p.stem
        if key in seen:
            continue
        seen.add(key)
        im = Image.open(p).convert("RGB")
        im.thumbnail((1200, 1200), Image.Resampling.LANCZOS)
        out = DST / f"{p.stem}.jpg"
        im.save(out, "JPEG", quality=90, optimize=True)
        count += 1
        print("installed", out.name)

print("total installed", count)
# report coverage
ids = set()
for p in DST.glob("product-*-angle.jpg"):
    ids.add(p.name.replace("-angle.jpg", "").replace("product-", ""))
print("products with angle view", len(ids))
print(", ".join(sorted(ids)[:30]), "...")

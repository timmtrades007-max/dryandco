# -*- coding: utf-8 -*-
"""Rebuild multi-view galleries from original product PNGs without destroying masters."""
from __future__ import annotations

import json
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageOps

ROOT = Path(r"C:\Users\timme\Downloads\dryco-website")
SRC = ROOT / "assets" / "images" / "products"
OUT = SRC / "views"
OUT.mkdir(parents=True, exist_ok=True)

WARM = (252, 246, 236)
LINEN = (236, 228, 214)
STONE = (210, 200, 186)


def grain(im: Image.Image, amount: int = 6) -> Image.Image:
    arr = np.asarray(im.convert("RGB"), dtype=np.int16)
    noise = np.random.randint(-amount, amount + 1, arr.shape, dtype=np.int16)
    return Image.fromarray(np.clip(arr + noise, 0, 255).astype(np.uint8), "RGB")


def enhance(im: Image.Image) -> Image.Image:
    im = ImageEnhance.Color(im).enhance(1.04)
    im = ImageEnhance.Contrast(im).enhance(1.06)
    im = ImageEnhance.Sharpness(im).enhance(1.2)
    return grain(im, 5)


def pad_surface(im: Image.Image, color, size=(1000, 1000), scale=0.86) -> Image.Image:
    """Place full product photo on a soft surface — no cutout."""
    canvas = Image.new("RGB", size, color)
    # soft vertical wash
    arr = np.linspace(1.02, 0.94, size[1], dtype=np.float32)[:, None, None]
    base = (np.array(color, dtype=np.float32) * arr).clip(0, 255).astype(np.uint8)
    canvas = Image.fromarray(np.repeat(base, 3, axis=2) if base.shape[-1] == 1 else base, "RGB")
    # fix: color wash properly
    wash = np.zeros((size[1], size[0], 3), dtype=np.float32)
    for i, c in enumerate(color):
        wash[:, :, i] = c * np.linspace(1.02, 0.93, size[1], dtype=np.float32)[:, None]
    canvas = Image.fromarray(wash.clip(0, 255).astype(np.uint8), "RGB")

    photo = im.convert("RGB")
    photo.thumbnail((int(size[0] * scale), int(size[1] * scale)), Image.Resampling.LANCZOS)
    # thin white matte like a catalog print
    framed = ImageOps.expand(photo, border=14, fill=(255, 255, 255))
    framed = ImageOps.expand(framed, border=1, fill=(220, 210, 195))

    # soft drop shadow
    shadow = Image.new("RGBA", size, (0, 0, 0, 0))
    sw, sh = framed.size
    x = (size[0] - sw) // 2
    y = (size[1] - sh) // 2 + 8
    ImageDraw.Draw(shadow).rectangle((x + 10, y + 14, x + sw - 4, y + sh - 2), fill=(0, 0, 0, 55))
    shadow = shadow.filter(ImageFilter.GaussianBlur(18))

    out = canvas.convert("RGBA")
    out.paste(shadow, (0, 0), shadow)
    out.paste(framed, (x, y))
    return enhance(out.convert("RGB"))


def angle_view(im: Image.Image) -> Image.Image:
    w, h = im.size
    # slight perspective without destroying subject
    coeffs = [1.0, 0.08, 0, 0.02, 1.0, 0, 0.00008, 0]
    skewed = im.transform((w, h), Image.Transform.PERSPECTIVE, coeffs, Image.Resampling.BICUBIC)
    return pad_surface(skewed, STONE, scale=0.88)


def detail_view(im: Image.Image) -> Image.Image:
    w, h = im.size
    crop = im.crop((int(w * 0.18), int(h * 0.14), int(w * 0.82), int(h * 0.78)))
    crop = crop.resize((1000, 1000), Image.Resampling.LANCZOS)
    return enhance(crop)


def flat_view(im: Image.Image) -> Image.Image:
    rot = im.rotate(-6, expand=True, fillcolor=LINEN, resample=Image.Resampling.BICUBIC)
    return pad_surface(rot, LINEN, scale=0.84)


def front_view(im: Image.Image) -> Image.Image:
    return pad_surface(im, WARM, scale=0.88)


def process(path: Path) -> dict:
    stem = path.stem
    im = Image.open(path).convert("RGB")
    views = {
        "front": front_view(im),
        "angle": angle_view(im),
        "detail": detail_view(im),
        "flat": flat_view(im),
    }
    paths = {}
    for name, img in views.items():
        out = OUT / f"{stem}-{name}.jpg"
        img.save(out, "JPEG", quality=88, optimize=True)
        paths[name] = f"assets/images/products/views/{stem}-{name}.jpg"
    # DO NOT overwrite master PNG
    paths["card"] = f"assets/images/products/{stem}.png"
    return stem.replace("product-", ""), paths


def main():
    files = sorted([f for f in SRC.glob("product-*.png") if f.parent == SRC])
    print(f"Rebuilding {len(files)} galleries from originals (masters untouched)...")
    manifest = {}
    for i, f in enumerate(files, 1):
        print(f"[{i}/{len(files)}] {f.name}", flush=True)
        key, paths = process(f)
        # sanity: view must not be nearly blank
        sample = Image.open(OUT / f"{f.stem}-front.jpg")
        mean = float(np.asarray(sample).mean())
        std = float(np.asarray(sample).std())
        if std < 12:
            print(f"  WARN low detail std={std:.1f}")
        manifest[key] = paths
    (OUT / "manifest.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    print("Done", len(manifest))


if __name__ == "__main__":
    main()

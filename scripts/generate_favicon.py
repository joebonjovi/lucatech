"""Generate favicon.ico and apple-icon.png from the Luca Technologies logo mark."""

from __future__ import annotations

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
LOGO = ROOT / "public" / "images" / "logo.png"
APP = ROOT / "src" / "app"
PUBLIC = ROOT / "public"


def extract_mark(logo: Image.Image) -> Image.Image:
    """Crop the house + plug mark from the right side of the wordmark logo."""
    # Empirically tuned region of the transparent logo.png
    region = logo.crop((1240, 180, 1615, 620)).convert("RGBA")
    px = region.load()
    for y in range(region.height):
        for x in range(region.width):
            r, g, b, a = px[x, y]
            if a < 8 or min(r, g, b) > 248:
                px[x, y] = (0, 0, 0, 0)

    bbox = region.getbbox()
    if not bbox:
        raise SystemExit("Could not find logo mark pixels")
    return region.crop(bbox)


def fit_on_canvas(
    mark: Image.Image,
    size: int,
    *,
    pad_ratio: float = 0.12,
    background: tuple[int, int, int, int] | None = None,
) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), background or (0, 0, 0, 0))
    max_side = int(size * (1 - 2 * pad_ratio))
    ratio = min(max_side / mark.width, max_side / mark.height)
    w = max(1, round(mark.width * ratio))
    h = max(1, round(mark.height * ratio))
    resized = mark.resize((w, h), Image.Resampling.LANCZOS)
    x = (size - w) // 2
    y = (size - h) // 2
    canvas.alpha_composite(resized, (x, y))
    return canvas


def main() -> None:
    logo = Image.open(LOGO).convert("RGBA")
    mark = extract_mark(logo)

    # Keep a clean mark asset for reuse
    mark_path = PUBLIC / "images" / "logo-mark.png"
    mark.save(mark_path)
    print(f"Wrote {mark_path}")

    # Multi-size favicon.ico (Pillow resamples from the source bitmap)
    ico_src = fit_on_canvas(mark, 48, pad_ratio=0.1)
    ico_path = APP / "favicon.ico"
    ico_src.save(ico_path, format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
    print(f"Wrote {ico_path}")

    # 512 master (useful for social / future PWA)
    master = fit_on_canvas(mark, 512, pad_ratio=0.12)
    master_path = PUBLIC / "icon-512.png"
    master.save(master_path)
    print(f"Wrote {master_path}")

    # Apple touch icon — opaque white so iOS home screen looks clean
    apple = fit_on_canvas(mark, 180, pad_ratio=0.14, background=(255, 255, 255, 255))
    apple_path = APP / "apple-icon.png"
    apple.save(apple_path)
    print(f"Wrote {apple_path}")


if __name__ == "__main__":
    main()

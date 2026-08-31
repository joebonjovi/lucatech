"""Generate all Luca Technologies brand assets from the vector logo mark.

The house/LT mark (from the 2026 brand sheet) is defined once as SVG below and
every asset is derived from it:

  - src/app/icon.svg            square SVG favicon
  - src/app/favicon.ico         16/32/48 multi-size icon
  - src/app/apple-icon.png      180px, white background
  - public/icon-512.png         512px transparent master
  - public/images/logo-mark.png transparent mark render
  - public/images/logo.png      horizontal lockup (mark + LUCA TECHNOLOGIES)

Dependencies: pillow, cairosvg. The wordmark uses Plus Jakarta Sans (the site
font); the variable TTF is downloaded to /tmp on first run.
"""

from __future__ import annotations

import io
import urllib.request
from pathlib import Path

import cairosvg
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
APP = ROOT / "src" / "app"
IMAGES = ROOT / "public" / "images"

NAVY = "#071a30"
BLUE = "#0669ee"

FONT_URL = (
    "https://github.com/google/fonts/raw/main/ofl/plusjakartasans/"
    "PlusJakartaSans%5Bwght%5D.ttf"
)
FONT_PATH = Path("/tmp/PlusJakartaSans.ttf")

# House + LT monogram mark, recreated as vectors from the brand sheet.
MARK_VIEWBOX = (100, 88)
MARK_BODY = """
  <defs>
    <linearGradient id="lt-wall" x1="75" y1="28" x2="72" y2="71" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#0f3f7e"/>
      <stop offset="1" stop-color="#2d94f8"/>
    </linearGradient>
    <linearGradient id="lt-t" x1="40" y1="47" x2="66" y2="70" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#0d5cb8"/>
      <stop offset="1" stop-color="#2d94f8"/>
    </linearGradient>
  </defs>
  <g fill="none" stroke-linecap="round" stroke-linejoin="round">
    <!-- Navy: bottom-left hook, left wall, roof up to the chimney -->
    <path d="M43.5 70.5 H16.5 Q12 70.5 12 66 V36.5 L45.5 11 L63.5 24.6"
          stroke="#071a30" stroke-width="7"/>
    <!-- Chimney: filled, bottom follows the roof slope -->
    <path d="M63 15.2 Q63 13.5 64.7 13.5 H70.3 Q72 13.5 72 15.2 V30.9 L63 24.1 Z"
          fill="#071a30"/>
    <!-- Blue: right roof segment, right wall, bottom-right hook -->
    <path d="M72.6 31.6 L76.5 34.5 Q79 36.4 79 39.7 V64.5 Q79 70.6 72.8 70.8 L63.5 71"
          stroke="url(#lt-wall)" stroke-width="7"/>
    <!-- L monogram -->
    <path d="M23 37.5 V57 Q23 60.5 26.5 60.5 H43"
          stroke="#071a30" stroke-width="7"/>
    <!-- T bar -->
    <path d="M40.5 47 H66" stroke="url(#lt-t)" stroke-width="6.6"/>
    <!-- T stem with chisel bottom -->
    <path d="M52.4 47 H58.9 V69.8 L52.4 63.2 Z" fill="url(#lt-t)"/>
    <!-- Windows -->
    <g fill="#0b63dd">
      <rect x="40.6" y="28.6" width="3.7" height="3.7" rx="0.6"/>
      <rect x="46.6" y="28.6" width="3.7" height="3.7" rx="0.6"/>
      <rect x="40.6" y="34.6" width="3.7" height="3.7" rx="0.6"/>
      <rect x="46.6" y="34.6" width="3.7" height="3.7" rx="0.6"/>
    </g>
  </g>
"""


def mark_svg(*, square: bool = False) -> str:
    w, h = MARK_VIEWBOX
    if square:
        # Center the mark on a square canvas (used for favicons).
        pad = (w - h) / 2
        viewbox = f"0 {-pad} {w} {w}"
    else:
        viewbox = f"0 0 {w} {h}"
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{viewbox}" '
        f'role="img" aria-label="Luca Technologies">{MARK_BODY}</svg>'
    )


def render_mark(width: int, *, square: bool = False) -> Image.Image:
    png = cairosvg.svg2png(
        bytestring=mark_svg(square=square).encode(), output_width=width
    )
    return Image.open(io.BytesIO(png)).convert("RGBA")


def load_font(size: int, weight: int) -> ImageFont.FreeTypeFont:
    if not FONT_PATH.exists():
        urllib.request.urlretrieve(FONT_URL, FONT_PATH)
    font = ImageFont.truetype(str(FONT_PATH), size)
    font.set_variation_by_axes([weight])
    return font


def draw_tracked_text(
    draw: ImageDraw.ImageDraw,
    xy: tuple[float, float],
    text: str,
    font: ImageFont.FreeTypeFont,
    fill: str,
    total_width: float | None = None,
    tracking: float = 0.0,
) -> float:
    """Draw text with letter-spacing; justify to total_width when given."""
    widths = [draw.textlength(ch, font=font) for ch in text]
    if total_width is not None and len(text) > 1:
        tracking = (total_width - sum(widths)) / (len(text) - 1)
    x, y = xy
    for ch, w in zip(text, widths):
        draw.text((x, y), ch, font=font, fill=fill)
        x += w + tracking
    return x - tracking


def build_lockup() -> Image.Image:
    """Horizontal lockup: mark on the left, LUCA / TECHNOLOGIES on the right."""
    height = 800
    mark_w = round(height * MARK_VIEWBOX[0] / MARK_VIEWBOX[1])
    mark = render_mark(mark_w)

    luca_font = load_font(460, 800)
    tech_font = load_font(104, 700)

    probe = ImageDraw.Draw(Image.new("RGBA", (1, 1)))
    luca_box = probe.textbbox((0, 0), "LUCA", font=luca_font)
    luca_w = luca_box[2] - luca_box[0]
    luca_h = luca_box[3] - luca_box[1]
    tech_box = probe.textbbox((0, 0), "T", font=tech_font)
    tech_h = tech_box[3] - tech_box[1]

    gap_x = 90
    gap_y = 56
    text_x = mark_w + gap_x
    block_h = luca_h + gap_y + tech_h
    block_top = (height - block_h) / 2

    canvas = Image.new(
        "RGBA", (text_x + luca_w + 24, height), (0, 0, 0, 0)
    )
    canvas.alpha_composite(mark, (0, 0))
    draw = ImageDraw.Draw(canvas)

    draw.text(
        (text_x - luca_box[0], block_top - luca_box[1]),
        "LUCA",
        font=luca_font,
        fill=NAVY,
    )
    draw_tracked_text(
        draw,
        (text_x - tech_box[0], block_top + luca_h + gap_y - tech_box[1]),
        "TECHNOLOGIES",
        tech_font,
        BLUE,
        total_width=luca_w,
    )
    return canvas


def fit_on_canvas(
    mark: Image.Image,
    size: int,
    *,
    pad_ratio: float = 0.1,
    background: tuple[int, int, int, int] | None = None,
) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), background or (0, 0, 0, 0))
    max_side = int(size * (1 - 2 * pad_ratio))
    ratio = min(max_side / mark.width, max_side / mark.height)
    w = max(1, round(mark.width * ratio))
    h = max(1, round(mark.height * ratio))
    resized = mark.resize((w, h), Image.Resampling.LANCZOS)
    canvas.alpha_composite(resized, ((size - w) // 2, (size - h) // 2))
    return canvas


def main() -> None:
    icon_svg_path = APP / "icon.svg"
    icon_svg_path.write_text(mark_svg(square=True) + "\n")
    print(f"Wrote {icon_svg_path}")

    mark = render_mark(1024)
    mark_path = IMAGES / "logo-mark.png"
    mark.save(mark_path)
    print(f"Wrote {mark_path}")

    lockup = build_lockup()
    logo_path = IMAGES / "logo.png"
    lockup.save(logo_path)
    print(f"Wrote {logo_path} ({lockup.width}x{lockup.height})")

    ico = fit_on_canvas(mark, 48, pad_ratio=0.04)
    ico_path = APP / "favicon.ico"
    ico.save(ico_path, format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
    print(f"Wrote {ico_path}")

    master = fit_on_canvas(mark, 512, pad_ratio=0.08)
    master_path = ROOT / "public" / "icon-512.png"
    master.save(master_path)
    print(f"Wrote {master_path}")

    apple = fit_on_canvas(
        mark, 180, pad_ratio=0.12, background=(255, 255, 255, 255)
    )
    apple_path = APP / "apple-icon.png"
    apple.save(apple_path)
    print(f"Wrote {apple_path}")


if __name__ == "__main__":
    main()

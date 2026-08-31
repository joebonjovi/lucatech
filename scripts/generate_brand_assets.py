"""Generate all Luca Technologies brand assets from the vector logo mark.

The house/LT mark and the custom LUCA letterforms (from the 2026 brand
lockup) are defined once as SVG below and every asset is derived from them:

  - src/app/icon.svg            square SVG favicon
  - src/app/favicon.ico         16/32/48 multi-size icon
  - src/app/apple-icon.png      180px, white background
  - public/icon-512.png         512px transparent master
  - public/images/logo-mark.png transparent mark render
  - public/images/logo.png      horizontal lockup (mark + LUCA TECHNOLOGIES)

Dependencies: pillow, cairosvg. "TECHNOLOGIES" uses Plus Jakarta Sans (the
site font); the variable TTF is downloaded to /tmp on first run.
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

NAVY = "#0b192c"
BLUE = "#1a73c8"

FONT_URL = (
    "https://github.com/google/fonts/raw/main/ofl/plusjakartasans/"
    "PlusJakartaSans%5Bwght%5D.ttf"
)
FONT_PATH = Path("/tmp/PlusJakartaSans.ttf")

# House + LT monogram mark, recreated as vectors from the brand lockup.
# Flat square-cut style: navy roof/left side and L, blue right side and T.
MARK_BODY = """
  <defs>
    <linearGradient id="lt-wall" x1="107" y1="22" x2="121" y2="52" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#0b192c"/>
      <stop offset="0.4" stop-color="#0d55a8"/>
      <stop offset="1" stop-color="#2e8fe9"/>
    </linearGradient>
    <linearGradient id="lt-t" x1="90" y1="42" x2="106" y2="66" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#0b5cb4"/>
      <stop offset="1" stop-color="#2e8fe9"/>
    </linearGradient>
  </defs>
  <g stroke-linejoin="round">
    <!-- Navy house: bottom edge (left of T stem), left wall, roof to chimney -->
    <path d="M95.6 64.3 H66.2 Q63.5 64.3 63.5 61.6 V34.4 L93 11.5 L105.9 21.5"
          fill="none" stroke="#0b192c" stroke-width="3.8"/>
    <!-- Chimney: parallelogram following the roof slope -->
    <path d="M105.8 15.4 Q105.8 14 107.2 14 H111.9 Q113.3 14 113.3 15.4 V26.5 L105.8 20.7 Z"
          fill="#0b192c"/>
    <!-- Right roof + wall + bottom edge: continuous stroke, navy fading to blue -->
    <path d="M105.4 21.1 L120.4 32.8 Q122.5 34.4 122.5 37 V61.6 Q122.5 64.3 119.8 64.3 H107.8"
          fill="none" stroke="url(#lt-wall)" stroke-width="3.8"/>
    <!-- L: flat navy letterform -->
    <path d="M74.5 35.5 H81.5 V52 H95.5 V58.5 H77.2 Q74.5 58.5 74.5 55.8 Z"
          fill="#0b192c"/>
    <!-- T: blue bar + stem with chisel bottom, dips through the base line -->
    <rect x="89.5" y="41.8" width="24.5" height="6" rx="0.8" fill="url(#lt-t)"/>
    <path d="M97.6 47.8 H104.6 V66.6 L97.6 61 Z" fill="url(#lt-t)"/>
    <!-- Window: 2x2 panes -->
    <g fill="#0b6dc8">
      <rect x="88.4" y="28.8" width="4.3" height="4.3" rx="0.5"/>
      <rect x="94.2" y="28.8" width="4.3" height="4.3" rx="0.5"/>
      <rect x="88.4" y="34.6" width="4.3" height="4.3" rx="0.5"/>
      <rect x="94.2" y="34.6" width="4.3" height="4.3" rx="0.5"/>
    </g>
  </g>
"""

MARK_RECT_VIEWBOX = "59.5 7.5 67 61"
MARK_SQUARE_VIEWBOX = "59.5 4.5 67 67"

# Custom squared "LUCA" letterforms (cap height 14, stroke 3.5, flat
# terminals). The A is a pointed chevron with a blue triangle in its counter.
LUCA_WIDTH = 90.5
LUCA_BODY = """
  <g fill="none" stroke="#0b192c" stroke-width="3.5">
    <path d="M1.75 0 V8.75 Q1.75 12.25 5.25 12.25 H15"/>
    <path d="M25.75 0 V8.25 Q25.75 12.25 29.75 12.25 H34 Q38.25 12.25 38.25 8.25 V0"/>
    <path d="M62.5 1.75 H52.5 Q49.75 1.75 49.75 4.5 V9.5 Q49.75 12.25 52.5 12.25 H62.5"/>
  </g>
  <path d="M71 14 L81 0 L91 14 H86.9 L81 5.74 L75.1 14 Z" fill="#0b192c"/>
  <path d="M78.1 14 L83.9 14 L81 9.7 Z" fill="#1a73c8"/>
"""


def mark_svg(*, square: bool = False) -> str:
    viewbox = MARK_SQUARE_VIEWBOX if square else MARK_RECT_VIEWBOX
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{viewbox}" '
        f'role="img" aria-label="Luca Technologies">{MARK_BODY}</svg>'
    )


def luca_svg() -> str:
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" '
        f'viewBox="-0.25 -0.25 {LUCA_WIDTH + 0.5} 14.5">{LUCA_BODY}</svg>'
    )


def render_svg(svg: str, width: int) -> Image.Image:
    png = cairosvg.svg2png(bytestring=svg.encode(), output_width=width)
    return Image.open(io.BytesIO(png)).convert("RGBA")


def load_font(size: int, weight: int) -> ImageFont.FreeTypeFont:
    if not FONT_PATH.exists():
        urllib.request.urlretrieve(FONT_URL, FONT_PATH)
    font = ImageFont.truetype(str(FONT_PATH), size)
    font.set_variation_by_axes([weight])
    return font


def draw_justified_text(
    draw: ImageDraw.ImageDraw,
    xy: tuple[float, float],
    text: str,
    font: ImageFont.FreeTypeFont,
    fill: str,
    total_width: float,
) -> None:
    """Draw text letter-spaced so it spans exactly total_width."""
    widths = [draw.textlength(ch, font=font) for ch in text]
    tracking = (total_width - sum(widths)) / (len(text) - 1)
    x, y = xy
    for ch, w in zip(text, widths):
        draw.text((x, y), ch, font=font, fill=fill)
        x += w + tracking


def build_lockup() -> Image.Image:
    """Horizontal lockup: mark left, LUCA / — TECHNOLOGIES — right."""
    height = 800
    unit = 25  # px per LUCA letterform unit
    mark_w = round(height * 67 / 61)
    mark = render_svg(mark_svg(), mark_w)

    luca_w = round(LUCA_WIDTH * unit)
    luca_h_units = 14.5
    luca = render_svg(luca_svg(), round((LUCA_WIDTH + 0.5) * unit))

    tech_font = load_font(96, 640)
    probe = ImageDraw.Draw(Image.new("RGBA", (1, 1)))
    tech_box = probe.textbbox((0, 0), "T", font=tech_font)
    tech_h = tech_box[3] - tech_box[1]

    gap_x = 96
    gap_y = 88
    luca_h = round(luca_h_units * unit)
    block_h = luca_h + gap_y + tech_h
    block_top = round((height - block_h) / 2)
    text_x = mark_w + gap_x

    canvas = Image.new("RGBA", (text_x + luca_w + 12, height), (0, 0, 0, 0))
    canvas.alpha_composite(mark, (0, 0))
    canvas.alpha_composite(luca, (text_x, block_top))
    draw = ImageDraw.Draw(canvas)

    # — TECHNOLOGIES — : navy dashes at both ends, justified blue caps between
    tech_y = block_top + luca_h + gap_y
    dash_len = round(7.2 * unit / 2)
    dash_h = 11
    dash_cy = tech_y + tech_h // 2
    draw.rounded_rectangle(
        [text_x, dash_cy - dash_h // 2, text_x + dash_len, dash_cy + dash_h // 2],
        radius=dash_h // 2,
        fill=NAVY,
    )
    draw.rounded_rectangle(
        [
            text_x + luca_w - dash_len,
            dash_cy - dash_h // 2,
            text_x + luca_w,
            dash_cy + dash_h // 2,
        ],
        radius=dash_h // 2,
        fill=NAVY,
    )
    pad = dash_len + 64
    draw_justified_text(
        draw,
        (text_x + pad - tech_box[0], tech_y - tech_box[1]),
        "TECHNOLOGIES",
        tech_font,
        BLUE,
        total_width=luca_w - 2 * pad,
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

    mark = render_svg(mark_svg(), 1024)
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

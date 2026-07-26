"""Remove the solid white background from the logo and make it transparent.

Uses a smooth threshold on "whiteness" (min RGB channel) to build an alpha
mask, then un-premultiplies the color against white on the feathered edge
pixels so no light halo remains around the letters.
"""

from pathlib import Path

from PIL import Image

SRC = Path(__file__).resolve().parents[1] / "public" / "images" / "logo.png"
BACKUP = SRC.with_name("logo-original.png")

# min(R,G,B) values: >= HIGH is treated as fully transparent (white),
# <= LOW is fully opaque, values in between are feathered for smooth edges.
HIGH = 250
LOW = 205


def main() -> None:
    img = Image.open(SRC).convert("RGBA")

    if not BACKUP.exists():
        img.save(BACKUP)

    px = img.load()
    w, h = img.size

    for y in range(h):
        for x in range(w):
            r, g, b, a0 = px[x, y]
            m = min(r, g, b)

            if m >= HIGH:
                alpha = 0.0
            elif m <= LOW:
                alpha = 1.0
            else:
                alpha = (HIGH - m) / (HIGH - LOW)

            if alpha <= 0.0:
                px[x, y] = (r, g, b, 0)
                continue

            if alpha >= 1.0:
                px[x, y] = (r, g, b, a0)
                continue

            # Un-premultiply against white: recover the true foreground color
            # F from C = a*F + (1-a)*255 so edges don't keep a white tint.
            def unmix(c: int) -> int:
                f = (c - (1 - alpha) * 255) / alpha
                return max(0, min(255, round(f)))

            px[x, y] = (unmix(r), unmix(g), unmix(b), round(alpha * a0))

    img.save(SRC)
    print(f"Saved transparent logo -> {SRC}")
    print(f"Original backed up   -> {BACKUP}")


if __name__ == "__main__":
    main()

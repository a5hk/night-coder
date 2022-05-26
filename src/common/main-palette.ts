import { colorPaletteFactory, Palette, registerPalette } from "./colors.js";

function mainVariant(): Palette {
  const p = new (colorPaletteFactory())("Night Coder", "Main");
  return p;
}

registerPalette(mainVariant());

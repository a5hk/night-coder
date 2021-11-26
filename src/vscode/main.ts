import { colorPaletteFactory, Palette } from "../common/colors.js";

export function mainVariant(): Palette {
  const p = new (colorPaletteFactory())("Night Coder", "Main and warm variants");
  return p;
}

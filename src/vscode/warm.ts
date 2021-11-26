import { colorPaletteFactory, Palette, Color } from "../common/colors.js";

export function warmVariant(): Palette {
  const p = new (colorPaletteFactory("#090806"))("Night Coder Warm", "Main and warm variants");
  p.contrastBackground = new Color("#060503");
  return p;
}
import { colorPaletteFactory } from "./colors.js";
export function mainVariant() {
    const p = new (colorPaletteFactory())("Night Coder", "Main variant");
    return p;
}
export const mainPalette = mainVariant();

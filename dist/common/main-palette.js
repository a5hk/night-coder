import { colorPaletteFactory } from "./colors.js";
function mainVariant() {
    const p = new (colorPaletteFactory())("Night Coder", "Main");
    return p;
}
export const mainPalette = mainVariant();

import { colorPaletteFactory } from "../common/colors.js";
export function mainVariant() {
    const p = new (colorPaletteFactory())("Night Coder");
    return p;
}

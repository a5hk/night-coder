import { colorPaletteFactory, registerPalette } from "./colors.js";
function mainVariant() {
    const p = new (colorPaletteFactory())("Night Coder", "Main");
    return p;
}
registerPalette(mainVariant());

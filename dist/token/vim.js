import { TokenColorPalette } from "../common/colors.js";
const palette = new TokenColorPalette("pastel");
export function vimColoring() {
    const head = `highlight clear
if exists("syntax_on")
  syntax reset
endif

if has("termguicolors")
  set termguicolors
endif

set background=dark
let colors_name="nightcoder"

highlight Normal guifg=${palette.FrenchGray.code} guibg=#030917

`;
    return (head +
        vRules
            .map((r) => {
            return r.groups
                .map((g) => `highlight ${g} ${r.style ? "cterm=" + r.style + " gui=" + r.style : ""} guifg=${r.fg}`)
                .join("\n");
        })
            .join("\n"));
}
const vRules = [
    { groups: ["Comment"], fg: palette.Mako.code, style: "italic" },
    { groups: ["String", "Character"], fg: palette.SwampGreen.code },
    { groups: ["Number", "Boolean", "Float"], fg: palette.PaleCornflowerBlue.code },
    { groups: ["Constant"], fg: palette.Geraldine.code },
    { groups: ["Function"], fg: palette.Calico.code },
    { groups: ["Identifier"], fg: palette.PoloBlue.code },
    { groups: ["Operator"], fg: palette.MagicMint.code },
    { groups: ["Statement", "PreProc"], fg: palette.Viola.code },
    { groups: ["Type"], fg: palette.IrisBlue.code },
    { groups: ["Tag"], fg: palette.TonysPink.code },
    { groups: ["Special"], fg: palette.IndianKhaki.code },
];

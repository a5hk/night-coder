import { tokenColorCode as color } from "../common/colors.js";
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

highlight Normal guifg=${color.FrenchGray.code} guibg=#030917

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
    { groups: ["Comment"], fg: color.Mako.code, style: "italic" },
    { groups: ["String", "Character"], fg: color.SwampGreen.code },
    { groups: ["Number", "Boolean", "Float"], fg: color.PaleCornflowerBlue.code },
    { groups: ["Constant"], fg: color.Geraldine.code },
    { groups: ["Function"], fg: color.Calico.code },
    { groups: ["Identifier"], fg: color.PoloBlue.code },
    { groups: ["Operator"], fg: color.MagicMint.code },
    { groups: ["Statement", "PreProc"], fg: color.Viola.code },
    { groups: ["Type"], fg: color.IrisBlue.code },
    { groups: ["Tag"], fg: color.TonysPink.code },
    { groups: ["Special"], fg: color.IndianKhaki.code },
];

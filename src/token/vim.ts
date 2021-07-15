import { tokenColorPalette } from "../common/colors.js";

export interface vimRule {
  groups: string[];
  fg: string;
  style?: string;
}

export function vimColoring(): string {
  const head = `highlight clear
if exists("syntax_on")
  syntax reset
endif

if has("termguicolors")
  set termguicolors
endif

set background=dark
let colors_name="nightcoder"

highlight Normal guifg=${tokenColorPalette.getColor("FrenchGray", "regular")} guibg=#030917

`;
  return (
    head +
    vRules
      .map((r) => {
        return r.groups
          .map((g) => `highlight ${g} ${r.style ? "cterm=" + r.style + " gui=" + r.style : ""} guifg=${r.fg}`)
          .join("\n");
      })
      .join("\n")
  );
}

const vRules: vimRule[] = [
  { groups: ["Comment"], fg: tokenColorPalette.getColor("Mako", "regular"), style: "italic" },
  { groups: ["String", "Character"], fg: tokenColorPalette.getColor("SwampGreen", "regular") },
  { groups: ["Number", "Boolean", "Float"], fg: tokenColorPalette.getColor("PaleCornflowerBlue", "regular") },
  { groups: ["Constant"], fg: tokenColorPalette.getColor("Geraldine", "regular") },
  { groups: ["Function"], fg: tokenColorPalette.getColor("Calico", "regular") },
  { groups: ["Identifier"], fg: tokenColorPalette.getColor("PoloBlue", "regular") },
  { groups: ["Operator"], fg: tokenColorPalette.getColor("MagicMint", "regular") },
  { groups: ["Statement", "PreProc"], fg: tokenColorPalette.getColor("Viola", "regular") },
  { groups: ["Type"], fg: tokenColorPalette.getColor("IrisBlue", "regular") },
  { groups: ["Tag"], fg: tokenColorPalette.getColor("TonysPink", "regular") },
  { groups: ["Special"], fg: tokenColorPalette.getColor("IndianKhaki", "regular") },
];

import { TokenColorPalette } from "../common/colors.js";

export interface vimRule {
  groups: string[];
  fg: string;
  style?: string;
}

const palette = new TokenColorPalette();

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

highlight Normal guifg=${palette.Color03.code} guibg=#030917

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
  { fg: palette.Color10.code, groups: ["Comment"], style: "italic" },
  { fg: palette.Color18.code, groups: ["String", "Character"] },
  { fg: palette.Color13.code, groups: ["Number", "Boolean", "Float"] },
  { fg: palette.Color04.code, groups: ["Constant"] },
  { fg: palette.Color02.code, groups: ["Function"] },
  { fg: palette.Color15.code, groups: ["Identifier"] },
  { fg: palette.Color09.code, groups: ["Operator"] },
  { fg: palette.Color20.code, groups: ["Statement", "PreProc"] },
  { fg: palette.Color06.code, groups: ["Type"] },
  { fg: palette.Color19.code, groups: ["Tag"] },
  { fg: palette.Color05.code, groups: ["Special"] },
];

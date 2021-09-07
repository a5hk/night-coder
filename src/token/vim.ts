import { ColorPalette } from "../common/colors.js";

export interface vimRule {
  groups: string[];
  fg: string;
  style?: string;
}

const palette = new ColorPalette();

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

highlight Normal guifg=${palette.foregroundColor.code} guibg=#030917

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
  { fg: palette.commentColor.code, groups: ["Comment"], style: "italic" },
  { fg: palette.stringColor.code, groups: ["String", "Character"] },
  { fg: palette.literalConstantColor.code, groups: ["Number", "Boolean", "Float"] },
  { fg: palette.constantColor.code, groups: ["Constant"] },
  { fg: palette.functionCallColor.code, groups: ["Function"] },
  { fg: palette.namespaceClassStructColor.code, groups: ["Identifier"] },
  { fg: palette.comparisonLogicalOperatorColor.code, groups: ["Operator"] },
  { fg: palette.keywordColor.code, groups: ["Statement", "PreProc"] },
  { fg: palette.typeColor.code, groups: ["Type"] },
  { fg: palette.tagColor.code, groups: ["Tag"] },
  { fg: palette.miscellaneousColor.code, groups: ["Special"] },
];

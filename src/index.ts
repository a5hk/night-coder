import fs from "fs";

import { textmateRules, textmateRule } from "./token/textmate_regular.js";
import { semanticRules, semanticRule } from "./token/semantic_regular.js";
import { commonWorkbenchColors as commonColors, workbenchColor } from "./ui/workbench_common.js";
import { regularWorkbenchColors as regularColors } from "./ui/workbench_regular.js";
import { contrastWorkbenchColors as contrastColors } from "./ui/workbench_contrast.js";

function themePath(name: string): string {
  return "./themes/" + name.toLowerCase().replace(/ /g, "-") + "-color-theme.json";
}

/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
function __italicReject(theme: any): string {
  return JSON.stringify(theme, (k, v) => {
    if (k === "__italic") {
      return undefined;
    }
    return v;
  });
}

function textmateItalic(theme: textmateRule[]): textmateRule[] {
  return theme.map((r) => {
    if (r.settings.__italic) {
      r.settings.fontStyle = "italic";
    }
    return r;
  });
}

function semanticItalic(theme: semanticRule): semanticRule {
  for (const k in theme) {
    if (theme[k]?.__italic) {
      theme[k] = { ...theme[k], fontStyle: "italic" };
    }
  }
  return theme;
}

function themeWriter(name: string, ui: workbenchColor, semantic: semanticRule, textmate: textmateRule[]) {
  const theme = __italicReject({
    $schema: "vscode://schemas/color-theme",
    type: "dark",
    semanticHighlighting: true,
    name: name,
    colors: ui,
    semanticTokenColors: semantic,
    tokenColors: textmate,
  });

  fs.writeFile(themePath(name), theme, (err) => {
    if (err) {
      throw err;
    }
    console.log(`${name} generated.`);
  });
}

function nightCoderRegular() {
  themeWriter("Night Coder", { ...commonColors, ...regularColors }, semanticRules, textmateRules);
}

function nightCoderRegularItalic() {
  themeWriter(
    "Night Coder Italic",
    { ...commonColors, ...regularColors },
    semanticItalic(semanticRules),
    textmateItalic(textmateRules)
  );
}

function nightCoderContrast() {
  themeWriter("Night Coder Contrast", { ...commonColors, ...contrastColors }, semanticRules, textmateRules);
}

function nightCoderContrastItalic() {
  themeWriter(
    "Night Coder Contrast Italic",
    { ...commonColors, ...contrastColors },
    semanticItalic(semanticRules),
    textmateItalic(textmateRules)
  );
}

nightCoderRegular();
nightCoderContrast();
nightCoderRegularItalic();
nightCoderContrastItalic();

import path from "path";

import { Palette } from "../common/colors.js";
import { themeWriter } from "../common/theme-writer.js";
import { TextmateTheme, textmateRule } from "./textmate_regular.js";
import { SemanticTheme, semanticRule } from "./semantic_regular.js";
import { commonWorkbenchColors, workbenchColor } from "./workbench_common.js";
import { contrastWorkbenchColors } from "./workbench_contrast.js";
import { VSPackage, VSTheme } from "./package.js";
import { mainVariant } from "./main.js";
import { garyVariant } from "./gray.js";
import { warmVariant } from "./warm.js";

/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
function __italicReject(theme: any): string {
  return JSON.stringify(theme, (k, v) => {
    if (k === "__italic") {
      return undefined;
    }
    return v;
  });
}

function fileWriter(content: string, filepath: string) {
  const baseOutputDir = "vscode";
  const p = path.normalize(path.join(baseOutputDir, filepath));
  themeWriter(p, content, `Generated ${p}.`);
}

function generateTheme(t: VSTheme, ui: workbenchColor, semantic: semanticRule, textmate: textmateRule[]): string {
  return __italicReject({
    $schema: "vscode://schemas/color-theme",
    semanticHighlighting: true,
    name: t.label,
    colors: ui,
    semanticTokenColors: semantic,
    tokenColors: textmate,
  });
}

function vsThemeWriter(t: VSTheme, ui: workbenchColor, semantic: semanticRule, textmate: textmateRule[]) {
  fileWriter(generateTheme(t, ui, semantic, textmate), t.path);
}

export function vscodeThemesWriter(): void {
  const styles = ["", "Italic"];
  const contrasts = ["", "Contrast"];
  let uiColors: workbenchColor;
  const themes: VSTheme[] = [];
  const palettes = [mainVariant(), garyVariant(), warmVariant()];

  for (const p of palettes) {
    const textmateTheme = new TextmateTheme(p);
    const semanticTheme = new SemanticTheme(p);

    for (const s of styles) {
      for (const c of contrasts) {
        if (c.toLowerCase() === "contrast") {
          uiColors = { ...commonWorkbenchColors(p), ...contrastWorkbenchColors(p) };
        } else {
          uiColors = commonWorkbenchColors(p);
        }

        const x = new VSTheme([p.name, c, s].join(" ").trim().replace(/ +/g, " "), "vs-dark");
        const len = themes.push(x);
        vsThemeWriter(themes[len - 1] ?? x, uiColors, semanticTheme.getPaletteRules(s), textmateTheme.getRules(s));
      }
    }
  }
  manifestWriter(themes);
  readmeWriter(palettes.slice(0, 2));
}

function generateManifest(t: VSTheme[]): string {
  const version = process.env.npm_package_version;

  if (version == undefined || version.toString().length < 1) {
    throw new TypeError("Version needed");
  }

  const author = "a5hk";
  const githubURL = "https://github.com/a5hk/night-coder";
  const themes = t.map((t) => t.toManifestFormat());
  const p: VSPackage = {
    name: "night-coder",
    displayName: "Night Coder",
    description: "A dark theme for Night Coders",
    version: version,
    publisher: author,
    author: author,
    license: "MIT",
    icon: "icon.png",
    keywords: ["NightCoder", "Night Coder", "Dark", "Borderless", "Italic", "Contrast", "Gray"],
    galleryBanner: {
      color: "#030917",
      theme: "dark",
    },
    engines: {
      vscode: "^1.60.0",
    },
    homepage: githubURL,
    repository: {
      type: "git",
      url: githubURL,
    },
    categories: ["Themes"],
    contributes: {
      themes: themes,
    },
  };

  return JSON.stringify(p);
}

function manifestWriter(t: VSTheme[]) {
  fileWriter(generateManifest(t), "package.json");
}

function generateReadme(palettes: Palette[]): string {
  const codeBlock = [
    "```json",
    `"editor.fontFamily": "'Cascadia Code'",`,
    `"editor.fontSize": 14.5,`,
    `"editor.fontLigatures": true,`,
    `"editor.bracketPairColorization.enabled": true,`,
    "```",
  ].join("\n");

  return `# [Night Coder](https://marketplace.visualstudio.com/items?itemName=a5hk.night-coder)

A dark theme for Night Coders.

![html](/screenshot/demo.gif)

## Other versions

- [vim](/color-themes/vim/colors/)
- [bat](/color-themes/bat/)
- [Windows Terminal](/color-themes/windows-terminal/)

## Color palettes

${palettes.map((p) => p.toMarkdownTable()).join("\n\n")}

## Screenshots

### JavaScript

![javascript](/screenshot/javascript.png)

### JSON

![javascript](/screenshot/json.png)

### Python

![python](/screenshot/python.png)

## Preferences shown in the screenshots

${codeBlock}

## License

[MIT License](/LICENSE)
`;
}

function readmeWriter(palettes: Palette[]) {
  fileWriter(generateReadme(palettes), "README.md");
}

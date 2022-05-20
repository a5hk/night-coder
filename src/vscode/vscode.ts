import path from "path";

import { Palette } from "../common/colors.js";
import { themeWriter } from "../common/theme-writer.js";
import { TextmateTheme, textmateRule } from "./textmate-regular.js";
import { SemanticTheme, semanticRule } from "./semantic-regular.js";
import { commonWorkbenchColors, workbenchColor } from "./workbench-common.js";
import { contrastWorkbenchColors } from "./workbench-contrast.js";
import { VSPackage, VSTheme } from "./package.js";
import { mainPalette } from "../common/main-palette.js";
import { warmPalette } from "../common/warm-palette.js";

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
    colors: ui,
    name: t.label,
    semanticHighlighting: true,
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
  const palettes = [mainPalette, warmPalette];

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

        const x = new VSTheme([p.fullName(), c, s].join(" ").trim().replace(/ +/g, " "), "vs-dark");
        const len = themes.push(x);
        vsThemeWriter(themes[len - 1] ?? x, uiColors, semanticTheme.getPaletteRules(s), textmateTheme.getRules(s));
      }
    }
  }
  manifestWriter(themes);
  readmeWriter();
  colorPaletteMapWriter(palettes);
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
    author: /* .......... */ author,
    categories: /* ...... */ ["Themes"],
    contributes: /* ..... */ { themes: themes },
    description: /* ..... */ "A dark theme for Night Coders",
    displayName: /* ..... */ "Night Coder",
    engines: /* ......... */ { vscode: "^1.60.0" },
    galleryBanner: /* ... */ { color: "#030917", theme: "dark" },
    homepage: /* ........ */ githubURL,
    icon: /* ............ */ "icon.png",
    keywords: /* ........ */ ["NightCoder", "Night Coder", "Dark", "Borderless", "Italic", "Contrast", "Warm"],
    license: /* ......... */ "MIT",
    name: /* ............ */ "night-coder",
    publisher: /* ....... */ author,
    repository: /* ...... */ { type: "git", url: githubURL },
    version: /* ......... */ version,
  };

  return JSON.stringify(p);
}

function manifestWriter(t: VSTheme[]) {
  fileWriter(generateManifest(t), "package.json");
}

function previewURL(theme: string): string {
  return `(https://vscode.dev/theme/a5hk.night-coder/${encodeURIComponent(theme)})`;
}

function generateReadme(): string {
  const codeBlock = [
    "```json",
    `"editor.fontFamily": "'JetBrains Mono', 'Cascadia Code', 'Fira Code', Consolas, 'Courier New', monospace",`,
    `"editor.fontSize": 14,`,
    `"editor.fontLigatures": true,`,
    `"editor.bracketPairColorization.enabled": true,`,
    "```",
  ].join("\n");

  return `# [Night Coder](https://marketplace.visualstudio.com/items?itemName=a5hk.night-coder)

[![Preview in vscode.dev](https://img.shields.io/badge/preview%20in-vscode.dev-060?style=for-the-badge&labelColor=030917)]${previewURL(
    "Night Coder"
  )}

A dark theme for Night Coders. There are two main variants:
- **Night Coder**
- **Night Coder Warm** The lively and happier version, inspired by [Mayukai Sunset](https://marketplace.visualstudio.com/items?itemName=GulajavaMinistudio.mayukaithemevsc)

Each of these main variants, has contrast and italic versions.

![html](/screenshot/demo.gif)

## Other versions

- [vim](/color-themes/vim/colors/)
- [bat](/color-themes/bat/)
- [Windows Terminal](/color-themes/windows-terminal/)

## Color palettes

- [Color Palettes](/color-themes/vscode/ColorPalette.md)

## Screenshots

### JavaScript [(Night Coder)]${previewURL("Night Coder")}

![javascript](/screenshot/n-javascript.png)

### Python [(Night Coder Warm Contrast)]${previewURL("Night Coder Warm Contrast")}

![python](/screenshot/nwc-python.png)

### JSON [(Night Coder Contrast)]${previewURL("Night Coder Contrast")}

![json](/screenshot/nc-json.png)

## Preferences shown in the screenshots

${codeBlock}

## License

[MIT License](/LICENSE)
`;
}

function readmeWriter() {
  fileWriter(generateReadme(), "README.md");
}

function generateColorPaletteMap(palettes: Palette[]): string {
  return `# [Night Coder](https://marketplace.visualstudio.com/items?itemName=a5hk.night-coder)

## Color palettes

${palettes.map((p) => p.toMarkdownTable()).join("\n\n")}
`;
}

function colorPaletteMapWriter(palettes: Palette[]) {
  fileWriter(generateColorPaletteMap(palettes), "ColorPalette.md");
}

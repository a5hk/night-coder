import fs from "fs";
import path from "path";

import { ColorPalette } from "./common/colors.js";
import { TextmateTheme, textmateRule } from "./token/textmate_regular.js";
import { SemanticTheme, semanticRule } from "./token/semantic_regular.js";
import { commonWorkbenchColors as commonColors, workbenchColor } from "./ui/workbench_common.js";
import { regularWorkbenchColors as regularColors } from "./ui/workbench_regular.js";
import { contrastWorkbenchColors as contrastColors } from "./ui/workbench_contrast.js";
import { vimColoring } from "./token/vim.js";
import { VSPackage, VSTheme } from "./manifest/package.js";

/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
function __italicReject(theme: any): string {
  return JSON.stringify(theme, (k, v) => {
    if (k === "__italic") {
      return undefined;
    }
    return v;
  });
}

function createDirIfNotExists(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function fileWriter(content: string, filepath: string) {
  const baseOutputDir = "./vscode";
  const p = path.normalize(path.join(baseOutputDir, filepath));
  createDirIfNotExists(path.dirname(p));

  fs.writeFile(p, content, (err) => {
    if (err) {
      throw err;
    }
    console.log(`Generated ${p}.`);
  });
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

function themeWriter(t: VSTheme, ui: workbenchColor, semantic: semanticRule, textmate: textmateRule[]) {
  fileWriter(generateTheme(t, ui, semantic, textmate), t.path);
}

function vscodeThemesWriter() {
  const baseName = "Night Coder";
  const styles = ["", "Italic"];
  const contrasts = ["", "Contrast"];
  let uiColors: workbenchColor;
  const themes: VSTheme[] = [];
  const textmateTheme = new TextmateTheme();
  const semanticTheme = new SemanticTheme();

  for (const s of styles) {
    for (const c of contrasts) {
      uiColors = c.toLowerCase() === "contrast" ? contrastColors : regularColors;
      const x = new VSTheme([baseName, c, s].join(" ").trim().replace(/ +/g, " "), "vs-dark");
      const len = themes.push(x);
      themeWriter(
        themes[len - 1] ?? x,
        { ...commonColors, ...uiColors },
        semanticTheme.getPaletteRules(s),
        textmateTheme.getRules(s)
      );
    }
  }

  manifestWriter(themes);
  readmeWriter();
}

function generateManifest(t: VSTheme[]): string {
  const author = "a5hk";
  const githubURL = "https://github.com/a5hk/night-coder";
  const themes = t.map((t) => t.toManifestFormat());
  const p: VSPackage = {
    name: "night-coder",
    displayName: "Night Coder",
    description: "A dark theme for Night Coders",
    version: "2.19.0",
    publisher: author,
    author: author,
    license: "MIT",
    icon: "icon.png",
    keywords: ["NightCoder", "Night Coder", "Dark", "Borderless", "Italic", "Contrast"],
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

function generateReadme(): string {
  const regularPalette = new ColorPalette();
  return `# [Night Coder](https://marketplace.visualstudio.com/items?itemName=a5hk.night-coder)

A dark theme for Night Coders. It has four variants with different text styles and UI colors.

![html](../screenshot/html.png)

## Other versions

- Vim: [/vim/colors/](/vim/colors/)

## Color Palette

| Scope | Color | Hex |
|:------|:-----:|:----|
${regularPalette.toString()}

## Screenshots

### JavaScript

![javascript](../screenshot/javascript.png)

### JSON

![javascript](../screenshot/json.png)

### Python

![python](../screenshot/python.png)

## License

[MIT License](../LICENSE)
`;
}

function readmeWriter() {
  fileWriter(generateReadme(), "README.md");
}

function vimColorScheme() {
  fs.writeFile("./vim/colors/nightcoder.vim", vimColoring(), (err) => {
    if (err) {
      throw err;
    }
    console.log(`Vim color scheme generated.`);
  });
}

vscodeThemesWriter();
vimColorScheme();

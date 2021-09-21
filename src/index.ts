import fs from "fs";
import path from "path";

import { colorPaletteFactory, Palette, Color } from "./common/colors.js";
import { TextmateTheme, textmateRule } from "./token/textmate_regular.js";
import { SemanticTheme, semanticRule } from "./token/semantic_regular.js";
import { commonWorkbenchColors, workbenchColor } from "./ui/workbench_common.js";
import { regularWorkbenchColors } from "./ui/workbench_regular.js";
import { contrastWorkbenchColors } from "./ui/workbench_contrast.js";
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

function createThemeVariant(): Palette {
  const p = new (colorPaletteFactory("#282c34"))("Night Coder Gray");

  p.defaultLibraryFunctionColor = /* ...... */ new Color("#80caff", "Default library function");
  p.functionCallColor = /* ................ */ new Color("#e6d299", "Function call");
  p.constantColor = /* .................... */ new Color("#ff9e9e", "Constant");
  p.miscellaneousColor = /* ............... */ new Color("#d1b485", "Miscellaneous");
  p.annotationColor = /* .................. */ new Color("#d1b485", "Annotation");
  p.typeColor = /* ........................ */ new Color("#05cbd6", "Type");
  p.operatorColor = /* .................... */ new Color("#e0e0b8", "Operator");
  p.comparisonLogicalOperatorColor = /* ... */ new Color("#b8e0c8", "Comparison/Logical operator");
  p.functionDeclarationColor = /* ......... */ new Color("#85c3ab", "Function declaration");
  p.literalConstantColor = /* ............. */ new Color("#c4abf7", "Literal constant");
  p.defaultLibraryClassTypeColor = /* ..... */ new Color("#fc9cc4", "Default library class/type");
  p.namespaceClassStructColor = /* ........ */ new Color("#9db9e7", "Namespace/Class/Struct");
  p.stringColor = /* ...................... */ new Color("#8fc78a", "String");
  p.importColor = /* ...................... */ new Color("#8fc78a", "Import/Require/Use");
  p.propertyColor = /* .................... */ new Color("#f0a875", "Property");
  p.keywordColor = /* ..................... */ new Color("#eea0e5", "Keyword");

  p.tagColor = /* ............... */ new Color("#f0a875", "Tag");
  p.italicColor = /* ............ */ new Color("#b8e0c8", "Italic");
  p.headingColor = /* ........... */ new Color("#e6d299", "Heading");
  p.linkTagColor = /* ........... */ new Color("#42d79e", "HTML link tag");
  p.metaTagColor = /* ........... */ new Color("#eea0e5", "HTML meta tag");
  p.styleTagColor = /* .......... */ new Color("#9db9e7", "HTML style tag");
  p.objectTagColor = /* ......... */ new Color("#fc9cc4", "HTML object tag");
  p.inlineTagColor = /* ......... */ new Color("#80caff", "HTML inline tag");
  p.customTagColor = /* ......... */ new Color("#c4abf7", "HTML custom tag");
  p.scriptTagColor = /* ......... */ new Color("#e0dc52", "Script tag");
  p.attributeNameColor = /* ..... */ new Color("#e6d299", "Attribute name");
  p.unrecognizedTagColor = /* ... */ new Color("#ff9e9e", "HTML unrecognized tag");

  p.jsonLevel01Color = new Color("#f0a875", "Level 1 JSON key");
  p.jsonLevel02Color = new Color("#eea0e5", "Level 2 JSON key");
  p.jsonLevel03Color = new Color("#05cbd6", "Level 3 JSON key");
  p.jsonLevel04Color = new Color("#e6d299", "Level 4 JSON key");
  p.jsonLevel05Color = new Color("#fc9cc4", "Level 5 JSON key");
  p.jsonLevel06Color = new Color("#80caff", "Level 6 JSON key");
  p.jsonLevel07Color = new Color("#9db9e7", "Level 7 JSON key");
  p.jsonLevel08Color = new Color("#ff9e9e", "Level 8 JSON key");
  p.jsonLevel09Color = new Color("#d1b485", "Level 9 JSON key");
  p.jsonLevel10Color = new Color("#e0dc52", "Level 10 JSON key");
  p.jsonLevel11Color = new Color("#f0a875", "Level > 10 JSON key");

  p.contrastBackground = new Color("#1d2025");

  p.bracketPair1 = new Color("#e0e0b8");
  p.bracketPair2 = new Color("#eea0e5");
  p.bracketPair3 = new Color("#b8e0c8");
  p.bracketPair4 = new Color("#d1b485");
  p.bracketPair5 = new Color("#80caff");
  p.bracketPair6 = new Color("#fc9cc4");

  p.ansiBrightBlack = p.background88;
  p.ansiBrightBlue = new Color("#80caff");
  p.ansiBrightCyan = new Color("#05cbd6");
  p.ansiBrightGreen = new Color("#8fc78a");
  p.ansiBrightMagenta = new Color("#fc9cc4");
  p.ansiBrightRed = new Color("#ff9e9e");
  p.ansiBrightWhite = p.backgroundee;
  p.ansiBrightYellow = new Color("#e6d299");

  p.ansiBlack = new Color("#020203");
  p.ansiBlue = new Color("#9db9e7");
  // p.ansiCyan = new Color("#");
  p.ansiGreen = new Color("#42d79e");
  p.ansiMagenta = new Color("#eea0e5");
  // p.ansiRed = new Color("#ff7575");
  p.ansiWhite = p.backgroundc5;
  p.ansiYellow = new Color("#e0dc52");

  return p;
}

function vscodeThemesWriter() {
  const styles = ["", "Italic"];
  const contrasts = ["", "Contrast"];
  let uiColors: workbenchColor;
  const themes: VSTheme[] = [];
  const palettes = [new (colorPaletteFactory())("Night Coder"), createThemeVariant()];

  for (const p of palettes) {
    const textmateTheme = new TextmateTheme(p);
    const semanticTheme = new SemanticTheme(p);

    for (const s of styles) {
      for (const c of contrasts) {
        uiColors = c.toLowerCase() === "contrast" ? contrastWorkbenchColors(p) : regularWorkbenchColors(p);
        const x = new VSTheme([p.name, c, s].join(" ").trim().replace(/ +/g, " "), "vs-dark");
        const len = themes.push(x);
        themeWriter(
          themes[len - 1] ?? x,
          { ...commonWorkbenchColors(p), ...uiColors },
          semanticTheme.getPaletteRules(s),
          textmateTheme.getRules(s)
        );
      }
    }
  }
  manifestWriter(themes);
  readmeWriter(palettes);
}

function generateManifest(t: VSTheme[]): string {
  const author = "a5hk";
  const githubURL = "https://github.com/a5hk/night-coder";
  const themes = t.map((t) => t.toManifestFormat());
  const p: VSPackage = {
    name: "night-coder",
    displayName: "Night Coder",
    description: "A dark theme for Night Coders",
    version: "2.22.0",
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

![html](/screenshot/palettes.png)

## Other versions

- Vim: [/vim/colors/](/vim/colors/)

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

function vimColorScheme() {
  const palette = new (colorPaletteFactory())("Night Coder");
  fs.writeFile("./vim/colors/nightcoder.vim", vimColoring(palette), (err) => {
    if (err) {
      throw err;
    }
    console.log(`Vim color scheme generated.`);
  });
}

vscodeThemesWriter();
vimColorScheme();

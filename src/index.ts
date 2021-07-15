import fs from "fs";

import { tokenColorPalette } from "./common/colors.js";
import { textmateRules, textmateRule } from "./token/textmate_regular.js";
import { semanticRules, semanticRule } from "./token/semantic_regular.js";
import { commonWorkbenchColors as commonColors, workbenchColor } from "./ui/workbench_common.js";
import { regularWorkbenchColors as regularColors } from "./ui/workbench_regular.js";
import { contrastWorkbenchColors as contrastColors } from "./ui/workbench_contrast.js";
import { vimColoring } from "./token/vim.js";

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
  const palette = "regular";
  themeWriter("Night Coder", { ...commonColors, ...regularColors }, semanticRules(palette), textmateRules(palette));
}

function nightCoderPastelRegular() {
  const palette = "pastel";
  themeWriter(
    "Night Coder Pastel",
    { ...commonColors, ...regularColors },
    semanticRules(palette),
    textmateRules(palette)
  );
}

function nightCoderRegularItalic() {
  const palette = "regular";
  themeWriter(
    "Night Coder Italic",
    { ...commonColors, ...regularColors },
    semanticItalic(semanticRules(palette)),
    textmateItalic(textmateRules(palette))
  );
}

function nightCoderPastelRegularItalic() {
  const palette = "pastel";
  themeWriter(
    "Night Coder Pastel Italic",
    { ...commonColors, ...regularColors },
    semanticItalic(semanticRules(palette)),
    textmateItalic(textmateRules(palette))
  );
}

function nightCoderContrast() {
  const palette = "regular";
  themeWriter(
    "Night Coder Contrast",
    { ...commonColors, ...contrastColors },
    semanticRules(palette),
    textmateRules(palette)
  );
}

function nightCoderPastelContrast() {
  const palette = "pastel";
  themeWriter(
    "Night Coder Pastel Contrast",
    { ...commonColors, ...contrastColors },
    semanticRules(palette),
    textmateRules(palette)
  );
}

function nightCoderContrastItalic() {
  const palette = "regular";
  themeWriter(
    "Night Coder Contrast Italic",
    { ...commonColors, ...contrastColors },
    semanticItalic(semanticRules(palette)),
    textmateItalic(textmateRules(palette))
  );
}

function nightCoderPastelContrastItalic() {
  const palette = "pastel";
  themeWriter(
    "Night Coder Pastel Contrast Italic",
    { ...commonColors, ...contrastColors },
    semanticItalic(semanticRules(palette)),
    textmateItalic(textmateRules(palette))
  );
}

function generateReadme() {
  const filepath = "./README.md";
  const intro = `# [Night Coder](https://marketplace.visualstudio.com/items?itemName=a5hk.night-coder)

A dark theme for Night Coders. Contrast and italic variants are also available.

## Other versions

- Vim: [/vim/colors/](/vim/colors/)

## Color Palette

| Scope | Color | Hex |
|:------|:-----:|:----|
`;

  fs.writeFile(filepath, intro, (err) => {
    if (err) {
      throw err;
    }
    console.log(`Writing intro.`);
  });

  fs.appendFile(
    filepath,
    Array.from(tokenColorPalette.getMap().values())
      .map(
        (v) =>
          `|${v.description}|![${v.code}](https://via.placeholder.com/23/${v.code.replace("#", "")}/?text=+)|${v.code}|`
      )
      .join("\n"),
    (err) => {
      if (err) {
        throw err;
      }
      console.log(`Color map appended.`);
    }
  );

  const end = `

## Screenshots

### HTML

![html](screenshot/html.png)

### JavaScript

![javascript](screenshot/javascript.png)

### Python

![python](screenshot/python.png)

## License

[MIT License](LICENSE)
`;

  fs.appendFile(filepath, end, (err) => {
    if (err) {
      throw err;
    }
    console.log(`Appended bottom section of readme.`);
  });
}

function vimColorScheme() {
  fs.writeFile("./vim/colors/nightcoder.vim", vimColoring(), (err) => {
    if (err) {
      throw err;
    }
    console.log(`Vim color scheme generated.`);
  });
}

nightCoderRegular();
nightCoderContrast();
nightCoderRegularItalic();
nightCoderContrastItalic();

nightCoderPastelRegular();
nightCoderPastelContrast();
nightCoderPastelRegularItalic();
nightCoderPastelContrastItalic();

vimColorScheme();
generateReadme();

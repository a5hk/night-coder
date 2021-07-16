import fs from "fs";
import { tokenColorPalette } from "./common/colors.js";
import { textmateTheme } from "./token/textmate_regular.js";
import { semanticTheme } from "./token/semantic_regular.js";
import { commonWorkbenchColors as commonColors } from "./ui/workbench_common.js";
import { regularWorkbenchColors as regularColors } from "./ui/workbench_regular.js";
import { contrastWorkbenchColors as contrastColors } from "./ui/workbench_contrast.js";
import { vimColoring } from "./token/vim.js";
function themePath(name) {
    return "./themes/" + name.toLowerCase().replace(/ /g, "-") + "-color-theme.json";
}
function __italicReject(theme) {
    return JSON.stringify(theme, (k, v) => {
        if (k === "__italic") {
            return undefined;
        }
        return v;
    });
}
function themeWriter(name, ui, semantic, textmate) {
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
function generateThemes() {
    const palettes = ["", "Pastel"];
    const styles = ["", "Italic"];
    const contrasts = ["", "Contrast"];
    let uiColors;
    for (const s of styles) {
        for (const p of palettes) {
            for (const c of contrasts) {
                uiColors = c === "contrast" ? contrastColors : regularColors;
                themeWriter(`Night Coder ${p} ${c} ${s}`.replace(/ +/g, " ").trim(), Object.assign(Object.assign({}, commonColors), uiColors), semanticTheme.getPaletteRules(s, p), textmateTheme.getRules(s, p));
            }
        }
    }
}
function generateReadme() {
    const filepath = "./README.md";
    const intro = `# [Night Coder](https://marketplace.visualstudio.com/items?itemName=a5hk.night-coder)

A dark theme for Night Coders. It has eight variants with different color palettes, text styles, and UI colors.

### Regular color palette

![html](screenshot/html.png)

### Pastel color palette

![html](screenshot/pastel.png)

## Other versions

- Vim: [/vim/colors/](/vim/colors/)

## Regular Color Palette

| Scope | Color | Hex |
|:------|:-----:|:----|
`;
    fs.writeFile(filepath, intro, (err) => {
        if (err) {
            throw err;
        }
        console.log(`Writing intro.`);
    });
    fs.appendFile(filepath, Array.from(tokenColorPalette.getMap().values())
        .map((v) => `|${v.description}|![${v.code}](https://via.placeholder.com/23/${v.code.replace("#", "")}/?text=+)|${v.code}|`)
        .join("\n"), (err) => {
        if (err) {
            throw err;
        }
        console.log(`Color map appended.`);
    });
    const pastelPalette = `

## Pastel Color Palette

| Scope | Color | Hex |
|:------|:-----:|:----|
`;
    fs.appendFile(filepath, pastelPalette, (err) => {
        if (err) {
            throw err;
        }
        console.log(`Appending pastel pastel`);
    });
    fs.appendFile(filepath, Array.from(tokenColorPalette.getMap().values())
        .map((v) => `|${v.description}|![${v.pastelCode}](https://via.placeholder.com/23/${v.pastelCode.replace("#", "")}/?text=+)|${v.pastelCode}|`)
        .join("\n"), (err) => {
        if (err) {
            throw err;
        }
        console.log(`Pastel color map appended.`);
    });
    const end = `

## Screenshots

### JavaScript

![javascript](screenshot/javascript.png)

### JSON

![javascript](screenshot/json.png)

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
generateThemes();
vimColorScheme();
generateReadme();

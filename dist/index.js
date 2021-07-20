import fs from "fs";
import { TokenColorPalette } from "./common/colors.js";
import { TextmateTheme } from "./token/textmate_regular.js";
import { SemanticTheme } from "./token/semantic_regular.js";
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
    for (const p of palettes) {
        const textmateTheme = new TextmateTheme(p);
        const semanticTheme = new SemanticTheme(p);
        for (const s of styles) {
            for (const c of contrasts) {
                uiColors = c === "contrast" ? contrastColors : regularColors;
                themeWriter(`Night Coder ${p} ${c} ${s}`.replace(/ +/g, " ").trim(), Object.assign(Object.assign({}, commonColors), uiColors), semanticTheme.getPaletteRules(s), textmateTheme.getRules(s));
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
    const regularPalette = new TokenColorPalette();
    try {
        fs.writeFileSync(filepath, intro);
        console.log("Header ...");
        fs.appendFileSync(filepath, regularPalette.toString());
        console.log("Regular palette ...");
    }
    catch (error) {
        console.error(error);
    }
    const pastelPaletteHeader = `

## Pastel Color Palette

| Scope | Color | Hex |
|:------|:-----:|:----|
`;
    const pastelPalette = new TokenColorPalette("pastel");
    try {
        fs.appendFileSync(filepath, pastelPaletteHeader);
        console.log("Pastel table header ...");
        fs.appendFileSync(filepath, pastelPalette.toString());
        console.log("Pastel table ...");
    }
    catch (error) {
        console.error(error);
    }
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
    try {
        fs.appendFileSync(filepath, end);
        console.log("Bottom part ...");
    }
    catch (error) {
        console.error(error);
    }
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

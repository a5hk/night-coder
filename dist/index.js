import fs from "fs";
import { ColorPalette } from "./common/colors.js";
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
    const styles = ["", "Italic"];
    const contrasts = ["", "Contrast"];
    let uiColors;
    const textmateTheme = new TextmateTheme();
    const semanticTheme = new SemanticTheme();
    for (const s of styles) {
        for (const c of contrasts) {
            uiColors = c.toLowerCase() === "contrast" ? contrastColors : regularColors;
            themeWriter(`Night Coder ${c} ${s}`.replace(/ +/g, " ").trim(), Object.assign(Object.assign({}, commonColors), uiColors), semanticTheme.getPaletteRules(s), textmateTheme.getRules(s));
        }
    }
}
function generateReadme() {
    const filepath = "./README.md";
    const intro = `# [Night Coder](https://marketplace.visualstudio.com/items?itemName=a5hk.night-coder)

A dark theme for Night Coders. It has four variants with different text styles and UI colors.

### Color palette

![html](screenshot/html.png)

## Other versions

- Vim: [/vim/colors/](/vim/colors/)

## Regular Color Palette

| Scope | Color | Hex |
|:------|:-----:|:----|
`;
    const regularPalette = new ColorPalette();
    try {
        fs.writeFileSync(filepath, intro);
        console.log("Header ...");
        fs.appendFileSync(filepath, regularPalette.toString());
        console.log("Regular palette ...");
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

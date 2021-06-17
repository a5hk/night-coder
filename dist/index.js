import fs from "fs";
import { tokenColorCode as color } from "./common/colors.js";
import { textmateRules } from "./token/textmate_regular.js";
import { semanticRules } from "./token/semantic_regular.js";
import { commonWorkbenchColors as commonColors } from "./ui/workbench_common.js";
import { regularWorkbenchColors as regularColors } from "./ui/workbench_regular.js";
import { contrastWorkbenchColors as contrastColors } from "./ui/workbench_contrast.js";
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
function textmateItalic(theme) {
    return theme.map((r) => {
        if (r.settings.__italic) {
            r.settings.fontStyle = "italic";
        }
        return r;
    });
}
function semanticItalic(theme) {
    var _a;
    for (const k in theme) {
        if ((_a = theme[k]) === null || _a === void 0 ? void 0 : _a.__italic) {
            theme[k] = Object.assign(Object.assign({}, theme[k]), { fontStyle: "italic" });
        }
    }
    return theme;
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
function nightCoderRegular() {
    themeWriter("Night Coder", Object.assign(Object.assign({}, commonColors), regularColors), semanticRules, textmateRules);
}
function nightCoderRegularItalic() {
    themeWriter("Night Coder Italic", Object.assign(Object.assign({}, commonColors), regularColors), semanticItalic(semanticRules), textmateItalic(textmateRules));
}
function nightCoderContrast() {
    themeWriter("Night Coder Contrast", Object.assign(Object.assign({}, commonColors), contrastColors), semanticRules, textmateRules);
}
function nightCoderContrastItalic() {
    themeWriter("Night Coder Contrast Italic", Object.assign(Object.assign({}, commonColors), contrastColors), semanticItalic(semanticRules), textmateItalic(textmateRules));
}
function generateReadme() {
    const filepath = "./README.md";
    const intro = `# [Night Coder](https://marketplace.visualstudio.com/items?itemName=a5hk.night-coder)

A dark theme for Night Coders. Contrast and italic variants are also available.

All tokens in this theme have a contrast ratio of at least 7 (except some comments and punctuations).

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
    fs.appendFile(filepath, Object.values(color)
        .map((v) => `|${v.description}|![${v.code}](https://via.placeholder.com/23/${v.code.replace("#", "")}/?text=+)|${v.code}|`)
        .join("\n"), (err) => {
        if (err) {
            throw err;
        }
        console.log(`Color map appended.`);
    });
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
nightCoderRegular();
nightCoderContrast();
nightCoderRegularItalic();
nightCoderContrastItalic();
generateReadme();

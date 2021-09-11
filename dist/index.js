import fs from "fs";
import path from "path";
import { colorPaletteFactory } from "./common/colors.js";
import { TextmateTheme } from "./token/textmate_regular.js";
import { SemanticTheme } from "./token/semantic_regular.js";
import { commonWorkbenchColors } from "./ui/workbench_common.js";
import { regularWorkbenchColors } from "./ui/workbench_regular.js";
import { contrastWorkbenchColors } from "./ui/workbench_contrast.js";
import { vimColoring } from "./token/vim.js";
import { VSTheme } from "./manifest/package.js";
function __italicReject(theme) {
    return JSON.stringify(theme, (k, v) => {
        if (k === "__italic") {
            return undefined;
        }
        return v;
    });
}
function createDirIfNotExists(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}
function fileWriter(content, filepath) {
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
function generateTheme(t, ui, semantic, textmate) {
    return __italicReject({
        $schema: "vscode://schemas/color-theme",
        semanticHighlighting: true,
        name: t.label,
        colors: ui,
        semanticTokenColors: semantic,
        tokenColors: textmate,
    });
}
function themeWriter(t, ui, semantic, textmate) {
    fileWriter(generateTheme(t, ui, semantic, textmate), t.path);
}
function vscodeThemesWriter() {
    var _a;
    const baseName = "Night Coder";
    const styles = ["", "Italic"];
    const contrasts = ["", "Contrast"];
    let uiColors;
    const themes = [];
    const palette = new (colorPaletteFactory())();
    const textmateTheme = new TextmateTheme(palette);
    const semanticTheme = new SemanticTheme(palette);
    for (const s of styles) {
        for (const c of contrasts) {
            uiColors = c.toLowerCase() === "contrast" ? contrastWorkbenchColors(palette) : regularWorkbenchColors(palette);
            const x = new VSTheme([baseName, c, s].join(" ").trim().replace(/ +/g, " "), "vs-dark");
            const len = themes.push(x);
            themeWriter((_a = themes[len - 1]) !== null && _a !== void 0 ? _a : x, Object.assign(Object.assign({}, commonWorkbenchColors(palette)), uiColors), semanticTheme.getPaletteRules(s), textmateTheme.getRules(s));
        }
    }
    manifestWriter(themes);
    readmeWriter();
}
function generateManifest(t) {
    const author = "a5hk";
    const githubURL = "https://github.com/a5hk/night-coder";
    const themes = t.map((t) => t.toManifestFormat());
    const p = {
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
function manifestWriter(t) {
    fileWriter(generateManifest(t), "package.json");
}
function generateReadme() {
    const regularPalette = new (colorPaletteFactory())();
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
    const palette = new (colorPaletteFactory())();
    fs.writeFile("./vim/colors/nightcoder.vim", vimColoring(palette), (err) => {
        if (err) {
            throw err;
        }
        console.log(`Vim color scheme generated.`);
    });
}
vscodeThemesWriter();
vimColorScheme();

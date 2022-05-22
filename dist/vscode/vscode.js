import path from "path";
import { themeWriter } from "../common/theme-writer.js";
import { TextmateTheme } from "./textmate-regular.js";
import { SemanticTheme } from "./semantic-regular.js";
import { commonWorkbenchColors } from "./workbench-common.js";
import { contrastWorkbenchColors } from "./workbench-contrast.js";
import { VSTheme } from "./package.js";
import { mainPalette } from "../common/main-palette.js";
import { warmPalette } from "../common/warm-palette.js";
import { grayPalette } from "../common/gray-palette.js";
function __italicReject(theme) {
    return JSON.stringify(theme, (k, v) => {
        if (k === "__italic") {
            return undefined;
        }
        return v;
    });
}
function fileWriter(content, filepath) {
    const baseOutputDir = "vscode";
    const p = path.normalize(path.join(baseOutputDir, filepath));
    themeWriter(p, content, `Generated ${p}.`);
}
function generateTheme(t, ui, semantic, textmate) {
    return __italicReject({
        $schema: "vscode://schemas/color-theme",
        colors: ui,
        name: t.label,
        semanticHighlighting: true,
        semanticTokenColors: semantic,
        tokenColors: textmate,
    });
}
function vsThemeWriter(t, ui, semantic, textmate) {
    fileWriter(generateTheme(t, ui, semantic, textmate), t.path);
}
export function vscodeThemesWriter() {
    var _a;
    const styles = ["", "Italic"];
    const contrasts = ["", "Contrast"];
    let uiColors;
    const themes = [];
    const palettes = [mainPalette, warmPalette, grayPalette];
    for (const p of palettes) {
        const textmateTheme = new TextmateTheme(p);
        const semanticTheme = new SemanticTheme(p);
        for (const s of styles) {
            for (const c of contrasts) {
                if (c.toLowerCase() === "contrast") {
                    uiColors = Object.assign(Object.assign({}, commonWorkbenchColors(p)), contrastWorkbenchColors(p));
                }
                else {
                    uiColors = commonWorkbenchColors(p);
                }
                const x = new VSTheme([p.fullName(), c, s].join(" ").trim().replace(/ +/g, " "), "vs-dark");
                const len = themes.push(x);
                vsThemeWriter((_a = themes[len - 1]) !== null && _a !== void 0 ? _a : x, uiColors, semanticTheme.getPaletteRules(s), textmateTheme.getRules(s));
            }
        }
    }
    manifestWriter(themes);
    readmeWriter();
    colorPaletteMapWriter(palettes);
}
function generateManifest(t) {
    const version = process.env.npm_package_version;
    if (version == undefined || version.toString().length < 1) {
        throw new TypeError("Version needed");
    }
    const author = "a5hk";
    const githubURL = "https://github.com/a5hk/night-coder";
    const themes = t.map((t) => t.toManifestFormat());
    const p = {
        author: author,
        categories: ["Themes"],
        contributes: { themes: themes },
        description: "A dark theme for Night Coders",
        displayName: "Night Coder",
        engines: { vscode: "^1.60.0" },
        galleryBanner: { color: "#030917", theme: "dark" },
        homepage: githubURL,
        icon: "icon.png",
        keywords: ["NightCoder", "Night Coder", "Dark", "Borderless", "Italic", "Contrast", "Warm"],
        license: "MIT",
        name: "night-coder",
        publisher: author,
        repository: { type: "git", url: githubURL },
        version: version,
    };
    return JSON.stringify(p);
}
function manifestWriter(t) {
    fileWriter(generateManifest(t), "package.json");
}
function previewURL(theme) {
    return `(https://vscode.dev/theme/a5hk.night-coder/${encodeURIComponent(theme)})`;
}
function generateReadme() {
    const codeBlock = [
        "```json",
        `"editor.fontFamily": "'JetBrains Mono', 'Cascadia Code', 'Fira Code', Consolas, 'Courier New', monospace",`,
        `"editor.fontSize": 14,`,
        `"editor.fontLigatures": true,`,
        `"editor.bracketPairColorization.enabled": true,`,
        "```",
    ].join("\n");
    return `# [Night Coder](https://marketplace.visualstudio.com/items?itemName=a5hk.night-coder)

[![Preview in vscode.dev](https://img.shields.io/badge/preview%20in-vscode.dev-060?style=for-the-badge&labelColor=030917)]${previewURL("Night Coder")}

A dark theme for Night Coders. There are three main variants:
- **Night Coder** The first and main variant
- **Night Coder Gray** For those who prefer a little lighter background
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

### JSON [(Night Coder Gray Contrast Italic)]${previewURL("Night Coder Gray Contrast Italic")}

![json](/screenshot/ngci-json.png)

## Preferences shown in the screenshots

${codeBlock}

## License

[MIT License](/LICENSE)
`;
}
function readmeWriter() {
    fileWriter(generateReadme(), "README.md");
}
function generateColorPaletteMap(palettes) {
    return `# [Night Coder](https://marketplace.visualstudio.com/items?itemName=a5hk.night-coder)

## Color palettes

${palettes.map((p) => p.toMarkdownTable()).join("\n\n")}
`;
}
function colorPaletteMapWriter(palettes) {
    fileWriter(generateColorPaletteMap(palettes), "ColorPalette.md");
}

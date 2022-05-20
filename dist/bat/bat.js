import xmlFormatter from "xml-formatter";
import { mainPalette } from "../common/main-palette.js";
import { warmPalette } from "../common/warm-palette.js";
import { themeWriter } from "../common/theme-writer.js";
import { TextmateTheme } from "../vscode/textmate-regular.js";
export function tmTheme(palette) {
    const textmateRule = new TextmateTheme(palette);
    const prefix = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">',
        '<plist version="1.0">',
        "<dict>",
        "<key>name</key>",
        `<string>${palette.fullName()}</string>`,
        "<key>settings</key>",
        "<array>",
        "<dict>",
        "<key>settings</key>",
        "<dict>",
        "<key>background</key>",
        `<string>${palette.background.code}</string>`,
        "<key>foreground</key>",
        `<string>${palette.foregroundColor.code}</string>`,
        "<key>caret</key>",
        `<string>${palette.background11.code}</string>`,
        "<key>invisibles</key>",
        `<string>${palette.background66.code}</string>`,
        "<key>selection</key>",
        `<string>${palette.background33.code}77</string>`,
        "</dict>",
        "</dict>",
    ].join("\n");
    const theme = textmateRule
        .getRules("")
        .map((r) => {
        var _a;
        return [
            "<dict>",
            "<key>name</key>",
            `<string>${(_a = r.name) !== null && _a !== void 0 ? _a : ""}</string>`,
            "<key>scope</key>",
            `<string>${r.scope.join(", ")}</string>`,
            "<key>settings</key>",
            "<dict>",
            r.settings.fontStyle ? "<key>fontStyle</key>" : "",
            r.settings.fontStyle ? `<string>${r.settings.fontStyle}</string>` : "",
            r.settings.foreground ? "<key>foreground</key>" : "",
            r.settings.foreground ? `<string>${r.settings.foreground}</string>` : "",
            "</dict>",
            "</dict>",
        ]
            .filter((e) => e.length > 1)
            .join("\n");
    })
        .join("\n");
    const suffix = "</array>\n</dict>\n</plist>";
    return xmlFormatter(`${prefix}\n${theme}\n${suffix}`, {
        collapseContent: true,
        indentation: "  ",
        lineSeparator: "\n",
    });
}
export function batColorScheme() {
    themeWriter("bat/nightcoder.tmTheme", tmTheme(mainPalette), "Main bat color scheme generated.");
    themeWriter("bat/nightcoder-warm.tmTheme", tmTheme(warmPalette), "Warm bat color scheme generated.");
}

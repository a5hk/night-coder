import { colorPaletteFactory } from "../common/colors.js";
import { TextmateTheme } from "./textmate_regular.js";
export function tmTheme() {
    console.log("hi");
    const prefix = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">',
        '<plist version="1.0">',
        "<dict>",
        "<key>name</key>",
        "<string>Night Coder</string>",
        "<key>settings</key>",
        "<array>",
    ].join("\n");
    const palette = new (colorPaletteFactory())("Night Coder");
    const textmateRule = new TextmateTheme(palette);
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
    return `${prefix}\n${theme}\n${suffix}`;
}

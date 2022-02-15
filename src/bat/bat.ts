import xmlFormatter from "xml-formatter";

import { colorPaletteFactory } from "../common/colors.js";
import { themeWriter } from "../common/theme-writer.js";
import { TextmateTheme } from "../vscode/textmate_regular.js";

export function tmTheme(): string {
  const palette = new (colorPaletteFactory())("Night Coder", "");
  const textmateRule = new TextmateTheme(palette);

  const prefix = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">',
    '<plist version="1.0">',
    "<dict>",
    "<key>name</key>",
    "<string>Night Coder</string>",
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
      return [
        "<dict>",
        "<key>name</key>",
        `<string>${r.name ?? ""}</string>`,
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

export function batColorScheme(): void {
  themeWriter("bat/nightcoder.tmTheme", tmTheme(), "Bat color scheme generated.");
}

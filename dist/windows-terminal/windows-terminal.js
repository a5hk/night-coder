import fs from "fs";
import { colorPaletteFactory } from "../common/colors.js";
export function windowsTerminalColors(palette) {
    const settings = {
        name: "Night Coder",
        cursorColor: palette.backgroundee.code,
        selectionBackground: `${palette.backgroundee.code}`,
        background: palette.background.code,
        foreground: palette.backgroundc5.code,
        black: palette.ansiBlack.code,
        blue: palette.ansiBlue.code,
        cyan: palette.ansiCyan.code,
        green: palette.ansiGreen.code,
        purple: palette.ansiMagenta.code,
        red: palette.ansiRed.code,
        white: palette.ansiWhite.code,
        yellow: palette.ansiYellow.code,
        brightBlack: palette.ansiBrightBlack.code,
        brightBlue: palette.ansiBrightBlue.code,
        brightCyan: palette.ansiBrightCyan.code,
        brightGreen: palette.ansiBrightGreen.code,
        brightPurple: palette.ansiBrightMagenta.code,
        brightRed: palette.ansiBrightRed.code,
        brightWhite: palette.ansiBrightWhite.code,
        brightYellow: palette.ansiBrightYellow.code,
    };
    return JSON.stringify(settings);
}
export function windowsTerminalColorScheme() {
    const palette = new (colorPaletteFactory())("Night Coder");
    fs.writeFile("./color-themes/windows-terminal/night-coder.json", windowsTerminalColors(palette), (err) => {
        if (err) {
            throw err;
        }
        console.log(`Windows Terminal color scheme generated.`);
    });
}

import { getPalettes } from "../common/colors.js";
import { themeWriter } from "../common/theme-writer.js";
export function windowsTerminalColors(palette) {
    const settings = {
        background: palette.background.code,
        cursorColor: palette.backgroundee.code,
        foreground: palette.backgroundc5.code,
        name: palette.fullName(),
        selectionBackground: `${palette.backgroundee.code}`,
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
    const palettes = getPalettes();
    for (const p of palettes) {
        themeWriter(`windows-terminal/${p.filename()}.json`, windowsTerminalColors(p), "Windows Terminal color scheme generated.");
    }
}

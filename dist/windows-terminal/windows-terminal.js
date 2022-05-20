import { themeWriter } from "../common/theme-writer.js";
import { mainPalette } from "../common/main-palette.js";
import { warmPalette } from "../common/warm-palette.js";
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
    themeWriter(`windows-terminal/${mainPalette.fullName().toLowerCase().replace(/ /g, "-")}.json`, windowsTerminalColors(mainPalette), "Windows Terminal color scheme generated.");
    themeWriter(`windows-terminal/${warmPalette.fullName().toLowerCase().replace(/ /g, "-")}.json`, windowsTerminalColors(warmPalette), "Windows Terminal color scheme generated (warm).");
}

import { Palette } from "../common/colors.js";
import { themeWriter } from "../common/theme-writer.js";
import { mainPalette } from "../common/main-palette.js";
import { warmPalette } from "../common/warm-palette.js";

interface WindowsTerminalSetting {
  [prop: string]: string;
}

export function windowsTerminalColors(palette: Palette): string {
  const settings: WindowsTerminalSetting = {
    background: palette.background.code,
    cursorColor: palette.backgroundee.code,
    foreground: palette.backgroundc5.code,
    name: palette.fullName(),
    selectionBackground: `${palette.backgroundee.code}`,

    // eslint-disable-next-line sort-keys
    black: palette.ansiBlack.code,
    blue: palette.ansiBlue.code,
    cyan: palette.ansiCyan.code,
    green: palette.ansiGreen.code,
    purple: palette.ansiMagenta.code,
    red: palette.ansiRed.code,
    white: palette.ansiWhite.code,
    yellow: palette.ansiYellow.code,

    // eslint-disable-next-line sort-keys
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

export function windowsTerminalColorScheme(): void {
  themeWriter(
    `windows-terminal/${mainPalette.fullName().toLowerCase().replace(/ /g, "-")}.json`,
    windowsTerminalColors(mainPalette),
    "Windows Terminal color scheme generated."
  );
  themeWriter(
    `windows-terminal/${warmPalette.fullName().toLowerCase().replace(/ /g, "-")}.json`,
    windowsTerminalColors(warmPalette),
    "Windows Terminal color scheme generated (warm)."
  );
}

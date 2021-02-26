import chroma from "chroma-js";

function hexAlphaToDec(alpha: string): number {
  return parseInt(alpha, 16) / 255;
}

function mix(alpha: string): string {
  return chroma.mix("#030917", "#ffffff", hexAlphaToDec(alpha), "rgb").toString();
}

// color names by
// https://chir.ag/projects/name-that-color/
// https://www.color-blindness.com/color-name-hue/

export const tokenColorCode = {
  AtomicTangerine: /* ...... */ "#ffa666",
  Bermuda: /* .............. */ "#70dbc1",
  Bittersweet: /* .......... */ "#ff7575",
  DarkTurquoise: /* ........ */ "#02cad4",
  FrenchGray: /* ........... */ mix("c5"),
  GoldenSand: /* ........... */ "#f5d780",
  IndianKhaki: /* .......... */ "#c3ab85",
  Iron: /* ................. */ mix("e5"),
  Jonquil: /* .............. */ "#f2f28c",
  MagicMint: /* ............ */ "#93ecb8",
  Mako: /* ................. */ mix("44"),
  Mischka: /* .............. */ mix("aa"),
  MonteCarlo: /* ........... */ "#85c3ab",
  Olivine: /* .............. */ "#9ec78a",
  PaleCornflowerBlue: /* ... */ "#bfa6f2",
  PinkSalmon: /* ........... */ "#ff99b3",
  PoloBlue: /* ............. */ "#859dc3",
  StormGrey: /* ............ */ "#7a7d84",
  Sunflower: /* ............ */ "#d9d326",
  Viola: /* ................ */ "#c385bc",
};

export const workbenchColors = {
  background: mix("0"),
  background11: mix("11"),
  background22: mix("22"),
  background25: mix("25"),
  background33: mix("33"),
  background44: mix("44"),
  background55: mix("55"),
  background66: mix("66"),
  background77: mix("77"),
  background88: mix("88"),
  background99: mix("99"),
  backgroundaa: mix("aa"),
  backgroundbb: mix("bb"),
  backgroundc5: mix("c5"),
  backgroundcc: mix("cc"),
  backgrounddd: mix("dd"),
  backgrounde5: mix("e5"),
  backgroundee: mix("ee"),

  contrastBackground: "#02050e",

  activeIndentGuideBackground: /* .... */ "#53ac53",
  editorErrorForeground: /* .......... */ "#ff7575", // bittersweet
  editorInfoForeground: /* ........... */ "#02cad4", // DarkTurquoise
  progressBarBackground: /* .......... */ "#d9d326", // Sunflower
  statusBarBackground: /* ............ */ "#006600",
  statusBarDebuggingBackground: /* ... */ "#9b2c2c",
  statusBarDebuggingBorder: /* ....... */ "#770000",
  statusBarDebuggingForeground: /* ... */ "#fdf7f7",
  statusBarForeground: /* ............ */ "#f5fff5",
  statusBarNoFolderBackground: /* .... */ "#553c9a",
  statusBarNoFolderForeground: /* .... */ "#ede9f6",
  statusBarRemoteBackground: /* ...... */ "#660066",
  statusBarRemoteForeground: /* ...... */ "#fff5ff",
  textLinkForeground: /* ............. */ "#89b971",
};

export const terminalColors = {
  ansiBrightBlack: /* ..... */ "#888b92", // background88
  ansiBrightBlue: /* ...... */ "#80bfff",
  ansiBrightCyan: /* ...... */ "#0fa5d7",
  ansiBrightGreen: /* ..... */ "#89b971",
  ansiBrightMagenta: /* ... */ "#f28ca6",
  ansiBrightRed: /* ....... */ "#ef7b6d",
  ansiBrightWhite: /* ..... */ "#c5c6c9", // backgroundc5
  ansiBlack: /* ........... */ "#353a45", // background33
  ansiBlue: /* ............ */ "#859dc3", // polo blue
  ansiBrightYellow: /* .... */ "#f5d780", // golden sand
  ansiGreen: /* ........... */ "#85c3ab", // monte carlo
  ansiMagenta: /* ......... */ "#c385bc", // viola
  ansiRed: /* ............. */ "#ff7575", // bittersweet
  ansiWhite: /* ........... */ "#acaeb3", // backgroundaa
  ansiYellow: /* .......... */ "#d9d326", // sunflower
};

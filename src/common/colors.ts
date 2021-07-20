import chroma from "chroma-js";

export class Color {
  code: string;
  description: string;

  constructor(code: string, description: string) {
    this.code = code;
    this.description = description;
  }

  toString(): string {
    return [
      "",
      this.description,
      `![${this.code}](https://via.placeholder.com/23/${this.code.replace("#", "")}/?text=+)`,
      this.code,
      "",
    ].join("|");
  }
}

function hexAlphaToDec(alpha: string): number {
  return parseInt(alpha, 16) / 255;
}

function mix(alpha: string): string {
  return chroma.mix("#030917", "#ffffff", hexAlphaToDec(alpha), "rgb").toString();
}

class BaseColorPalette {
  #_palette: string;

  get palette() {
    return this.#_palette;
  }

  constructor(p = "") {
    p = p.toLowerCase();

    if (p == "pastel") {
      this.#_palette = p;
    } else {
      this.#_palette = "";
    }
  }
}

export class TokenColorPalette extends BaseColorPalette {
  Color01 = new Color(this.#setColorCode("#7dbbe8", "#a3c4dc"), "Default library function, HTML inline tag");
  Color02 = new Color(this.#setColorCode("#e0cd94", "#e3d7b5"), "Function call, Attribute name");
  Color03 = new Color(this.#setColorCode(mix("c5"), mix("c5")), "Foreground, Variable");
  Color04 = new Color(this.#setColorCode("#ff7979", "#dd8888"), "Constant, HTML unrecognized tag");
  Color05 = new Color(this.#setColorCode("#c3ab85", "#d9c9af"), "Miscellaneous");
  Color06 = new Color(this.#setColorCode("#0bc2cb", "#a3d9dc"), "Type");
  Color07 = new Color(this.#setColorCode(mix("e5"), mix("e5")), "Parameter, Argument");
  Color08 = new Color(this.#setColorCode("#f2f28c", "#e0e0b8"), "Operator");
  Color09 = new Color(this.#setColorCode("#93ecb8", "#b8e0c8"), "Comparison/Logical operator");
  Color10 = new Color(this.#setColorCode(mix("44"), mix("44")), "Comment");
  Color11 = new Color(this.#setColorCode(mix("aa"), mix("aa")), "Documentation comment");
  Color12 = new Color(this.#setColorCode("#85c3ab", "#a9d6c4"), "Function declaration, HTML link tag");
  Color13 = new Color(this.#setColorCode("#bfa6f2", "#c5b8e0"), "Non variable constant, HTML custom tag");
  Color14 = new Color(this.#setColorCode("#ff99b3", "#d9a6b3"), "Default library class/type, HTML object tag");
  Color15 = new Color(this.#setColorCode("#859dc3", "#bdc8db"), "Namespace/Class/Struct, HTML style tag");
  Color16 = new Color(this.#setColorCode(mix("77"), mix("77")), "Tag punctuation");
  Color17 = new Color(this.#setColorCode("#d9d326", "#dfdd9f"), "Script tag");
  Color18 = new Color(this.#setColorCode("#9ebc8f", "#adc2a3"), "String");
  Color19 = new Color(this.#setColorCode("#e4aa81", "#dcbaa3"), "Property, Tag ");
  Color20 = new Color(this.#setColorCode("#c385bc", "#d9a6d3"), "Keyword, HTML meta tag");

  constructor(p = "") {
    super(p);
  }

  toString(): string {
    return Object.values(this)
      .map((c) => c.toString())
      .join("\n");
  }

  #setColorCode(regular: string, pastel: string): string {
    return this.palette == "pastel" ? pastel : regular;
  }
}

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
  editorErrorForeground: /* .......... */ "#ff7575",
  editorInfoForeground: /* ........... */ "#02cad4",
  progressBarBackground: /* .......... */ "#d9d326",
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
  inlineValuesBackground: /* ......... */ "#c3ab8555",
  inlineValuesForeground: /* ......... */ mix("cc"),
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
  ansiBlue: /* ............ */ "#859dc3",
  ansiBrightYellow: /* .... */ "#f5d780",
  ansiGreen: /* ........... */ "#85c3ab",
  ansiMagenta: /* ......... */ "#c385bc",
  ansiRed: /* ............. */ "#ff7575",
  ansiWhite: /* ........... */ "#acaeb3",
  ansiYellow: /* .......... */ "#d9d326",
};

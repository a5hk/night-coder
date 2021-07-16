import chroma from "chroma-js";

export interface Color {
  code: string;
  pastelCode: string;
  description: string;
}

function hexAlphaToDec(alpha: string): number {
  return parseInt(alpha, 16) / 255;
}

function mix(alpha: string): string {
  return chroma.mix("#030917", "#ffffff", hexAlphaToDec(alpha), "rgb").toString();
}

// function hexToPastel(hex: string): string {
//   const color = chroma(hex).hsv();
//   return chroma.hsv(color[0], color[1] * 0.6, 0.85).hex();
// }

// color names by
// https://chir.ag/projects/name-that-color/
// https://www.color-blindness.com/color-name-hue/

class TokenColor {
  #colorMap;

  constructor() {
    this.#colorMap = new Map<string, Color>();
    this.#colorMap.set("Bermuda", {
      code: "#70dbc1",
      pastelCode: "#8cd4c2",
      description: "Default library function, HTML inline tag",
    });
    this.#colorMap.set("Calico", {
      code: "#e0cd94",
      pastelCode: "#e3d7b5",
      description: "Function call, Attribute name",
    });
    this.#colorMap.set("FrenchGray", {
      code: mix("c5"),
      pastelCode: mix("c5"),
      description: "Foreground, Variable",
    });
    this.#colorMap.set("Geraldine", {
      code: "#ff7979",
      pastelCode: "#dd8888",
      description: "Constant, HTML unrecognized tag",
    });
    this.#colorMap.set("IndianKhaki", {
      code: "#c3ab85",
      pastelCode: "#d9c9af",
      description: "Miscellaneous",
    });
    this.#colorMap.set("IrisBlue", {
      code: "#0bc2cb",
      pastelCode: "#a3d9dc",
      description: "Type",
    });
    this.#colorMap.set("Iron", {
      code: mix("e5"),
      pastelCode: mix("e5"),
      description: "Parameter, Argument",
    });
    this.#colorMap.set("Jonquil", {
      code: "#f2f28c",
      pastelCode: "#e0e0b8",
      description: "Operator",
    });
    this.#colorMap.set("MagicMint", {
      code: "#93ecb8",
      pastelCode: "#b8e0c8",
      description: "Comparison/Logical operator",
    });
    this.#colorMap.set("Mako", {
      code: mix("44"),
      pastelCode: mix("44"),
      description: "Comment",
    });
    this.#colorMap.set("Mischka", {
      code: mix("aa"),
      pastelCode: mix("aa"),
      description: "Documentation comment",
    });
    this.#colorMap.set("MonteCarlo", {
      code: "#85c3ab",
      pastelCode: "#a9d6c4",
      description: "Function declaration, HTML link tag",
    });
    this.#colorMap.set("PaleCornflowerBlue", {
      code: "#bfa6f2",
      pastelCode: "#c5b8e0",
      description: "Non variable constant, HTML custom tag",
    });
    this.#colorMap.set("PinkSalmon", {
      code: "#ff99b3",
      pastelCode: "#d9a6b3",
      description: "Default library class/type, HTML object tag",
    });
    this.#colorMap.set("PoloBlue", {
      code: "#859dc3",
      pastelCode: "#bdc8db",
      description: "Namespace/Class/Struct, HTML style tag",
    });
    this.#colorMap.set("StormGrey", {
      code: mix("77"),
      pastelCode: mix("77"),
      description: "Tag punctuation",
    });
    this.#colorMap.set("Sunflower", {
      code: "#d9d326",
      pastelCode: "#dfdd9f",
      description: "Script tag",
    });
    this.#colorMap.set("SwampGreen", {
      code: "#9ebc8f",
      pastelCode: "#adc2a3",
      description: "String",
    });
    this.#colorMap.set("TonysPink", {
      code: "#e4aa81",
      pastelCode: "#dcbaa3",
      description: "Property, Tag ",
    });
    this.#colorMap.set("Viola", {
      code: "#c385bc",
      pastelCode: "#d9a6d3",
      description: "Keyword, HTML meta tag",
    });
  }

  getColor(name: string, palette = ""): string {
    const c = this.#colorMap.get(name);

    if (c) {
      return palette == "pastel" ? c.pastelCode : c.code;
    }
    return mix("c5");
  }

  getMap() {
    return this.#colorMap;
  }
}

export const tokenColorPalette = new TokenColor();

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
  ansiBlue: /* ............ */ "#859dc3", // polo blue
  ansiBrightYellow: /* .... */ "#f5d780", // golden sand
  ansiGreen: /* ........... */ "#85c3ab", // monte carlo
  ansiMagenta: /* ......... */ "#c385bc", // viola
  ansiRed: /* ............. */ "#ff7575", // bittersweet
  ansiWhite: /* ........... */ "#acaeb3", // backgroundaa
  ansiYellow: /* .......... */ "#d9d326", // sunflower
};

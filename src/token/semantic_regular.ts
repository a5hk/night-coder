import { TokenColorPalette } from "../common/colors.js";

export interface semanticRule {
  [propName: string]: { foreground?: string; fontStyle?: string; __italic?: boolean };
}

export class SemanticTheme {
  palette: TokenColorPalette;

  constructor(palette = "") {
    this.palette = new TokenColorPalette(palette);
  }

  #italic(theme: semanticRule): semanticRule {
    for (const k in theme) {
      if (theme[k]?.__italic) {
        theme[k] = { ...theme[k], fontStyle: "italic" };
      }
    }
    return theme;
  }

  getPaletteRules(style: string): semanticRule {
    const rules: semanticRule = {
      variable: {
        foreground: this.palette.Color03.code,
      },
      "variable.readonly": {
        foreground: this.palette.Color04.code,
      },
      "variable.defaultLibrary": {
        foreground: this.palette.Color14.code,
      },
      property: {
        foreground: this.palette.Color19.code,
        __italic: true,
      },
      parameter: {
        foreground: this.palette.Color07.code,
        __italic: true,
      },
      function: {
        foreground: this.palette.Color02.code,
        __italic: true,
      },
      "function.declaration": {
        foreground: this.palette.Color12.code,
      },
      "function.defaultLibrary": {
        foreground: this.palette.Color01.code,
        __italic: true,
      },
      method: {
        foreground: this.palette.Color02.code,
        __italic: true,
      },
      "method.declaration": {
        foreground: this.palette.Color12.code,
      },
      "method.defaultLibrary": {
        foreground: this.palette.Color01.code,
        __italic: true,
      },
      keyword: {
        foreground: this.palette.Color20.code,
      },
      namespace: {
        foreground: this.palette.Color15.code,
        __italic: true,
      },
      "namespace.defaultLibrary": {
        foreground: this.palette.Color14.code,
        __italic: true,
      },
      class: {
        foreground: this.palette.Color15.code,
        __italic: true,
      },
      "class.defaultLibrary": {
        foreground: this.palette.Color14.code,
        __italic: true,
      },
      struct: {
        foreground: this.palette.Color15.code,
        __italic: true,
      },
      type: {
        foreground: this.palette.Color06.code,
      },
      "type.defaultLibrary": {
        foreground: this.palette.Color14.code,
        __italic: true,
      },
      operator: {
        foreground: this.palette.Color08.code,
      },
      string: {
        foreground: this.palette.Color18.code,
      },
    };

    if (style.toLowerCase() === "italic") {
      return this.#italic(rules);
    }
    return rules;
  }
}

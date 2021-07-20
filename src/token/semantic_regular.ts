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
        foreground: this.palette.FrenchGray.code,
      },
      "variable.readonly": {
        foreground: this.palette.Geraldine.code,
      },
      "variable.defaultLibrary": {
        foreground: this.palette.PinkSalmon.code,
      },
      property: {
        foreground: this.palette.TonysPink.code,
        __italic: true,
      },
      parameter: {
        foreground: this.palette.Iron.code,
        __italic: true,
      },
      function: {
        foreground: this.palette.Calico.code,
        __italic: true,
      },
      "function.declaration": {
        foreground: this.palette.MonteCarlo.code,
      },
      "function.defaultLibrary": {
        foreground: this.palette.SkyBlue.code,
        __italic: true,
      },
      method: {
        foreground: this.palette.Calico.code,
        __italic: true,
      },
      "method.declaration": {
        foreground: this.palette.MonteCarlo.code,
      },
      "method.defaultLibrary": {
        foreground: this.palette.SkyBlue.code,
        __italic: true,
      },
      keyword: {
        foreground: this.palette.Viola.code,
      },
      namespace: {
        foreground: this.palette.PoloBlue.code,
        __italic: true,
      },
      "namespace.defaultLibrary": {
        foreground: this.palette.PinkSalmon.code,
        __italic: true,
      },
      class: {
        foreground: this.palette.PoloBlue.code,
        __italic: true,
      },
      "class.defaultLibrary": {
        foreground: this.palette.PinkSalmon.code,
        __italic: true,
      },
      struct: {
        foreground: this.palette.PoloBlue.code,
        __italic: true,
      },
      type: {
        foreground: this.palette.IrisBlue.code,
      },
      "type.defaultLibrary": {
        foreground: this.palette.PinkSalmon.code,
        __italic: true,
      },
      operator: {
        foreground: this.palette.Jonquil.code,
      },
      string: {
        foreground: this.palette.SwampGreen.code,
      },
    };

    if (style.toLowerCase() === "italic") {
      return this.#italic(rules);
    }
    return rules;
  }
}

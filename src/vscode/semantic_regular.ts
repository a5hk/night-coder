import { Palette } from "../common/colors.js";

export interface semanticRule {
  [propName: string]: { foreground?: string; fontStyle?: string; __italic?: boolean };
}

export class SemanticTheme {
  palette: Palette;

  constructor(palette: Palette) {
    this.palette = palette;
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
      class: {
        __italic: true,
        foreground: this.palette.namespaceClassStructColor.code,
      },
      "class.builtin": {
        __italic: true,
        foreground: this.palette.defaultLibraryClassTypeColor.code,
      }, // python
      "class.defaultLibrary": {
        __italic: true,
        foreground: this.palette.defaultLibraryClassTypeColor.code,
      },

      function: {
        __italic: true,
        foreground: this.palette.functionCallColor.code,
      },
      "function.builtin": {
        __italic: true,
        foreground: this.palette.defaultLibraryFunctionColor.code,
      }, // python
      "function.declaration": {
        foreground: this.palette.functionDeclarationColor.code,
      },
      "function.defaultLibrary": {
        __italic: true,
        foreground: this.palette.defaultLibraryFunctionColor.code,
      },
      keyword: {
        foreground: this.palette.keywordColor.code,
      },
      method: {
        __italic: true,
        foreground: this.palette.functionCallColor.code,
      },
      "method.builtin": {
        __italic: true,
        foreground: this.palette.defaultLibraryFunctionColor.code,
      }, // python
      "method.declaration": {
        foreground: this.palette.functionDeclarationColor.code,
      },
      "method.defaultLibrary": {
        __italic: true,
        foreground: this.palette.defaultLibraryFunctionColor.code,
      },
      namespace: {
        __italic: true,
        foreground: this.palette.namespaceClassStructColor.code,
      },
      "namespace.defaultLibrary": {
        __italic: true,
        foreground: this.palette.defaultLibraryClassTypeColor.code,
      },
      operator: {
        foreground: this.palette.operatorColor.code,
      },
      parameter: {
        __italic: true,
        foreground: this.palette.parameterArgumentColor.code,
      },
      property: {
        __italic: true,
        foreground: this.palette.propertyColor.code,
      },
      string: {
        foreground: this.palette.stringColor.code,
      },
      struct: {
        __italic: true,
        foreground: this.palette.namespaceClassStructColor.code,
      },
      type: {
        foreground: this.palette.typeColor.code,
      },
      "type.defaultLibrary": {
        __italic: true,
        foreground: this.palette.defaultLibraryClassTypeColor.code,
      },
      variable: {
        foreground: this.palette.variableColor.code,
      },
      "variable.defaultLibrary": {
        foreground: this.palette.defaultLibraryClassTypeColor.code,
      },
      "variable.readonly": {
        foreground: this.palette.constantColor.code,
      },
    };

    if (style.toLowerCase() === "italic") {
      return this.#italic(rules);
    }
    return rules;
  }
}

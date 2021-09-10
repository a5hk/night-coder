import { ColorPalette } from "../common/colors.js";

export interface semanticRule {
  [propName: string]: { foreground?: string; fontStyle?: string; __italic?: boolean };
}

export class SemanticTheme {
  palette: ColorPalette;

  constructor(palette: ColorPalette) {
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
      variable: {
        foreground: this.palette.variableColor.code,
      },
      "variable.readonly": {
        foreground: this.palette.constantColor.code,
      },
      "variable.defaultLibrary": {
        foreground: this.palette.defaultLibraryClassTypeColor.code,
      },
      property: {
        foreground: this.palette.propertyColor.code,
        __italic: true,
      },
      parameter: {
        foreground: this.palette.parameterArgumentColor.code,
        __italic: true,
      },
      function: {
        foreground: this.palette.functionCallColor.code,
        __italic: true,
      },
      "function.declaration": {
        foreground: this.palette.functionDeclarationColor.code,
      },
      "function.defaultLibrary": {
        foreground: this.palette.defaultLibraryFunctionColor.code,
        __italic: true,
      },
      "function.builtin": {
        foreground: this.palette.defaultLibraryFunctionColor.code,
        __italic: true,
      }, // python
      method: {
        foreground: this.palette.functionCallColor.code,
        __italic: true,
      },
      "method.declaration": {
        foreground: this.palette.functionDeclarationColor.code,
      },
      "method.defaultLibrary": {
        foreground: this.palette.defaultLibraryFunctionColor.code,
        __italic: true,
      },
      "method.builtin": {
        foreground: this.palette.defaultLibraryFunctionColor.code,
        __italic: true,
      }, // python
      keyword: {
        foreground: this.palette.keywordColor.code,
      },
      namespace: {
        foreground: this.palette.namespaceClassStructColor.code,
        __italic: true,
      },
      "namespace.defaultLibrary": {
        foreground: this.palette.defaultLibraryClassTypeColor.code,
        __italic: true,
      },
      class: {
        foreground: this.palette.namespaceClassStructColor.code,
        __italic: true,
      },
      "class.defaultLibrary": {
        foreground: this.palette.defaultLibraryClassTypeColor.code,
        __italic: true,
      },
      "class.builtin": {
        foreground: this.palette.defaultLibraryClassTypeColor.code,
        __italic: true,
      }, // python
      struct: {
        foreground: this.palette.namespaceClassStructColor.code,
        __italic: true,
      },
      type: {
        foreground: this.palette.typeColor.code,
      },
      "type.defaultLibrary": {
        foreground: this.palette.defaultLibraryClassTypeColor.code,
        __italic: true,
      },
      operator: {
        foreground: this.palette.operatorColor.code,
      },
      string: {
        foreground: this.palette.stringColor.code,
      },
    };

    if (style.toLowerCase() === "italic") {
      return this.#italic(rules);
    }
    return rules;
  }
}

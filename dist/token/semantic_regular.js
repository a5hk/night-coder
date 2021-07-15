import { tokenColorPalette } from "../common/colors.js";
export function semanticRules(palette) {
    return {
        variable: {
            foreground: tokenColorPalette.getColor("FrenchGray", palette),
        },
        "variable.readonly": {
            foreground: tokenColorPalette.getColor("Geraldine", palette),
        },
        "variable.defaultLibrary": {
            foreground: tokenColorPalette.getColor("PinkSalmon", palette),
        },
        property: {
            foreground: tokenColorPalette.getColor("TonysPink", palette),
            __italic: true,
        },
        parameter: {
            foreground: tokenColorPalette.getColor("Iron", palette),
            __italic: true,
        },
        function: {
            foreground: tokenColorPalette.getColor("Calico", palette),
            __italic: true,
        },
        "function.declaration": {
            foreground: tokenColorPalette.getColor("MonteCarlo", palette),
        },
        "function.defaultLibrary": {
            foreground: tokenColorPalette.getColor("Bermuda", palette),
            __italic: true,
        },
        method: {
            foreground: tokenColorPalette.getColor("Calico", palette),
            __italic: true,
        },
        "method.declaration": {
            foreground: tokenColorPalette.getColor("MonteCarlo", palette),
        },
        "method.defaultLibrary": {
            foreground: tokenColorPalette.getColor("Bermuda", palette),
            __italic: true,
        },
        keyword: {
            foreground: tokenColorPalette.getColor("Viola", palette),
        },
        namespace: {
            foreground: tokenColorPalette.getColor("PoloBlue", palette),
            __italic: true,
        },
        "namespace.defaultLibrary": {
            foreground: tokenColorPalette.getColor("PinkSalmon", palette),
            __italic: true,
        },
        class: {
            foreground: tokenColorPalette.getColor("PoloBlue", palette),
            __italic: true,
        },
        "class.defaultLibrary": {
            foreground: tokenColorPalette.getColor("PinkSalmon", palette),
            __italic: true,
        },
        struct: {
            foreground: tokenColorPalette.getColor("PoloBlue", palette),
            __italic: true,
        },
        type: {
            foreground: tokenColorPalette.getColor("IrisBlue", palette),
        },
        "type.defaultLibrary": {
            foreground: tokenColorPalette.getColor("PinkSalmon", palette),
            __italic: true,
        },
        operator: {
            foreground: tokenColorPalette.getColor("Jonquil", palette),
        },
        string: {
            foreground: tokenColorPalette.getColor("SwampGreen", palette),
        },
    };
}

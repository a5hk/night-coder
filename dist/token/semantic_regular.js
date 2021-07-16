import { tokenColorPalette } from "../common/colors.js";
export class semanticTheme {
    static italic(theme) {
        var _a;
        for (const k in theme) {
            if ((_a = theme[k]) === null || _a === void 0 ? void 0 : _a.__italic) {
                theme[k] = Object.assign(Object.assign({}, theme[k]), { fontStyle: "italic" });
            }
        }
        return theme;
    }
    static getPaletteRules(style, palette) {
        const rules = {
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
        if (style === "italic") {
            return this.italic(rules);
        }
        return rules;
    }
}

var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SemanticTheme_instances, _SemanticTheme_italic;
import { TokenColorPalette } from "../common/colors.js";
export class SemanticTheme {
    constructor(palette = "") {
        _SemanticTheme_instances.add(this);
        this.palette = new TokenColorPalette(palette);
    }
    getPaletteRules(style) {
        const rules = {
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
            "function.builtin": {
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
            "method.builtin": {
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
            "class.builtin": {
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
            return __classPrivateFieldGet(this, _SemanticTheme_instances, "m", _SemanticTheme_italic).call(this, rules);
        }
        return rules;
    }
}
_SemanticTheme_instances = new WeakSet(), _SemanticTheme_italic = function _SemanticTheme_italic(theme) {
    var _a;
    for (const k in theme) {
        if ((_a = theme[k]) === null || _a === void 0 ? void 0 : _a.__italic) {
            theme[k] = Object.assign(Object.assign({}, theme[k]), { fontStyle: "italic" });
        }
    }
    return theme;
};

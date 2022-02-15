var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SemanticTheme_instances, _SemanticTheme_italic;
export class SemanticTheme {
    constructor(palette) {
        _SemanticTheme_instances.add(this);
        this.palette = palette;
    }
    getPaletteRules(style) {
        const rules = {
            class: {
                __italic: true,
                foreground: this.palette.namespaceClassStructColor.code,
            },
            "class.builtin": {
                __italic: true,
                foreground: this.palette.defaultLibraryClassTypeColor.code,
            },
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
            },
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
            },
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

var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TokenColor_colorMap;
import chroma from "chroma-js";
function hexAlphaToDec(alpha) {
    return parseInt(alpha, 16) / 255;
}
function mix(alpha) {
    return chroma.mix("#030917", "#ffffff", hexAlphaToDec(alpha), "rgb").toString();
}
class TokenColor {
    constructor() {
        _TokenColor_colorMap.set(this, void 0);
        __classPrivateFieldSet(this, _TokenColor_colorMap, new Map(), "f");
        __classPrivateFieldGet(this, _TokenColor_colorMap, "f").set("Bermuda", {
            code: "#70dbc1",
            pastelCode: "#8cd4c2",
            description: "Default library function, HTML inline tag",
        });
        __classPrivateFieldGet(this, _TokenColor_colorMap, "f").set("Calico", {
            code: "#e0cd94",
            pastelCode: "#e3d7b5",
            description: "Function call, Attribute name",
        });
        __classPrivateFieldGet(this, _TokenColor_colorMap, "f").set("FrenchGray", {
            code: mix("c5"),
            pastelCode: mix("c5"),
            description: "Foreground, Variable",
        });
        __classPrivateFieldGet(this, _TokenColor_colorMap, "f").set("Geraldine", {
            code: "#ff7979",
            pastelCode: "#dd8888",
            description: "Constant, HTML unrecognized tag",
        });
        __classPrivateFieldGet(this, _TokenColor_colorMap, "f").set("IndianKhaki", {
            code: "#c3ab85",
            pastelCode: "#d9c9af",
            description: "Miscellaneous",
        });
        __classPrivateFieldGet(this, _TokenColor_colorMap, "f").set("IrisBlue", {
            code: "#0bc2cb",
            pastelCode: "#a3d9dc",
            description: "Type",
        });
        __classPrivateFieldGet(this, _TokenColor_colorMap, "f").set("Iron", {
            code: mix("e5"),
            pastelCode: mix("e5"),
            description: "Parameter, Argument",
        });
        __classPrivateFieldGet(this, _TokenColor_colorMap, "f").set("Jonquil", {
            code: "#f2f28c",
            pastelCode: "#e0e0b8",
            description: "Operator",
        });
        __classPrivateFieldGet(this, _TokenColor_colorMap, "f").set("MagicMint", {
            code: "#93ecb8",
            pastelCode: "#b8e0c8",
            description: "Comparison/Logical operator",
        });
        __classPrivateFieldGet(this, _TokenColor_colorMap, "f").set("Mako", {
            code: mix("44"),
            pastelCode: mix("44"),
            description: "Comment",
        });
        __classPrivateFieldGet(this, _TokenColor_colorMap, "f").set("Mischka", {
            code: mix("aa"),
            pastelCode: mix("aa"),
            description: "Documentation comment",
        });
        __classPrivateFieldGet(this, _TokenColor_colorMap, "f").set("MonteCarlo", {
            code: "#85c3ab",
            pastelCode: "#a9d6c4",
            description: "Function declaration, HTML link tag",
        });
        __classPrivateFieldGet(this, _TokenColor_colorMap, "f").set("PaleCornflowerBlue", {
            code: "#bfa6f2",
            pastelCode: "#c5b8e0",
            description: "Non variable constant, HTML custom tag",
        });
        __classPrivateFieldGet(this, _TokenColor_colorMap, "f").set("PinkSalmon", {
            code: "#ff99b3",
            pastelCode: "#d9a6b3",
            description: "Default library class/type, HTML object tag",
        });
        __classPrivateFieldGet(this, _TokenColor_colorMap, "f").set("PoloBlue", {
            code: "#859dc3",
            pastelCode: "#bdc8db",
            description: "Namespace/Class/Struct, HTML style tag",
        });
        __classPrivateFieldGet(this, _TokenColor_colorMap, "f").set("StormGrey", {
            code: mix("77"),
            pastelCode: mix("77"),
            description: "Tag punctuation",
        });
        __classPrivateFieldGet(this, _TokenColor_colorMap, "f").set("Sunflower", {
            code: "#d9d326",
            pastelCode: "#dfdd9f",
            description: "Script tag",
        });
        __classPrivateFieldGet(this, _TokenColor_colorMap, "f").set("SwampGreen", {
            code: "#9ebc8f",
            pastelCode: "#adc2a3",
            description: "String",
        });
        __classPrivateFieldGet(this, _TokenColor_colorMap, "f").set("TonysPink", {
            code: "#e4aa81",
            pastelCode: "#dcbaa3",
            description: "Property, Tag ",
        });
        __classPrivateFieldGet(this, _TokenColor_colorMap, "f").set("Viola", {
            code: "#c385bc",
            pastelCode: "#d9a6d3",
            description: "Keyword, HTML meta tag",
        });
    }
    getColor(name, palette = "") {
        const c = __classPrivateFieldGet(this, _TokenColor_colorMap, "f").get(name);
        if (c) {
            return palette == "pastel" ? c.pastelCode : c.code;
        }
        return mix("c5");
    }
    getMap() {
        return __classPrivateFieldGet(this, _TokenColor_colorMap, "f");
    }
}
_TokenColor_colorMap = new WeakMap();
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
    activeIndentGuideBackground: "#53ac53",
    editorErrorForeground: "#ff7575",
    editorInfoForeground: "#02cad4",
    progressBarBackground: "#d9d326",
    statusBarBackground: "#006600",
    statusBarDebuggingBackground: "#9b2c2c",
    statusBarDebuggingBorder: "#770000",
    statusBarDebuggingForeground: "#fdf7f7",
    statusBarForeground: "#f5fff5",
    statusBarNoFolderBackground: "#553c9a",
    statusBarNoFolderForeground: "#ede9f6",
    statusBarRemoteBackground: "#660066",
    statusBarRemoteForeground: "#fff5ff",
    textLinkForeground: "#89b971",
    inlineValuesBackground: "#c3ab8555",
    inlineValuesForeground: mix("cc"),
};
export const terminalColors = {
    ansiBrightBlack: "#888b92",
    ansiBrightBlue: "#80bfff",
    ansiBrightCyan: "#0fa5d7",
    ansiBrightGreen: "#89b971",
    ansiBrightMagenta: "#f28ca6",
    ansiBrightRed: "#ef7b6d",
    ansiBrightWhite: "#c5c6c9",
    ansiBlack: "#353a45",
    ansiBlue: "#859dc3",
    ansiBrightYellow: "#f5d780",
    ansiGreen: "#85c3ab",
    ansiMagenta: "#c385bc",
    ansiRed: "#ff7575",
    ansiWhite: "#acaeb3",
    ansiYellow: "#d9d326",
};

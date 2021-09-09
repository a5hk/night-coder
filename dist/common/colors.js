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
var _Color_code;
import chroma from "chroma-js";
export class Color {
    constructor(code, description = "") {
        _Color_code.set(this, void 0);
        this.description = "";
        __classPrivateFieldSet(this, _Color_code, code, "f");
        this.description = description;
    }
    get code() {
        return __classPrivateFieldGet(this, _Color_code, "f");
    }
    set code(hex) {
        if (/^#[0-9a-f]{6}$/i.test(hex)) {
            __classPrivateFieldSet(this, _Color_code, hex, "f");
        }
    }
}
_Color_code = new WeakMap();
function hexAlphaToDec(alpha) {
    return parseInt(alpha, 16) / 255;
}
function mix(alpha) {
    return chroma.mix("#030917", "#ffffff", hexAlphaToDec(alpha), "rgb").toString();
}
function colorDescriptor(c, enumerable = false) {
    return () => {
        let color = c;
        return {
            enumerable: enumerable,
            get() {
                return color;
            },
            set(c) {
                color = c;
            },
        };
    };
}
function BasePalette(descriptors) {
    return class {
        constructor() {
            let k;
            for (k in descriptors) {
                Object.defineProperty(this, k, descriptors[k]());
            }
        }
    };
}
export class ColorPalette extends BasePalette({
    defaultLibraryFunctionColor: colorDescriptor(new Color("#7dbbe8", "Default library function"), true),
    functionCallColor: colorDescriptor(new Color("#e0cd94", "Function call"), true),
    foregroundColor: colorDescriptor(new Color(mix("c5"), "Foreground"), true),
    variableColor: colorDescriptor(new Color(mix("c5"), "Variable"), true),
    constantColor: colorDescriptor(new Color("#ef7762", "Constant"), true),
    miscellaneousColor: colorDescriptor(new Color("#c3ab85", "Miscellaneous"), true),
    typeColor: colorDescriptor(new Color("#0bc2cb", "Type"), true),
    parameterArgumentColor: colorDescriptor(new Color(mix("e5"), "Parameter, Argument"), true),
    operatorColor: colorDescriptor(new Color("#f2f28c", "Operator"), true),
    comparisonLogicalOperatorColor: colorDescriptor(new Color("#93ecb8", "Comparison/Logical operator"), true),
    commentColor: colorDescriptor(new Color(mix("44"), "Comment"), true),
    documentationColor: colorDescriptor(new Color(mix("aa"), "Documentation"), true),
    functionDeclarationColor: colorDescriptor(new Color("#85c3ab", "Function declaration"), true),
    literalConstantColor: colorDescriptor(new Color("#bfa6f2", "Literal constant"), true),
    defaultLibraryClassTypeColor: colorDescriptor(new Color("#ff99b3", "Default library class/type"), true),
    namespaceClassStructColor: colorDescriptor(new Color("#859dc3", "Namespace/Class/Struct"), true),
    stringColor: colorDescriptor(new Color("#84bd7f", "String"), true),
    propertyColor: colorDescriptor(new Color("#e4aa81", "Property"), true),
    keywordColor: colorDescriptor(new Color("#c385bc", "Keyword"), true),
    tagColor: colorDescriptor(new Color("#e4aa81", "Tag"), true),
    italicColor: colorDescriptor(new Color("#93ecb8", "Italic"), true),
    headingColor: colorDescriptor(new Color("#e0cd94", "Heading"), true),
    linkTagColor: colorDescriptor(new Color("#85c3ab", "HTML link tag"), true),
    metaTagColor: colorDescriptor(new Color("#c385bc", "HTML meta tag"), true),
    styleTagColor: colorDescriptor(new Color("#859dc3", "HTML style tag"), true),
    objectTagColor: colorDescriptor(new Color("#ff99b3", "HTML object tag"), true),
    inlineTagColor: colorDescriptor(new Color("#7dbbe8", "HTML inline tag"), true),
    customTagColor: colorDescriptor(new Color("#bfa6f2", "HTML custom tag"), true),
    scriptTagColor: colorDescriptor(new Color("#d9d326", "Script tag"), true),
    attributeNameColor: colorDescriptor(new Color("#e0cd94", "Attribute name"), true),
    tagPunctuationColor: colorDescriptor(new Color(mix("77"), "Tag punctuation"), true),
    unrecognizedTagColor: colorDescriptor(new Color("#ef7762", "HTML unrecognized tag"), true),
    jsonLevel01Color: colorDescriptor(new Color("#e4aa81", "Level 1 JSON key"), true),
    jsonLevel02Color: colorDescriptor(new Color("#c385bc", "Level 2 JSON key"), true),
    jsonLevel03Color: colorDescriptor(new Color("#0bc2cb", "Level 3 JSON key"), true),
    jsonLevel04Color: colorDescriptor(new Color("#e0cd94", "Level 4 JSON key"), true),
    jsonLevel05Color: colorDescriptor(new Color("#ff99b3", "Level 5 JSON key"), true),
    jsonLevel06Color: colorDescriptor(new Color("#7dbbe8", "Level 6 JSON key"), true),
    jsonLevel07Color: colorDescriptor(new Color("#859dc3", "Level 7 JSON key"), true),
    jsonLevel08Color: colorDescriptor(new Color("#ef7762", "Level 8 JSON key"), true),
    jsonLevel09Color: colorDescriptor(new Color("#c3ab85", "Level 9 JSON key"), true),
    jsonLevel10Color: colorDescriptor(new Color("#d9d326", "Level 10 JSON key"), true),
    jsonLevel11Color: colorDescriptor(new Color("#e4aa81", "Level > 10 JSON key"), true),
    background: colorDescriptor(new Color(mix("0"))),
    background11: colorDescriptor(new Color(mix("11"))),
    background22: colorDescriptor(new Color(mix("22"))),
    background25: colorDescriptor(new Color(mix("25"))),
    background33: colorDescriptor(new Color(mix("33"))),
    background44: colorDescriptor(new Color(mix("44"))),
    background55: colorDescriptor(new Color(mix("55"))),
    background66: colorDescriptor(new Color(mix("66"))),
    background77: colorDescriptor(new Color(mix("77"))),
    background88: colorDescriptor(new Color(mix("88"))),
    background99: colorDescriptor(new Color(mix("99"))),
    backgroundaa: colorDescriptor(new Color(mix("aa"))),
    backgroundbb: colorDescriptor(new Color(mix("bb"))),
    backgroundc5: colorDescriptor(new Color(mix("c5"))),
    backgroundcc: colorDescriptor(new Color(mix("cc"))),
    backgrounddd: colorDescriptor(new Color(mix("dd"))),
    backgrounde5: colorDescriptor(new Color(mix("e5"))),
    backgroundee: colorDescriptor(new Color(mix("ee"))),
    contrastBackground: colorDescriptor(new Color("#02050e")),
    textLinkForeground: colorDescriptor(new Color("#89b971")),
    statusBarBackground: colorDescriptor(new Color("#006600")),
    statusBarForeground: colorDescriptor(new Color("#f5fff5")),
    editorInfoForeground: colorDescriptor(new Color("#02cad4")),
    editorErrorForeground: colorDescriptor(new Color("#ff7575")),
    progressBarBackground: colorDescriptor(new Color("#d9d326")),
    inlineValuesForeground: colorDescriptor(new Color(mix("cc"))),
    statusBarDebuggingBorder: colorDescriptor(new Color("#770000")),
    inlineValuesBackground: colorDescriptor(new Color("#c3ab8555")),
    statusBarRemoteBackground: colorDescriptor(new Color("#660066")),
    statusBarRemoteForeground: colorDescriptor(new Color("#fff5ff")),
    activeIndentGuideBackground: colorDescriptor(new Color("#53ac53")),
    statusBarNoFolderBackground: colorDescriptor(new Color("#553c9a")),
    statusBarNoFolderForeground: colorDescriptor(new Color("#ede9f6")),
    statusBarDebuggingBackground: colorDescriptor(new Color("#9b2c2c")),
    statusBarDebuggingForeground: colorDescriptor(new Color("#fdf7f7")),
    ansiBrightBlack: colorDescriptor(new Color("#888b92")),
    ansiBrightBlue: colorDescriptor(new Color("#80bfff")),
    ansiBrightCyan: colorDescriptor(new Color("#0fa5d7")),
    ansiBrightGreen: colorDescriptor(new Color("#89b971")),
    ansiBrightMagenta: colorDescriptor(new Color("#f28ca6")),
    ansiBrightRed: colorDescriptor(new Color("#ef7b6d")),
    ansiBrightWhite: colorDescriptor(new Color("#c5c6c9")),
    ansiBlack: colorDescriptor(new Color("#353a45")),
    ansiBlue: colorDescriptor(new Color("#859dc3")),
    ansiBrightYellow: colorDescriptor(new Color("#f5d780")),
    ansiGreen: colorDescriptor(new Color("#85c3ab")),
    ansiMagenta: colorDescriptor(new Color("#c385bc")),
    ansiRed: colorDescriptor(new Color("#ff7575")),
    ansiWhite: colorDescriptor(new Color("#acaeb3")),
    ansiYellow: colorDescriptor(new Color("#d9d326")),
}) {
    toString() {
        return Object.entries(Object.values(this)
            .map((c) => [c.code, c.description])
            .reduce((acc, nv) => {
            acc[nv[0]] ? (acc[nv[0]] += `, ${nv[1]}`) : (acc[nv[0]] = nv[1]);
            return acc;
        }, []))
            .map((c) => [
            "",
            c[1],
            `![${c[0]}](https://via.placeholder.com/23/${c[0].replace("#", "")}/?text=+)`,
            c[0].toLocaleUpperCase(),
            "",
        ].join("|"))
            .join("\n");
    }
}

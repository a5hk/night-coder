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
function colorDescriptor(c, enumerable = true) {
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
    defaultLibraryFunctionColor: colorDescriptor(new Color("#7dbbe8", "Default library function")),
    functionCallColor: colorDescriptor(new Color("#e0cd94", "Function call")),
    foregroundColor: colorDescriptor(new Color(mix("c5"), "Foreground")),
    variableColor: colorDescriptor(new Color(mix("c5"), "Variable")),
    constantColor: colorDescriptor(new Color("#ef7762", "Constant")),
    miscellaneousColor: colorDescriptor(new Color("#c3ab85", "Miscellaneous")),
    typeColor: colorDescriptor(new Color("#0bc2cb", "Type")),
    parameterArgumentColor: colorDescriptor(new Color(mix("e5"), "Parameter, Argument")),
    operatorColor: colorDescriptor(new Color("#f2f28c", "Operator")),
    comparisonLogicalOperatorColor: colorDescriptor(new Color("#93ecb8", "Comparison/Logical operator")),
    commentColor: colorDescriptor(new Color(mix("44"), "Comment")),
    documentationColor: colorDescriptor(new Color(mix("aa"), "Documentation")),
    functionDeclarationColor: colorDescriptor(new Color("#85c3ab", "Function declaration")),
    literalConstantColor: colorDescriptor(new Color("#bfa6f2", "Literal constant")),
    defaultLibraryClassTypeColor: colorDescriptor(new Color("#ff99b3", "Default library class/type")),
    namespaceClassStructColor: colorDescriptor(new Color("#859dc3", "Namespace/Class/Struct")),
    stringColor: colorDescriptor(new Color("#84bd7f", "String")),
    propertyColor: colorDescriptor(new Color("#e4aa81", "Property")),
    keywordColor: colorDescriptor(new Color("#c385bc", "Keyword")),
    tagColor: colorDescriptor(new Color("#e4aa81", "Tag")),
    italicColor: colorDescriptor(new Color("#93ecb8", "Italic")),
    headingColor: colorDescriptor(new Color("#e0cd94", "Heading")),
    linkTagColor: colorDescriptor(new Color("#85c3ab", "HTML link tag")),
    metaTagColor: colorDescriptor(new Color("#c385bc", "HTML meta tag")),
    styleTagColor: colorDescriptor(new Color("#859dc3", "HTML style tag")),
    objectTagColor: colorDescriptor(new Color("#ff99b3", "HTML object tag")),
    inlineTagColor: colorDescriptor(new Color("#7dbbe8", "HTML inline tag")),
    customTagColor: colorDescriptor(new Color("#bfa6f2", "HTML custom tag")),
    scriptTagColor: colorDescriptor(new Color("#d9d326", "Script tag")),
    attributeNameColor: colorDescriptor(new Color("#e0cd94", "Attribute name")),
    tagPunctuationColor: colorDescriptor(new Color(mix("77"), "Tag punctuation")),
    unrecognizedTagColor: colorDescriptor(new Color("#ef7762", "HTML unrecognized tag")),
    jsonLevel01Color: colorDescriptor(new Color("#e4aa81", "Level 1 JSON key")),
    jsonLevel02Color: colorDescriptor(new Color("#c385bc", "Level 2 JSON key")),
    jsonLevel03Color: colorDescriptor(new Color("#0bc2cb", "Level 3 JSON key")),
    jsonLevel04Color: colorDescriptor(new Color("#e0cd94", "Level 4 JSON key")),
    jsonLevel05Color: colorDescriptor(new Color("#ff99b3", "Level 5 JSON key")),
    jsonLevel06Color: colorDescriptor(new Color("#7dbbe8", "Level 6 JSON key")),
    jsonLevel07Color: colorDescriptor(new Color("#859dc3", "Level 7 JSON key")),
    jsonLevel08Color: colorDescriptor(new Color("#ef7762", "Level 8 JSON key")),
    jsonLevel09Color: colorDescriptor(new Color("#c3ab85", "Level 9 JSON key")),
    jsonLevel10Color: colorDescriptor(new Color("#d9d326", "Level 10 JSON key")),
    jsonLevel11Color: colorDescriptor(new Color("#e4aa81", "Level > 10 JSON key")),
    background: colorDescriptor(new Color(mix("0")), false),
    background11: colorDescriptor(new Color(mix("11")), false),
    background22: colorDescriptor(new Color(mix("22")), false),
    background25: colorDescriptor(new Color(mix("25")), false),
    background33: colorDescriptor(new Color(mix("33")), false),
    background44: colorDescriptor(new Color(mix("44")), false),
    background55: colorDescriptor(new Color(mix("55")), false),
    background66: colorDescriptor(new Color(mix("66")), false),
    background77: colorDescriptor(new Color(mix("77")), false),
    background88: colorDescriptor(new Color(mix("88")), false),
    background99: colorDescriptor(new Color(mix("99")), false),
    backgroundaa: colorDescriptor(new Color(mix("aa")), false),
    backgroundbb: colorDescriptor(new Color(mix("bb")), false),
    backgroundc5: colorDescriptor(new Color(mix("c5")), false),
    backgroundcc: colorDescriptor(new Color(mix("cc")), false),
    backgrounddd: colorDescriptor(new Color(mix("dd")), false),
    backgrounde5: colorDescriptor(new Color(mix("e5")), false),
    backgroundee: colorDescriptor(new Color(mix("ee")), false),
    contrastBackground: colorDescriptor(new Color("#02050e"), false),
    textLinkForeground: colorDescriptor(new Color("#89b971"), false),
    statusBarBackground: colorDescriptor(new Color("#006600"), false),
    statusBarForeground: colorDescriptor(new Color("#f5fff5"), false),
    editorInfoForeground: colorDescriptor(new Color("#02cad4"), false),
    editorErrorForeground: colorDescriptor(new Color("#ff7575"), false),
    progressBarBackground: colorDescriptor(new Color("#d9d326"), false),
    inlineValuesForeground: colorDescriptor(new Color(mix("cc")), false),
    statusBarDebuggingBorder: colorDescriptor(new Color("#770000"), false),
    inlineValuesBackground: colorDescriptor(new Color("#c3ab8555"), false),
    statusBarRemoteBackground: colorDescriptor(new Color("#660066"), false),
    statusBarRemoteForeground: colorDescriptor(new Color("#fff5ff"), false),
    activeIndentGuideBackground: colorDescriptor(new Color("#53ac53"), false),
    statusBarNoFolderBackground: colorDescriptor(new Color("#553c9a"), false),
    statusBarNoFolderForeground: colorDescriptor(new Color("#ede9f6"), false),
    statusBarDebuggingBackground: colorDescriptor(new Color("#9b2c2c"), false),
    statusBarDebuggingForeground: colorDescriptor(new Color("#fdf7f7"), false),
    ansiBrightBlack: colorDescriptor(new Color("#888b92"), false),
    ansiBrightBlue: colorDescriptor(new Color("#80bfff"), false),
    ansiBrightCyan: colorDescriptor(new Color("#0fa5d7"), false),
    ansiBrightGreen: colorDescriptor(new Color("#89b971"), false),
    ansiBrightMagenta: colorDescriptor(new Color("#f28ca6"), false),
    ansiBrightRed: colorDescriptor(new Color("#ef7b6d"), false),
    ansiBrightWhite: colorDescriptor(new Color("#c5c6c9"), false),
    ansiBlack: colorDescriptor(new Color("#353a45"), false),
    ansiBlue: colorDescriptor(new Color("#859dc3"), false),
    ansiBrightYellow: colorDescriptor(new Color("#f5d780"), false),
    ansiGreen: colorDescriptor(new Color("#85c3ab"), false),
    ansiMagenta: colorDescriptor(new Color("#c385bc"), false),
    ansiRed: colorDescriptor(new Color("#ff7575"), false),
    ansiWhite: colorDescriptor(new Color("#acaeb3"), false),
    ansiYellow: colorDescriptor(new Color("#d9d326"), false),
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

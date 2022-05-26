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
function mix(alpha, background) {
    return chroma.mix(background, "#ffffff", hexAlphaToDec(alpha), "rgb").toString();
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
export function colorPaletteFactory(bg = "#030917") {
    return class ColorPalette extends BasePalette({
        annotationColor: colorDescriptor(new Color("#c3ab85", "Annotation"), true),
        commentColor: colorDescriptor(new Color(mix("44", bg), "Comment"), true),
        comparisonLogicalOperatorColor: colorDescriptor(new Color("#93ecb8", "Comparison/Logical operator"), true),
        constantColor: colorDescriptor(new Color("#f1836f", "Constant"), true),
        defaultLibraryClassTypeColor: colorDescriptor(new Color("#ff99b3", "Default library class/type"), true),
        defaultLibraryFunctionColor: colorDescriptor(new Color("#7dbbe8", "Default library function"), true),
        documentationColor: colorDescriptor(new Color(mix("aa", bg), "Documentation"), true),
        foregroundColor: colorDescriptor(new Color(mix("c0", bg), "Foreground"), true),
        functionCallColor: colorDescriptor(new Color("#ddc888", "Function call"), true),
        functionDeclarationColor: colorDescriptor(new Color("#85c3ab", "Function declaration"), true),
        importColor: colorDescriptor(new Color("#8dbf82", "Import/Require/Use"), true),
        keywordColor: colorDescriptor(new Color("#c982c1", "Keyword"), true),
        literalConstantColor: colorDescriptor(new Color("#bfa6f2", "Literal constant"), true),
        miscellaneousColor: colorDescriptor(new Color("#c3ab85", "Miscellaneous"), true),
        namespaceClassStructColor: colorDescriptor(new Color("#829dc9", "Namespace/Class/Struct"), true),
        operatorColor: colorDescriptor(new Color("#f2f28c", "Operator"), true),
        parameterArgumentColor: colorDescriptor(new Color(mix("e5", bg), "Parameter, Argument"), true),
        propertyColor: colorDescriptor(new Color("#e4aa81", "Property"), true),
        stringColor: colorDescriptor(new Color("#8dbf82", "String"), true),
        typeColor: colorDescriptor(new Color("#0bc2cb", "Type"), true),
        variableColor: colorDescriptor(new Color(mix("c0", bg), "Variable"), true),
        attributeNameColor: colorDescriptor(new Color("#ddc888", "Attribute name"), true),
        customTagColor: colorDescriptor(new Color("#bfa6f2", "HTML custom tag"), true),
        headingColor: colorDescriptor(new Color("#ddc888", "Heading"), true),
        inlineTagColor: colorDescriptor(new Color("#7dbbe8", "HTML inline tag"), true),
        italicColor: colorDescriptor(new Color("#93ecb8", "Italic"), true),
        linkTagColor: colorDescriptor(new Color("#85c3ab", "HTML link tag"), true),
        metaTagColor: colorDescriptor(new Color("#c982c1", "HTML meta tag"), true),
        objectTagColor: colorDescriptor(new Color("#ff99b3", "HTML object tag"), true),
        scriptTagColor: colorDescriptor(new Color("#d9d326", "Script tag"), true),
        styleTagColor: colorDescriptor(new Color("#829dc9", "HTML style tag"), true),
        tagColor: colorDescriptor(new Color("#e4aa81", "Tag"), true),
        tagPunctuationColor: colorDescriptor(new Color(mix("77", bg), "Tag punctuation"), true),
        unrecognizedTagColor: colorDescriptor(new Color("#f1836f", "HTML unrecognized tag"), true),
        jsonLevel01Color: colorDescriptor(new Color("#e4aa81", "Level 1 JSON key"), true),
        jsonLevel02Color: colorDescriptor(new Color("#c982c1", "Level 2 JSON key"), true),
        jsonLevel03Color: colorDescriptor(new Color("#0bc2cb", "Level 3 JSON key"), true),
        jsonLevel04Color: colorDescriptor(new Color("#ddc888", "Level 4 JSON key"), true),
        jsonLevel05Color: colorDescriptor(new Color("#ff99b3", "Level 5 JSON key"), true),
        jsonLevel06Color: colorDescriptor(new Color("#7dbbe8", "Level 6 JSON key"), true),
        jsonLevel07Color: colorDescriptor(new Color("#829dc9", "Level 7 JSON key"), true),
        jsonLevel08Color: colorDescriptor(new Color("#f1836f", "Level 8 JSON key"), true),
        jsonLevel09Color: colorDescriptor(new Color("#c3ab85", "Level 9 JSON key"), true),
        jsonLevel10Color: colorDescriptor(new Color("#d9d326", "Level 10 JSON key"), true),
        jsonLevel11Color: colorDescriptor(new Color("#e4aa81", "Level > 10 JSON key"), true),
        background: colorDescriptor(new Color(mix("0", bg))),
        background11: colorDescriptor(new Color(mix("11", bg))),
        background1a: colorDescriptor(new Color(mix("1a", bg))),
        background22: colorDescriptor(new Color(mix("22", bg))),
        background25: colorDescriptor(new Color(mix("25", bg))),
        background33: colorDescriptor(new Color(mix("33", bg))),
        background44: colorDescriptor(new Color(mix("44", bg))),
        background55: colorDescriptor(new Color(mix("55", bg))),
        background66: colorDescriptor(new Color(mix("66", bg))),
        background77: colorDescriptor(new Color(mix("77", bg))),
        background88: colorDescriptor(new Color(mix("88", bg))),
        background99: colorDescriptor(new Color(mix("99", bg))),
        backgroundaa: colorDescriptor(new Color(mix("aa", bg))),
        backgroundbb: colorDescriptor(new Color(mix("bb", bg))),
        backgroundc5: colorDescriptor(new Color(mix("c5", bg))),
        backgroundcc: colorDescriptor(new Color(mix("cc", bg))),
        backgrounddd: colorDescriptor(new Color(mix("dd", bg))),
        backgrounde5: colorDescriptor(new Color(mix("e5", bg))),
        backgroundee: colorDescriptor(new Color(mix("ee", bg))),
        contrastBackground: colorDescriptor(new Color("#030612")),
        activeIndentGuideBackground: colorDescriptor(new Color("#53ac53")),
        editorErrorForeground: colorDescriptor(new Color("#ff7575")),
        editorInfoForeground: colorDescriptor(new Color("#02cad4")),
        editorLightBulbAutoFixForeground: colorDescriptor(new Color("#f2f28c")),
        editorLightBulbForeground: colorDescriptor(new Color("#f1836f")),
        inlineValuesBackground: colorDescriptor(new Color("#c3ab8555")),
        inlineValuesForeground: colorDescriptor(new Color(mix("cc", bg))),
        listFocusBackground: colorDescriptor(new Color("#000000f0")),
        progressBarBackground: colorDescriptor(new Color("#d9d326")),
        sideBySideEditorBorder: colorDescriptor(new Color(mix("22", bg))),
        statusBarBackground: colorDescriptor(new Color("#006600")),
        statusBarDebuggingBackground: colorDescriptor(new Color("#9b2c2c")),
        statusBarDebuggingBorder: colorDescriptor(new Color("#770000")),
        statusBarDebuggingForeground: colorDescriptor(new Color("#fdf7f7")),
        statusBarForeground: colorDescriptor(new Color("#f5fff5")),
        statusBarNoFolderBackground: colorDescriptor(new Color("#553c9a")),
        statusBarNoFolderForeground: colorDescriptor(new Color("#ede9f6")),
        statusBarRemoteBackground: colorDescriptor(new Color("#660066")),
        statusBarRemoteForeground: colorDescriptor(new Color("#fff5ff")),
        tabActiveBorder: colorDescriptor(new Color("#009900")),
        textLinkForeground: colorDescriptor(new Color("#89b971")),
        bracketPair1: colorDescriptor(new Color("#f2f28c")),
        bracketPair2: colorDescriptor(new Color("#c982c1")),
        bracketPair3: colorDescriptor(new Color("#93ecb8")),
        bracketPair4: colorDescriptor(new Color("#c3ab85")),
        bracketPair5: colorDescriptor(new Color("#7dbbe8")),
        bracketPair6: colorDescriptor(new Color("#ff99b3")),
        ansiBrightBlack: colorDescriptor(new Color("#888b92")),
        ansiBrightBlue: colorDescriptor(new Color("#80bfff")),
        ansiBrightCyan: colorDescriptor(new Color("#a0f1f8")),
        ansiBrightGreen: colorDescriptor(new Color("#89b971")),
        ansiBrightMagenta: colorDescriptor(new Color("#f28ca6")),
        ansiBrightRed: colorDescriptor(new Color("#f18a7e")),
        ansiBrightWhite: colorDescriptor(new Color("#c5c6c9")),
        ansiBlack: colorDescriptor(new Color("#353a45")),
        ansiBlue: colorDescriptor(new Color("#829dc9")),
        ansiBrightYellow: colorDescriptor(new Color("#f5d780")),
        ansiCyan: colorDescriptor(new Color("#0fc6d7")),
        ansiGreen: colorDescriptor(new Color("#85c3ab")),
        ansiMagenta: colorDescriptor(new Color("#c982c1")),
        ansiRed: colorDescriptor(new Color("#ff7575")),
        ansiWhite: colorDescriptor(new Color("#acaeb3")),
        ansiYellow: colorDescriptor(new Color("#d9d326")),
    }) {
        constructor(name, title) {
            super();
            this.name = name;
            this.variant = title;
            Object.defineProperty(this, "name", { enumerable: false });
            Object.defineProperty(this, "variant", { enumerable: false });
        }
        fullName() {
            return [this.name, this.variant].filter((s) => s !== "Main").join(" ");
        }
        filename() {
            return this.fullName().trim().toLowerCase().replace(/ +/g, "-");
        }
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
        toMarkdownTable() {
            return [
                `### ${this.variant} variant`,
                "",
                "| Scope | Color | Hex |",
                "|:------|:-----:|:----|",
                this.toString(),
            ].join("\n");
        }
    };
}
const availablePalettes = [];
export function registerPalette(p) {
    availablePalettes.push(p);
}
export function getPalettes() {
    return availablePalettes;
}

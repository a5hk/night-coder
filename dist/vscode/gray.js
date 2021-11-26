import { colorPaletteFactory, Color } from "../common/colors.js";
export function garyVariant() {
    const p = new (colorPaletteFactory("#2c2c2c"))("Night Coder Gray", "Gray variant");
    p.defaultLibraryFunctionColor = new Color("#80caff", "Default library function");
    p.functionCallColor = new Color("#e6d299", "Function call");
    p.constantColor = new Color("#ff9e9e", "Constant");
    p.miscellaneousColor = new Color("#d1b485", "Miscellaneous");
    p.annotationColor = new Color("#d1b485", "Annotation");
    p.typeColor = new Color("#04ccd7", "Type");
    p.operatorColor = new Color("#e0e0b8", "Operator");
    p.comparisonLogicalOperatorColor = new Color("#b8e0c8", "Comparison/Logical operator");
    p.functionDeclarationColor = new Color("#42d79e", "Function declaration");
    p.literalConstantColor = new Color("#c5abf7", "Literal constant");
    p.defaultLibraryClassTypeColor = new Color("#fc9cc4", "Default library class/type");
    p.namespaceClassStructColor = new Color("#9db9e7", "Namespace/Class/Struct");
    p.stringColor = new Color("#8fc78a", "String");
    p.importColor = new Color("#8fc78a", "Import/Require/Use");
    p.propertyColor = new Color("#f0a875", "Property");
    p.keywordColor = new Color("#eea0e5", "Keyword");
    p.tagColor = new Color("#f0a875", "Tag");
    p.italicColor = new Color("#b8e0c8", "Italic");
    p.headingColor = new Color("#e6d299", "Heading");
    p.linkTagColor = new Color("#42d79e", "HTML link tag");
    p.metaTagColor = new Color("#eea0e5", "HTML meta tag");
    p.styleTagColor = new Color("#9db9e7", "HTML style tag");
    p.objectTagColor = new Color("#fc9cc4", "HTML object tag");
    p.inlineTagColor = new Color("#80caff", "HTML inline tag");
    p.customTagColor = new Color("#c5abf7", "HTML custom tag");
    p.scriptTagColor = new Color("#e0dc52", "Script tag");
    p.attributeNameColor = new Color("#e6d299", "Attribute name");
    p.unrecognizedTagColor = new Color("#ff9e9e", "HTML unrecognized tag");
    p.jsonLevel01Color = new Color("#f0a875", "Level 1 JSON key");
    p.jsonLevel02Color = new Color("#eea0e5", "Level 2 JSON key");
    p.jsonLevel03Color = new Color("#04ccd7", "Level 3 JSON key");
    p.jsonLevel04Color = new Color("#e6d299", "Level 4 JSON key");
    p.jsonLevel05Color = new Color("#fc9cc4", "Level 5 JSON key");
    p.jsonLevel06Color = new Color("#80caff", "Level 6 JSON key");
    p.jsonLevel07Color = new Color("#9db9e7", "Level 7 JSON key");
    p.jsonLevel08Color = new Color("#ff9e9e", "Level 8 JSON key");
    p.jsonLevel09Color = new Color("#d1b485", "Level 9 JSON key");
    p.jsonLevel10Color = new Color("#e0dc52", "Level 10 JSON key");
    p.jsonLevel11Color = new Color("#f0a875", "Level > 10 JSON key");
    p.contrastBackground = new Color("#262626");
    p.bracketPair1 = new Color("#e0e0b8");
    p.bracketPair2 = new Color("#eea0e5");
    p.bracketPair3 = new Color("#b8e0c8");
    p.bracketPair4 = new Color("#d1b485");
    p.bracketPair5 = new Color("#80caff");
    p.bracketPair6 = new Color("#fc9cc4");
    p.ansiBrightBlack = p.background88;
    p.ansiBrightBlue = new Color("#80caff");
    p.ansiBrightCyan = new Color("#04ccd7");
    p.ansiBrightGreen = new Color("#8fc78a");
    p.ansiBrightMagenta = new Color("#fc9cc4");
    p.ansiBrightRed = new Color("#ff9e9e");
    p.ansiBrightWhite = p.backgroundee;
    p.ansiBrightYellow = new Color("#e6d299");
    p.ansiBlack = new Color("#020203");
    p.ansiBlue = new Color("#9db9e7");
    p.ansiGreen = new Color("#42d79e");
    p.ansiMagenta = new Color("#eea0e5");
    p.ansiWhite = p.backgroundc5;
    p.ansiYellow = new Color("#e0dc52");
    return p;
}

import { colorPaletteFactory } from "../common/colors.js";
import { themeWriter } from "../common/theme-writer.js";
export function vimColoring(palette) {
    const vRules = [
        { fg: palette.defaultLibraryFunctionColor.code, groups: ["NCDefaultLibraryFunctionCall"] },
        { fg: palette.functionCallColor.code, groups: ["NCFunctionCall"] },
        { fg: palette.variableColor.code, groups: ["NCVariable"] },
        { fg: palette.constantColor.code, groups: ["NCConstant"] },
        { fg: palette.miscellaneousColor.code, groups: ["NCMiscellaneous"] },
        { fg: palette.typeColor.code, groups: ["NCType"] },
        { fg: palette.parameterArgumentColor.code, groups: ["NCParameter"] },
        { fg: palette.operatorColor.code, groups: ["NCOperator"] },
        { fg: palette.comparisonLogicalOperatorColor.code, groups: ["NCComparisonLogicalOperator"] },
        { fg: palette.commentColor.code, groups: ["NCComment"], style: "italic" },
        { fg: palette.documentationColor.code, groups: ["NCDocumentationComment"] },
        { fg: palette.functionDeclarationColor.code, groups: ["NCFunctionDeclaration"] },
        { fg: palette.literalConstantColor.code, groups: ["NCLiteralConstant"] },
        { fg: palette.defaultLibraryClassTypeColor.code, groups: ["NCDefaultLibraryClassType"] },
        { fg: palette.namespaceClassStructColor.code, groups: ["NCNamespaceClassStruct"] },
        { fg: palette.stringColor.code, groups: ["NCString"] },
        { fg: palette.propertyColor.code, groups: ["NCProperty"] },
        { fg: palette.keywordColor.code, groups: ["NCKeyword"] },
        { fg: palette.tagPunctuationColor.code, groups: ["NCPunctuation"] },
        { fg: palette.tagColor.code, groups: ["NCTag"] },
        { fg: palette.italicColor.code, groups: ["NCItalic"] },
        { fg: palette.headingColor.code, groups: ["NCHeading"], style: "bold" },
        { fg: palette.linkTagColor.code, groups: ["NCLinkTag"] },
        { fg: palette.metaTagColor.code, groups: ["NCMetaTag"] },
        { fg: palette.styleTagColor.code, groups: ["NCStyleTag"] },
        { fg: palette.objectTagColor.code, groups: ["NCObjectTag"] },
        { fg: palette.inlineTagColor.code, groups: ["NCInlineTag"] },
        { fg: palette.customTagColor.code, groups: ["NCCustomTag"] },
        { fg: palette.scriptTagColor.code, groups: ["NCScriptTag"] },
        { fg: palette.attributeNameColor.code, groups: ["NCAttributeName"] },
        { fg: palette.tagPunctuationColor.code, groups: ["NCTagPunctuation"] },
        { fg: palette.unrecognizedTagColor.code, groups: ["NCUnrecognizedTag"] },
        { fg: palette.jsonLevel01Color.code, groups: ["NCJsonLevel01"] },
        { fg: palette.jsonLevel02Color.code, groups: ["NCJsonLevel02"] },
        { fg: palette.jsonLevel03Color.code, groups: ["NCJsonLevel03"] },
        { fg: palette.jsonLevel04Color.code, groups: ["NCJsonLevel04"] },
        { fg: palette.jsonLevel05Color.code, groups: ["NCJsonLevel05"] },
        { fg: palette.jsonLevel06Color.code, groups: ["NCJsonLevel06"] },
        { fg: palette.jsonLevel07Color.code, groups: ["NCJsonLevel07"] },
        { fg: palette.jsonLevel08Color.code, groups: ["NCJsonLevel08"] },
        { fg: palette.jsonLevel09Color.code, groups: ["NCJsonLevel09"] },
        { fg: palette.jsonLevel10Color.code, groups: ["NCJsonLevel10"] },
        { fg: palette.jsonLevel11Color.code, groups: ["NCJsonLevel11"] },
    ];
    const links = {
        NCComment: ["Comment"],
        NCString: ["String", "Character", "yamlPlainScalar"],
        NCLiteralConstant: ["Number", "Boolean", "Float", "cssAttr", "elixirAtom", "poHeaderItem"],
        NCConstant: [
            "Constant",
            "rubyInstanceVariable",
            "rubyClassVariable",
            "csInterpolationDelimiter",
            "elixirVariable",
            "elixirInterpolationDelimiter",
            "shDeref",
            "yamlNodeTag",
            "yamlAlias",
        ],
        NCFunctionCall: ["Function", "rustMacro", "perlMethod"],
        NCNamespaceClassStruct: [
            "Identifier",
            "phpClasses",
            "rubyModuleName",
            "rubyClassName",
            "rustModPath",
            "csClassType",
            "elixirModuleDeclaration",
            "elixirAlias",
            "perlPackageDecl",
            "perlPackageRef",
        ],
        NCOperator: ["Operator", "cssSelectorOp", "shVarAssign", "shArithRegion", "awkOperator", "awkExpression"],
        NCKeyword: [
            "Statement",
            "PreProc",
            "phpStructure",
            "phpStorageClass",
            "javaScriptFunction",
            "rustStorage",
            "csStorage",
            "csModifier",
            "csClass",
            "javaScopeDecl",
            "javaClassDecl",
            "javaStorageClass",
        ],
        NCType: ["Type"],
        NCTag: ["Tag", "csXmlTag", "xmlTag", "htmlTagName", "xmlTagName"],
        NCMiscellaneous: ["Special", "rustAttribute", "javaAnnotation", "yamlDocumentStart", "poCommentSources"],
        NCDefaultLibraryClassType: ["phpIntVar", "cssColor", "awkVariables"],
        NCDefaultLibraryFunctionCall: ["phpFunctions", "cssFunctionName", "pythonBuiltin", "goBuiltins", "shCmdSubRegion"],
        NCFunctionDeclaration: [
            "rubyMethodName",
            "rustFuncName",
            "elixirFunctionDeclaration",
            "shFunction",
            "perlSubName",
            "perlFunctionName",
        ],
        NCAttributeName: ["xmlAttrib", "cssTagName", "htmlArg"],
        NCProperty: [
            "cssProp",
            "tomlKey",
            "shSetList",
            "shVariable",
            "yamlBlockMappingKey",
        ],
        NCComparisonLogicalOperator: ["cssAtRuleLogical", "shOption", "awkBoolLogic"],
        NCDocumentationComment: ["javaCommentTitle"],
        NCTagPunctuation: ["htmlTag", "xmlTag"],
        NCUnrecognizedTag: ["htmlTagN"],
        NCHeading: ["htmlTitle", "tomlTable"],
        NCMetaTag: ["htmlSpecialTagName"],
        NCForeground: ["shArithmetic", "shCommandSub"],
        NCPunctuation: ["yamlBlockCollectionItemStart"],
        NCVariable: ["perlVarPlain"],
    };
    const head = `highlight clear
if exists("syntax_on")
  syntax reset
endif

if has("termguicolors")
  set termguicolors
endif

set background=dark
let colors_name="nightcoder"

highlight Normal guifg=${palette.foregroundColor.code} guibg=#030917

`;
    return (head +
        vRules
            .map((r) => {
            return r.groups
                .map((g) => `highlight ${g} ${r.style ? "cterm=" + r.style + " gui=" + r.style : ""} guifg=${r.fg}`)
                .join("\n");
        })
            .join("\n") +
        "\n\n" +
        Object.keys(links)
            .map((k) => { var _a; return (_a = links[k]) === null || _a === void 0 ? void 0 : _a.map((v) => `hi! link ${v} ${k}`).join("\n"); })
            .join("\n"));
}
export function vimColorScheme() {
    const palette = new (colorPaletteFactory())("Night Coder", "");
    themeWriter("vim/colors/nightcoder.vim", vimColoring(palette), "Vim color scheme generated.");
}

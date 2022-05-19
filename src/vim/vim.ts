import { Palette } from "../common/colors.js";
import { mainPalette } from "../common/main-palette.js";
import { warmPalette } from "../common/warm-palette.js";
import { themeWriter } from "../common/theme-writer.js";

export interface vimRule {
  groups: string[];
  fg: string;
  style?: string;
}

interface vimLinks {
  [prop: string]: string[];
}

export function vimColoring(palette: Palette): string {
  const vRules: vimRule[] = [
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

    // html / markup
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

    // json
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

  const links: vimLinks = {
    // Statement: ["phpStructure", "phpStorageClass"],
    NCAttributeName: ["xmlAttrib", "cssTagName", "htmlArg"],
    NCComment: ["Comment"],
    NCComparisonLogicalOperator: ["cssAtRuleLogical", "shOption", "awkBoolLogic"],
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
    NCDefaultLibraryClassType: ["phpIntVar", "cssColor", "awkVariables"],
    NCDefaultLibraryFunctionCall: ["phpFunctions", "cssFunctionName", "pythonBuiltin", "goBuiltins", "shCmdSubRegion"],
    NCDocumentationComment: ["javaCommentTitle"],
    NCForeground: ["shArithmetic", "shCommandSub"],
    NCFunctionCall: ["Function", "rustMacro", "perlMethod"],
    NCFunctionDeclaration: [
      "rubyMethodName",
      "rustFuncName",
      "elixirFunctionDeclaration",
      "shFunction",
      "perlSubName",
      "perlFunctionName",
    ],
    NCHeading: ["htmlTitle", "tomlTable"],
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
    NCLiteralConstant: ["Number", "Boolean", "Float", "cssAttr", "elixirAtom", "poHeaderItem"],
    NCMetaTag: ["htmlSpecialTagName"],
    NCMiscellaneous: ["Special", "rustAttribute", "javaAnnotation", "yamlDocumentStart", "poCommentSources"],
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
    NCProperty: [
      "cssProp",
      "tomlKey",
      "shSetList", // not consistent with other languages
      "shVariable", // not consistent with other languages
      "yamlBlockMappingKey",
    ],
    NCPunctuation: ["yamlBlockCollectionItemStart"],
    NCString: ["String", "Character", "yamlPlainScalar"],
    NCTag: ["Tag", "csXmlTag", "xmlTag", "htmlTagName", "xmlTagName"],
    NCTagPunctuation: ["htmlTag", "xmlTag"],
    NCType: ["Type"],
    NCUnrecognizedTag: ["htmlTagN"],
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

highlight clear CursorLine
set cursorline
highlight LineNr guifg=${palette.background55.code}
highlight CursorLineNr cterm=NONE gui=NONE guifg=${palette.backgroundaa.code}

highlight Normal guifg=${palette.foregroundColor.code} guibg=${palette.background.code}

`;
  return (
    head +
    vRules
      .map((r) => {
        return r.groups
          .map((g) => `highlight ${g} ${r.style ? "cterm=" + r.style + " gui=" + r.style : ""} guifg=${r.fg}`)
          .join("\n");
      })
      .join("\n") +
    "\n\n" +
    Object.keys(links)
      .map((k) => links[k]?.map((v) => `hi! link ${v} ${k}`).join("\n"))
      .join("\n")
  );
}

export function vimColorScheme(): void {
  // const palette = new (colorPaletteFactory())("Night Coder", "");
  themeWriter("vim/colors/nightcoder.vim", vimColoring(mainPalette), "Vim color scheme generated.");
  themeWriter(
    "vim/colors/nightcoder-warm.vim",
    vimColoring(warmPalette),
    "Warm variant of Vim color scheme generated."
  );
}

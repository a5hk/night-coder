highlight clear
if exists("syntax_on")
  syntax reset
endif

if has("termguicolors")
  set termguicolors
endif

set background=dark
let colors_name="nightcoder"

highlight Normal guifg=#c6c7ca guibg=#030917

highlight NCDefaultLibraryFunctionCall  guifg=#7dbbe8
highlight NCFunctionCall  guifg=#e0cd94
highlight NCVariable  guifg=#c6c7ca
highlight NCConstant  guifg=#ef7762
highlight NCMiscellaneous  guifg=#c3ab85
highlight NCType  guifg=#0bc2cb
highlight NCParameter  guifg=#e5e6e7
highlight NCOperator  guifg=#f2f28c
highlight NCComparisonLogicalOperator  guifg=#93ecb8
highlight NCComment cterm=italic gui=italic guifg=#464b55
highlight NCDocumentationComment  guifg=#abadb2
highlight NCFunctionDeclaration  guifg=#85c3ab
highlight NCLiteralConstant  guifg=#bfa6f2
highlight NCDefaultLibraryClassType  guifg=#ff99b3
highlight NCNamespaceClassStruct  guifg=#859dc3
highlight NCString  guifg=#84bd7f
highlight NCProperty  guifg=#e4aa81
highlight NCKeyword  guifg=#c385bc
highlight NCTag  guifg=#e4aa81
highlight NCItalic  guifg=#93ecb8
highlight NCHeading  guifg=#e0cd94
highlight NCLinkTag  guifg=#85c3ab
highlight NCMetaTag  guifg=#c385bc
highlight NCStyleTag  guifg=#859dc3
highlight NCObjectTag  guifg=#ff99b3
highlight NCInlineTag  guifg=#7dbbe8
highlight NCCustomTag  guifg=#bfa6f2
highlight NCScriptTag  guifg=#d9d326
highlight NCAttributeName  guifg=#e0cd94
highlight NCTagPunctuation  guifg=#797c83
highlight NCUnrecognizedTag  guifg=#ef7762
highlight NCJsonLevel01  guifg=#e4aa81
highlight NCJsonLevel02  guifg=#c385bc
highlight NCJsonLevel03  guifg=#0bc2cb
highlight NCJsonLevel04  guifg=#e0cd94
highlight NCJsonLevel05  guifg=#ff99b3
highlight NCJsonLevel06  guifg=#7dbbe8
highlight NCJsonLevel07  guifg=#859dc3
highlight NCJsonLevel08  guifg=#ef7762
highlight NCJsonLevel09  guifg=#c3ab85
highlight NCJsonLevel10  guifg=#d9d326
highlight NCJsonLevel11  guifg=#e4aa81

hi! link Comment NCComment
hi! link String NCString
hi! link Character NCString
hi! link Number NCLiteralConstant
hi! link Boolean NCLiteralConstant
hi! link Float NCLiteralConstant
hi! link cssAttr NCLiteralConstant
hi! link elixirAtom NCLiteralConstant
hi! link Constant NCConstant
hi! link rubyInstanceVariable NCConstant
hi! link rubyClassVariable NCConstant
hi! link csInterpolationDelimiter NCConstant
hi! link elixirVariable NCConstant
hi! link elixirInterpolationDelimiter NCConstant
hi! link shDeref NCConstant
hi! link Function NCFunctionCall
hi! link rustMacro NCFunctionCall
hi! link Identifier NCNamespaceClassStruct
hi! link phpClasses NCNamespaceClassStruct
hi! link rubyModuleName NCNamespaceClassStruct
hi! link rubyClassName NCNamespaceClassStruct
hi! link rustModPath NCNamespaceClassStruct
hi! link csClassType NCNamespaceClassStruct
hi! link elixirModuleDeclaration NCNamespaceClassStruct
hi! link elixirAlias NCNamespaceClassStruct
hi! link Operator NCOperator
hi! link cssSelectorOp NCOperator
hi! link shVarAssign NCOperator
hi! link shArithRegion NCOperator
hi! link Statement NCKeyword
hi! link PreProc NCKeyword
hi! link phpStructure NCKeyword
hi! link phpStorageClass NCKeyword
hi! link javaScriptFunction NCKeyword
hi! link rustStorage NCKeyword
hi! link csStorage NCKeyword
hi! link csModifier NCKeyword
hi! link csClass NCKeyword
hi! link javaScopeDecl NCKeyword
hi! link javaClassDecl NCKeyword
hi! link javaStorageClass NCKeyword
hi! link Type NCType
hi! link Tag NCTag
hi! link csXmlTag NCTag
hi! link xmlTag NCTag
hi! link htmlTagName NCTag
hi! link Special NCMiscellaneous
hi! link rustAttribute NCMiscellaneous
hi! link javaAnnotation NCMiscellaneous
hi! link phpIntVar NCDefaultLibraryClassType
hi! link cssColor NCDefaultLibraryClassType
hi! link phpFunctions NCDefaultLibraryFunctionCall
hi! link cssFunctionName NCDefaultLibraryFunctionCall
hi! link pythonBuiltin NCDefaultLibraryFunctionCall
hi! link goBuiltins NCDefaultLibraryFunctionCall
hi! link shCmdSubRegion NCDefaultLibraryFunctionCall
hi! link rubyMethodName NCFunctionDeclaration
hi! link rustFuncName NCFunctionDeclaration
hi! link elixirFunctionDeclaration NCFunctionDeclaration
hi! link shFunction NCFunctionDeclaration
hi! link xmlAttrib NCAttributeName
hi! link cssTagName NCAttributeName
hi! link htmlArg NCAttributeName
hi! link cssProp NCProperty
hi! link tomlKey NCProperty
hi! link shSetList NCProperty
hi! link shVariable NCProperty
hi! link cssAtRuleLogical NCComparisonLogicalOperator
hi! link shOption NCComparisonLogicalOperator
hi! link javaCommentTitle NCDocumentationComment
hi! link htmlTag NCTagPunctuation
hi! link htmlTagN NCUnrecognizedTag
hi! link htmlTitle NCHeading
hi! link tomlTable NCHeading
hi! link htmlSpecialTagName NCMetaTag
hi! link shArithmetic NCForeground
hi! link shCommandSub NCForeground
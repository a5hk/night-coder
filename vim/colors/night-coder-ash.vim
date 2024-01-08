highlight clear
if exists("syntax_on")
  syntax reset
endif

if has("termguicolors")
  set termguicolors
endif

set background=dark
let colors_name="Night Coder Ash"

highlight clear CursorLine
set cursorline
highlight LineNr guifg=#727272
highlight CursorLineNr cterm=NONE gui=NONE guifg=#b9b9b9

highlight Normal guifg=#cbcbcb guibg=#2c2c2c

highlight NCDefaultLibraryFunctionCall  guifg=#80caff
highlight NCFunctionCall  guifg=#e6d299
highlight NCVariable  guifg=#cbcbcb
highlight NCConstant  guifg=#ff9e9e
highlight NCMiscellaneous  guifg=#d1b485
highlight NCType  guifg=#04ccd7
highlight NCParameter  guifg=#e9e9e9
highlight NCOperator  guifg=#e0e0b8
highlight NCComparisonLogicalOperator  guifg=#b8e0c8
highlight NCComment cterm=italic gui=italic guifg=#646464
highlight NCDocumentationComment  guifg=#b9b9b9
highlight NCFunctionDeclaration  guifg=#42d79e
highlight NCLiteralConstant  guifg=#c5abf7
highlight NCDefaultLibraryClassType  guifg=#fc9cc4
highlight NCNamespaceClassStruct  guifg=#9db9e7
highlight NCString  guifg=#8fc78a
highlight NCProperty  guifg=#f0a875
highlight NCKeyword  guifg=#eea0e5
highlight NCPunctuation  guifg=#8e8e8e
highlight NCTag  guifg=#f0a875
highlight NCItalic  guifg=#b8e0c8
highlight NCHeading cterm=bold gui=bold guifg=#e6d299
highlight NCLinkTag  guifg=#42d79e
highlight NCMetaTag  guifg=#eea0e5
highlight NCStyleTag  guifg=#9db9e7
highlight NCObjectTag  guifg=#fc9cc4
highlight NCInlineTag  guifg=#80caff
highlight NCCustomTag  guifg=#c5abf7
highlight NCScriptTag  guifg=#e0dc52
highlight NCAttributeName  guifg=#e6d299
highlight NCTagPunctuation  guifg=#8e8e8e
highlight NCUnrecognizedTag  guifg=#ff9e9e
highlight NCJsonLevel01  guifg=#f0a875
highlight NCJsonLevel02  guifg=#eea0e5
highlight NCJsonLevel03  guifg=#04ccd7
highlight NCJsonLevel04  guifg=#e6d299
highlight NCJsonLevel05  guifg=#fc9cc4
highlight NCJsonLevel06  guifg=#80caff
highlight NCJsonLevel07  guifg=#9db9e7
highlight NCJsonLevel08  guifg=#ff9e9e
highlight NCJsonLevel09  guifg=#d1b485
highlight NCJsonLevel10  guifg=#e0dc52
highlight NCJsonLevel11  guifg=#f0a875

hi! link xmlAttrib NCAttributeName
hi! link cssTagName NCAttributeName
hi! link htmlArg NCAttributeName
hi! link Comment NCComment
hi! link cssAtRuleLogical NCComparisonLogicalOperator
hi! link shOption NCComparisonLogicalOperator
hi! link awkBoolLogic NCComparisonLogicalOperator
hi! link Constant NCConstant
hi! link rubyInstanceVariable NCConstant
hi! link rubyClassVariable NCConstant
hi! link csInterpolationDelimiter NCConstant
hi! link elixirVariable NCConstant
hi! link elixirInterpolationDelimiter NCConstant
hi! link shDeref NCConstant
hi! link yamlNodeTag NCConstant
hi! link yamlAlias NCConstant
hi! link phpIntVar NCDefaultLibraryClassType
hi! link cssColor NCDefaultLibraryClassType
hi! link awkVariables NCDefaultLibraryClassType
hi! link phpFunctions NCDefaultLibraryFunctionCall
hi! link cssFunctionName NCDefaultLibraryFunctionCall
hi! link pythonBuiltin NCDefaultLibraryFunctionCall
hi! link goBuiltins NCDefaultLibraryFunctionCall
hi! link shCmdSubRegion NCDefaultLibraryFunctionCall
hi! link javaCommentTitle NCDocumentationComment
hi! link shArithmetic NCForeground
hi! link shCommandSub NCForeground
hi! link Function NCFunctionCall
hi! link rustMacro NCFunctionCall
hi! link perlMethod NCFunctionCall
hi! link rubyMethodName NCFunctionDeclaration
hi! link rustFuncName NCFunctionDeclaration
hi! link elixirFunctionDeclaration NCFunctionDeclaration
hi! link shFunction NCFunctionDeclaration
hi! link perlSubName NCFunctionDeclaration
hi! link perlFunctionName NCFunctionDeclaration
hi! link htmlTitle NCHeading
hi! link tomlTable NCHeading
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
hi! link Number NCLiteralConstant
hi! link Boolean NCLiteralConstant
hi! link Float NCLiteralConstant
hi! link cssAttr NCLiteralConstant
hi! link elixirAtom NCLiteralConstant
hi! link poHeaderItem NCLiteralConstant
hi! link htmlSpecialTagName NCMetaTag
hi! link Special NCMiscellaneous
hi! link rustAttribute NCMiscellaneous
hi! link javaAnnotation NCMiscellaneous
hi! link yamlDocumentStart NCMiscellaneous
hi! link poCommentSources NCMiscellaneous
hi! link Identifier NCNamespaceClassStruct
hi! link phpClasses NCNamespaceClassStruct
hi! link rubyModuleName NCNamespaceClassStruct
hi! link rubyClassName NCNamespaceClassStruct
hi! link rustModPath NCNamespaceClassStruct
hi! link csClassType NCNamespaceClassStruct
hi! link elixirModuleDeclaration NCNamespaceClassStruct
hi! link elixirAlias NCNamespaceClassStruct
hi! link perlPackageDecl NCNamespaceClassStruct
hi! link perlPackageRef NCNamespaceClassStruct
hi! link Operator NCOperator
hi! link cssSelectorOp NCOperator
hi! link shVarAssign NCOperator
hi! link shArithRegion NCOperator
hi! link awkOperator NCOperator
hi! link awkExpression NCOperator
hi! link cssProp NCProperty
hi! link tomlKey NCProperty
hi! link shSetList NCProperty
hi! link shVariable NCProperty
hi! link yamlBlockMappingKey NCProperty
hi! link yamlBlockCollectionItemStart NCPunctuation
hi! link String NCString
hi! link Character NCString
hi! link yamlPlainScalar NCString
hi! link Tag NCTag
hi! link csXmlTag NCTag
hi! link xmlTag NCTag
hi! link htmlTagName NCTag
hi! link xmlTagName NCTag
hi! link htmlTag NCTagPunctuation
hi! link xmlTag NCTagPunctuation
hi! link Type NCType
hi! link htmlTagN NCUnrecognizedTag
hi! link perlVarPlain NCVariable
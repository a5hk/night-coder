highlight clear
if exists("syntax_on")
  syntax reset
endif

if has("termguicolors")
  set termguicolors
endif

set background=dark
let colors_name="Night Coder Flame"

highlight clear CursorLine
set cursorline
highlight LineNr guifg=#5f6264
highlight CursorLineNr cterm=NONE gui=NONE guifg=#afb0b2

highlight Normal guifg=#c4c5c6 guibg=#0f1317

highlight NCDefaultLibraryFunctionCall  guifg=#e9de63
highlight NCFunctionCall  guifg=#e9de63
highlight NCVariable  guifg=#c4c5c6
highlight NCConstant  guifg=#57c79c
highlight NCMiscellaneous  guifg=#c3ab85
highlight NCType  guifg=#ff8595
highlight NCParameter  guifg=#e7e7e7
highlight NCOperator  guifg=#f2f28c
highlight NCComparisonLogicalOperator  guifg=#93ecb8
highlight NCComment cterm=italic gui=italic guifg=#4f5255
highlight NCDocumentationComment  guifg=#afb0b2
highlight NCFunctionDeclaration  guifg=#ff7566
highlight NCLiteralConstant  guifg=#b999fa
highlight NCDefaultLibraryClassType  guifg=#dfca9f
highlight NCNamespaceClassStruct  guifg=#dfca9f
highlight NCString  guifg=#99c270
highlight NCProperty  guifg=#f4b271
highlight NCKeyword  guifg=#ff8833
highlight NCPunctuation  guifg=#7f8183
highlight NCTag  guifg=#f4b271
highlight NCItalic  guifg=#93ecb8
highlight NCHeading cterm=bold gui=bold guifg=#e9de63
highlight NCLinkTag  guifg=#57c79c
highlight NCMetaTag  guifg=#ff8833
highlight NCStyleTag  guifg=#829dc9
highlight NCObjectTag  guifg=#ff8833
highlight NCInlineTag  guifg=#57c79c
highlight NCCustomTag  guifg=#b999fa
highlight NCScriptTag  guifg=#d9d326
highlight NCAttributeName  guifg=#e9de63
highlight NCTagPunctuation  guifg=#7f8183
highlight NCUnrecognizedTag  guifg=#f4b271
highlight NCJsonLevel01  guifg=#f4b271
highlight NCJsonLevel02  guifg=#57c79c
highlight NCJsonLevel03  guifg=#e9de63
highlight NCJsonLevel04  guifg=#ff7566
highlight NCJsonLevel05  guifg=#dfca9f
highlight NCJsonLevel06  guifg=#ff8595
highlight NCJsonLevel07  guifg=#c3ab85
highlight NCJsonLevel08  guifg=#57c79c
highlight NCJsonLevel09  guifg=#e9de63
highlight NCJsonLevel10  guifg=#ff7566
highlight NCJsonLevel11  guifg=#f4b271

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
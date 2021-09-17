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

highlight Comment cterm=italic gui=italic guifg=#464b55
highlight String  guifg=#84bd7f
highlight Character  guifg=#84bd7f
highlight Number  guifg=#bfa6f2
highlight Boolean  guifg=#bfa6f2
highlight Float  guifg=#bfa6f2
highlight Constant  guifg=#ef7762
highlight Function  guifg=#e0cd94
highlight Identifier  guifg=#859dc3
highlight Operator  guifg=#93ecb8
highlight Statement  guifg=#c385bc
highlight PreProc  guifg=#c385bc
highlight Type  guifg=#0bc2cb
highlight Tag  guifg=#e4aa81
highlight Special  guifg=#c3ab85

hi! link phpStructure Statement
hi! link phpStorageClass Statement
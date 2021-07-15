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
highlight String  guifg=#adc2a3
highlight Character  guifg=#adc2a3
highlight Number  guifg=#c5b8e0
highlight Boolean  guifg=#c5b8e0
highlight Float  guifg=#c5b8e0
highlight Constant  guifg=#dd8888
highlight Function  guifg=#e3d7b5
highlight Identifier  guifg=#bdc8db
highlight Operator  guifg=#b8e0c8
highlight Statement  guifg=#d9a6d3
highlight PreProc  guifg=#d9a6d3
highlight Type  guifg=#a3d9dc
highlight Tag  guifg=#dcbaa3
highlight Special  guifg=#d9c9af
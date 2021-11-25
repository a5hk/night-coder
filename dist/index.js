import { vscodeThemesWriter } from "./vscode/vscode.js";
import { vimColorScheme } from "./vim/vim.js";
import { batColorScheme } from "./bat/bat.js";
import { windowsTerminalColorScheme } from "./windows-terminal/windows-terminal.js";
vscodeThemesWriter();
vimColorScheme();
batColorScheme();
windowsTerminalColorScheme();

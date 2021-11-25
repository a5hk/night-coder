import fs from "fs";
import { colorPaletteFactory } from "./common/colors.js";
import { vscodeThemesWriter } from "./vscode/vscode.js";
import { vimColoring } from "./vim/vim.js";
import { tmTheme } from "./bat/bat.js";
import { windowsTerminalColors } from "./windows-terminal/windows-terminal.js";
function vimColorScheme() {
    const palette = new (colorPaletteFactory())("Night Coder");
    fs.writeFile("./vim/colors/nightcoder.vim", vimColoring(palette), (err) => {
        if (err) {
            throw err;
        }
        console.log(`Vim color scheme generated.`);
    });
}
function batColorScheme() {
    fs.writeFile("./bat/nightcoder.tmTheme", tmTheme(), (err) => {
        if (err) {
            throw err;
        }
        console.log("Bat color scheme generated.");
    });
}
function windowsTerminalColorScheme() {
    const palette = new (colorPaletteFactory())("Night Coder");
    fs.writeFile("./windows-terminal/night-coder.json", windowsTerminalColors(palette), (err) => {
        if (err) {
            throw err;
        }
        console.log(`Windows Terminal color scheme generated.`);
    });
}
vscodeThemesWriter();
vimColorScheme();
batColorScheme();
windowsTerminalColorScheme();

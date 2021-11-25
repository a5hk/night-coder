import fs from "fs";
import path from "path";
export function themeWriter(outFile, theme, message) {
    const baseOutputDir = "./color-themes";
    const output = path.resolve(baseOutputDir, outFile);
    console.log(output);
    fs.writeFile(output, theme, (err) => {
        if (err) {
            throw err;
        }
        console.log(message);
    });
}

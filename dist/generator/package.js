export class VSTheme {
    constructor(label, uiTheme) {
        this.label = label;
        this.uiTheme = uiTheme;
    }
    get path() {
        return "./themes/" + this.label.trim().toLowerCase().replace(/ +/g, "-") + "-color-theme.json";
    }
    toManifestFormat() {
        return {
            label: this.label,
            uiTheme: this.uiTheme,
            path: this.path,
        };
    }
}

interface VSThemeManifest {
  label: string;
  path: string;
  uiTheme: string;
}

export class VSTheme {
  label: string;
  uiTheme: "vs" | "vs-dark" | "hc-back";

  constructor(label: string, uiTheme: "vs" | "vs-dark" | "hc-back") {
    this.label = label;
    this.uiTheme = uiTheme;
  }

  get path(): string {
    return "./themes/" + this.label.trim().toLowerCase().replace(/ +/g, "-") + "-color-theme.json";
  }

  toManifestFormat(): VSThemeManifest {
    return {
      label: this.label,
      path: this.path,
      uiTheme: this.uiTheme,
    };
  }
}

export interface VSPackage {
  name: string;
  displayName: string;
  description: string;
  version: string;
  publisher: string;
  author: string;
  license: string;
  icon?: string;
  keywords: string[];
  galleryBanner: {
    color: string;
    theme: "light" | "dark";
  };
  engines: {
    vscode: string;
  };
  homepage: string;
  repository: {
    type: string;
    url: string;
  };
  categories: ["Themes"];
  contributes: {
    themes: VSThemeManifest[];
  };
}

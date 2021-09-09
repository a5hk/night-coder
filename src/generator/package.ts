interface VSTheme {
  label: string;
  uiTheme: "vs" | "vs-dark" | "hc-back";
  path: string;
}

interface Package {
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
    vscode: "^1.60.0";
  };
  homepage: "https://github.com/a5hk/night-coder";
  repository: {
    type: "git";
    url: "https://github.com/a5hk/night-coder";
  };
  categories: ["Themes"];
  contributes: {
    themes: [
      {
        label: "Night Coder";
        uiTheme: "vs-dark";
        path: "./themes/night-coder-color-theme.json";
      },
      {
        label: "Night Coder Contrast";
        uiTheme: "vs-dark";
        path: "./themes/night-coder-contrast-color-theme.json";
      },
      {
        label: "Night Coder Italic";
        uiTheme: "vs-dark";
        path: "./themes/night-coder-italic-color-theme.json";
      },
      {
        label: "Night Coder Contrast Italic";
        uiTheme: "vs-dark";
        path: "./themes/night-coder-contrast-italic-color-theme.json";
      }
    ];
  };
}

const package = {
  name: "night-coder",
  displayName: "Night Coder",
  description: "A dark theme for Night Coders",
  version: "2.19.0",
  publisher: "a5hk",
  author: "a5hk",
  license: "MIT",
  icon: "icon.png",
  keywords: ["NightCoder", "Night Coder", "Dark", "Borderless", "Italic", "Contrast"],
  galleryBanner: {
    color: "#030917",
    theme: "dark",
  },
  engines: {
    vscode: "^1.60.0",
  },
  homepage: "https://github.com/a5hk/night-coder",
  repository: {
    type: "git",
    url: "https://github.com/a5hk/night-coder",
  },
  categories: ["Themes"],
  contributes: {
    themes: [
      {
        label: "Night Coder",
        uiTheme: "vs-dark",
        path: "./themes/night-coder-color-theme.json",
      },
      {
        label: "Night Coder Contrast",
        uiTheme: "vs-dark",
        path: "./themes/night-coder-contrast-color-theme.json",
      },
      {
        label: "Night Coder Italic",
        uiTheme: "vs-dark",
        path: "./themes/night-coder-italic-color-theme.json",
      },
      {
        label: "Night Coder Contrast Italic",
        uiTheme: "vs-dark",
        path: "./themes/night-coder-contrast-italic-color-theme.json",
      },
    ],
  },
};

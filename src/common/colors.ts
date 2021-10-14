import chroma from "chroma-js";

export class Color {
  #code: string;
  description = "";

  constructor(code: string, description = "") {
    this.#code = code;
    this.description = description;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  get code() {
    return this.#code;
  }

  set code(hex: string) {
    if (/^#[0-9a-f]{6}$/i.test(hex)) {
      this.#code = hex;
    }
  }
}

function hexAlphaToDec(alpha: string): number {
  return parseInt(alpha, 16) / 255;
}

function mix(alpha: string, background: string): string {
  return chroma.mix(background, "#ffffff", hexAlphaToDec(alpha), "rgb").toString();
}

function colorDescriptor(c: Color, enumerable = false) {
  return () => {
    let color = c;
    return {
      enumerable: enumerable,
      get() {
        return color;
      },
      set(c: Color) {
        color = c;
      },
    };
  };
}

function BasePalette<T extends Record<string, unknown>>(
  descriptors: {
    [K in keyof T]: () => TypedPropertyDescriptor<T[K]>;
  }
): new () => T {
  return class {
    constructor() {
      let k: keyof T;

      for (k in descriptors) {
        Object.defineProperty(this, k, descriptors[k]());
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function colorPaletteFactory(bg = "#030917") {
  return class ColorPalette extends BasePalette({
    // token colors
    defaultLibraryFunctionColor: /* ...... */ colorDescriptor(new Color("#7dbbe8", "Default library function"), true),
    functionCallColor: /* ................ */ colorDescriptor(new Color("#e0cd94", "Function call"), true),
    foregroundColor: /* .................. */ colorDescriptor(new Color(mix("c5", bg), "Foreground"), true),
    variableColor: /* .................... */ colorDescriptor(new Color(mix("c5", bg), "Variable"), true),
    constantColor: /* .................... */ colorDescriptor(new Color("#ef7762", "Constant"), true),
    miscellaneousColor: /* ............... */ colorDescriptor(new Color("#c3ab85", "Miscellaneous"), true),
    typeColor: /* ........................ */ colorDescriptor(new Color("#0bc2cb", "Type"), true),
    parameterArgumentColor: /* ........... */ colorDescriptor(new Color(mix("e5", bg), "Parameter, Argument"), true),
    operatorColor: /* .................... */ colorDescriptor(new Color("#f2f28c", "Operator"), true),
    comparisonLogicalOperatorColor: /* ... */ colorDescriptor(
      new Color("#93ecb8", "Comparison/Logical operator"),
      true
    ),
    commentColor: /* ..................... */ colorDescriptor(new Color(mix("44", bg), "Comment"), true),
    documentationColor: /* ............... */ colorDescriptor(new Color(mix("aa", bg), "Documentation"), true),
    annotationColor: /* .................. */ colorDescriptor(new Color("#c3ab85", "Annotation"), true),
    functionDeclarationColor: /* ......... */ colorDescriptor(new Color("#85c3ab", "Function declaration"), true),
    literalConstantColor: /* ............. */ colorDescriptor(new Color("#bfa6f2", "Literal constant"), true),
    defaultLibraryClassTypeColor: /* ..... */ colorDescriptor(new Color("#ff99b3", "Default library class/type"), true),
    namespaceClassStructColor: /* ........ */ colorDescriptor(new Color("#859dc3", "Namespace/Class/Struct"), true),
    stringColor: /* ...................... */ colorDescriptor(new Color("#84bd7f", "String"), true),
    importColor: /* ...................... */ colorDescriptor(new Color("#84bd7f", "Import/Require/Use"), true),
    propertyColor: /* .................... */ colorDescriptor(new Color("#e4aa81", "Property"), true),
    keywordColor: /* ..................... */ colorDescriptor(new Color("#c385bc", "Keyword"), true),

    // html / markup
    tagColor: /* ............... */ colorDescriptor(new Color("#e4aa81", "Tag"), true),
    italicColor: /* ............ */ colorDescriptor(new Color("#93ecb8", "Italic"), true),
    headingColor: /* ........... */ colorDescriptor(new Color("#e0cd94", "Heading"), true),
    linkTagColor: /* ........... */ colorDescriptor(new Color("#85c3ab", "HTML link tag"), true),
    metaTagColor: /* ........... */ colorDescriptor(new Color("#c385bc", "HTML meta tag"), true),
    styleTagColor: /* .......... */ colorDescriptor(new Color("#859dc3", "HTML style tag"), true),
    objectTagColor: /* ......... */ colorDescriptor(new Color("#ff99b3", "HTML object tag"), true),
    inlineTagColor: /* ......... */ colorDescriptor(new Color("#7dbbe8", "HTML inline tag"), true),
    customTagColor: /* ......... */ colorDescriptor(new Color("#bfa6f2", "HTML custom tag"), true),
    scriptTagColor: /* ......... */ colorDescriptor(new Color("#d9d326", "Script tag"), true),
    attributeNameColor: /* ..... */ colorDescriptor(new Color("#e0cd94", "Attribute name"), true),
    tagPunctuationColor: /* .... */ colorDescriptor(new Color(mix("77", bg), "Tag punctuation"), true),
    unrecognizedTagColor: /* ... */ colorDescriptor(new Color("#ef7762", "HTML unrecognized tag"), true),

    // json
    jsonLevel01Color: colorDescriptor(new Color("#e4aa81", "Level 1 JSON key"), true),
    jsonLevel02Color: colorDescriptor(new Color("#c385bc", "Level 2 JSON key"), true),
    jsonLevel03Color: colorDescriptor(new Color("#0bc2cb", "Level 3 JSON key"), true),
    jsonLevel04Color: colorDescriptor(new Color("#e0cd94", "Level 4 JSON key"), true),
    jsonLevel05Color: colorDescriptor(new Color("#ff99b3", "Level 5 JSON key"), true),
    jsonLevel06Color: colorDescriptor(new Color("#7dbbe8", "Level 6 JSON key"), true),
    jsonLevel07Color: colorDescriptor(new Color("#859dc3", "Level 7 JSON key"), true),
    jsonLevel08Color: colorDescriptor(new Color("#ef7762", "Level 8 JSON key"), true),
    jsonLevel09Color: colorDescriptor(new Color("#c3ab85", "Level 9 JSON key"), true),
    jsonLevel10Color: colorDescriptor(new Color("#d9d326", "Level 10 JSON key"), true),
    jsonLevel11Color: colorDescriptor(new Color("#e4aa81", "Level > 10 JSON key"), true),

    // workbench colors
    background: colorDescriptor(new Color(mix("0", bg))),
    background11: colorDescriptor(new Color(mix("11", bg))),
    background22: colorDescriptor(new Color(mix("22", bg))),
    background25: colorDescriptor(new Color(mix("25", bg))),
    background33: colorDescriptor(new Color(mix("33", bg))),
    background44: colorDescriptor(new Color(mix("44", bg))),
    background55: colorDescriptor(new Color(mix("55", bg))),
    background66: colorDescriptor(new Color(mix("66", bg))),
    background77: colorDescriptor(new Color(mix("77", bg))),
    background88: colorDescriptor(new Color(mix("88", bg))),
    background99: colorDescriptor(new Color(mix("99", bg))),
    backgroundaa: colorDescriptor(new Color(mix("aa", bg))),
    backgroundbb: colorDescriptor(new Color(mix("bb", bg))),
    backgroundc5: colorDescriptor(new Color(mix("c5", bg))),
    backgroundcc: colorDescriptor(new Color(mix("cc", bg))),
    backgrounddd: colorDescriptor(new Color(mix("dd", bg))),
    backgrounde5: colorDescriptor(new Color(mix("e5", bg))),
    backgroundee: colorDescriptor(new Color(mix("ee", bg))),

    contrastBackground: colorDescriptor(new Color("#02050e")),

    textLinkForeground: /* ................. */ colorDescriptor(new Color("#89b971")),
    statusBarBackground: /* ................ */ colorDescriptor(new Color("#006600")),
    statusBarForeground: /* ................ */ colorDescriptor(new Color("#f5fff5")),
    editorInfoForeground: /* ............... */ colorDescriptor(new Color("#02cad4")),
    editorErrorForeground: /* .............. */ colorDescriptor(new Color("#ff7575")),
    editorLightBulbForeground: /* .......... */ colorDescriptor(new Color("#ef7762")),
    editorLightBulbAutoFixForeground: /* ... */ colorDescriptor(new Color("#f2f28c")),
    progressBarBackground: /* .............. */ colorDescriptor(new Color("#d9d326")),
    inlineValuesForeground: /* ............. */ colorDescriptor(new Color(mix("cc", bg))),
    sideBySideEditorBorder: /* ............. */ colorDescriptor(new Color(mix("22", bg))),
    statusBarDebuggingBorder: /* ........... */ colorDescriptor(new Color("#770000")),
    inlineValuesBackground: /* ............. */ colorDescriptor(new Color("#c3ab8555")),
    statusBarRemoteBackground: /* .......... */ colorDescriptor(new Color("#660066")),
    statusBarRemoteForeground: /* .......... */ colorDescriptor(new Color("#fff5ff")),
    activeIndentGuideBackground: /* ........ */ colorDescriptor(new Color("#53ac53")),
    statusBarNoFolderBackground: /* ........ */ colorDescriptor(new Color("#553c9a")),
    statusBarNoFolderForeground: /* ........ */ colorDescriptor(new Color("#ede9f6")),
    statusBarDebuggingBackground: /* ....... */ colorDescriptor(new Color("#9b2c2c")),
    statusBarDebuggingForeground: /* ....... */ colorDescriptor(new Color("#fdf7f7")),

    // bracket pairs
    bracketPair1: colorDescriptor(new Color("#f2f28c")),
    bracketPair2: colorDescriptor(new Color("#c385bc")),
    bracketPair3: colorDescriptor(new Color("#93ecb8")),
    bracketPair4: colorDescriptor(new Color("#c3ab85")),
    bracketPair5: colorDescriptor(new Color("#7dbbe8")),
    bracketPair6: colorDescriptor(new Color("#ff99b3")),

    // terminal colors
    ansiBrightBlack: /* ..... */ colorDescriptor(new Color("#888b92")), // background88
    ansiBrightBlue: /* ...... */ colorDescriptor(new Color("#80bfff")),
    ansiBrightCyan: /* ...... */ colorDescriptor(new Color("#0fa5d7")),
    ansiBrightGreen: /* ..... */ colorDescriptor(new Color("#89b971")),
    ansiBrightMagenta: /* ... */ colorDescriptor(new Color("#f28ca6")),
    ansiBrightRed: /* ....... */ colorDescriptor(new Color("#ef7b6d")),
    ansiBrightWhite: /* ..... */ colorDescriptor(new Color("#c5c6c9")), // backgroundc5
    ansiBlack: /* ........... */ colorDescriptor(new Color("#353a45")), // background33
    ansiBlue: /* ............ */ colorDescriptor(new Color("#859dc3")),
    ansiBrightYellow: /* .... */ colorDescriptor(new Color("#f5d780")),
    ansiGreen: /* ........... */ colorDescriptor(new Color("#85c3ab")),
    ansiMagenta: /* ......... */ colorDescriptor(new Color("#c385bc")),
    ansiRed: /* ............. */ colorDescriptor(new Color("#ff7575")),
    ansiWhite: /* ........... */ colorDescriptor(new Color("#acaeb3")),
    ansiYellow: /* .......... */ colorDescriptor(new Color("#d9d326")),
  }) {
    name: string;

    constructor(name: string) {
      super();
      this.name = name;
      Object.defineProperty(this, "name", { enumerable: false });
    }

    toString(): string {
      return Object.entries(
        Object.values(this)
          .map((c) => [c.code, c.description])
          .reduce((acc, nv) => {
            acc[nv[0]] ? (acc[nv[0]] += `, ${nv[1]}`) : (acc[nv[0]] = nv[1]);
            return acc;
          }, [])
      )
        .map((c) =>
          [
            "",
            c[1],
            `![${c[0]}](https://via.placeholder.com/23/${c[0].replace("#", "")}/?text=+)`,
            c[0].toLocaleUpperCase(),
            "",
          ].join("|")
        )
        .join("\n");
    }

    toMarkdownTable(): string {
      return [
        `## ${this.name} Color Palette`,
        "",
        "| Scope | Color | Hex |",
        "|:------|:-----:|:----|",
        this.toString(),
      ].join("\n");
    }
  };
}

export type Palette = InstanceType<ReturnType<typeof colorPaletteFactory>>;

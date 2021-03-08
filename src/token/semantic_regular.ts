import { tokenColorCode as color } from "../common/colors.js";

export interface semanticRule {
  [propName: string]: { foreground?: string; fontStyle?: string; __italic?: boolean };
}

export const semanticRules: semanticRule = {
  variable: /* ..................... */ { foreground: color.FrenchGray },
  "variable.readonly": /* .......... */ { foreground: color.Bittersweet },
  "variable.defaultLibrary": /* .... */ { foreground: color.PinkSalmon },
  property: /* ..................... */ { foreground: color.DarkSalmon, __italic: true },
  parameter: /* .................... */ { foreground: color.Iron, __italic: true },
  function: /* ..................... */ { foreground: color.Flax, __italic: true },
  "function.declaration": /* ....... */ { foreground: color.MonteCarlo },
  "function.defaultLibrary": /* .... */ { foreground: color.Bermuda, __italic: true },
  method: /* ....................... */ { foreground: color.Flax, __italic: true },
  "method.declaration": /* ......... */ { foreground: color.MonteCarlo },
  "method.defaultLibrary": /* ...... */ { foreground: color.Bermuda, __italic: true },
  keyword: /* ...................... */ { foreground: color.Viola },
  namespace: /* .................... */ { foreground: color.PoloBlue, __italic: true },
  "namespace.defaultLibrary": /* ... */ { foreground: color.PinkSalmon, __italic: true },
  class: /* ........................ */ { foreground: color.PoloBlue, __italic: true },
  "class.defaultLibrary": /* ....... */ { foreground: color.PinkSalmon, __italic: true },
  struct: /* ....................... */ { foreground: color.PoloBlue, __italic: true },
  type: /* ......................... */ { foreground: color.DarkTurquoise },
  "type.defaultLibrary": /* ........ */ { foreground: color.PinkSalmon, __italic: true },
  operator: /* ..................... */ { foreground: color.Jonquil },
  string: /* ....................... */ { foreground: color.SwampGreen },
};

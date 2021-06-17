import { tokenColorCode as color } from "../common/colors.js";

export interface semanticRule {
  [propName: string]: { foreground?: string; fontStyle?: string; __italic?: boolean };
}

export const semanticRules: semanticRule = {
  variable: /* ..................... */ { foreground: color.FrenchGray.code },
  "variable.readonly": /* .......... */ { foreground: color.Geraldine.code },
  "variable.defaultLibrary": /* .... */ { foreground: color.PinkSalmon.code },
  property: /* ..................... */ { foreground: color.TonysPink.code, __italic: true },
  parameter: /* .................... */ { foreground: color.Iron.code, __italic: true },
  function: /* ..................... */ { foreground: color.Calico.code, __italic: true },
  "function.declaration": /* ....... */ { foreground: color.MonteCarlo.code },
  "function.defaultLibrary": /* .... */ { foreground: color.Bermuda.code, __italic: true },
  method: /* ....................... */ { foreground: color.Calico.code, __italic: true },
  "method.declaration": /* ......... */ { foreground: color.MonteCarlo.code },
  "method.defaultLibrary": /* ...... */ { foreground: color.Bermuda.code, __italic: true },
  keyword: /* ...................... */ { foreground: color.Viola.code },
  namespace: /* .................... */ { foreground: color.PoloBlue.code, __italic: true },
  "namespace.defaultLibrary": /* ... */ { foreground: color.PinkSalmon.code, __italic: true },
  class: /* ........................ */ { foreground: color.PoloBlue.code, __italic: true },
  "class.defaultLibrary": /* ....... */ { foreground: color.PinkSalmon.code, __italic: true },
  struct: /* ....................... */ { foreground: color.PoloBlue.code, __italic: true },
  type: /* ......................... */ { foreground: color.IrisBlue.code },
  "type.defaultLibrary": /* ........ */ { foreground: color.PinkSalmon.code, __italic: true },
  operator: /* ..................... */ { foreground: color.Jonquil.code },
  string: /* ....................... */ { foreground: color.SwampGreen.code },
};

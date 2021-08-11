import { workbenchColors as uiColor, terminalColors as termColor } from "../common/colors.js";

export interface workbenchColor {
  [propName: string]: string;
}

export const commonWorkbenchColors: workbenchColor = {
  "activityBar.activeBorder": /* .................. */ uiColor.statusBarBackground,
  "activityBar.foreground": /* .................... */ uiColor.backgroundaa,
  "activityBarBadge.background": /* ............... */ uiColor.statusBarBackground,
  "activityBarBadge.foreground": /* ............... */ uiColor.statusBarForeground,
  "badge.background": /* .......................... */ uiColor.statusBarBackground,
  "button.background": /* ......................... */ uiColor.background44,
  "button.foreground": /* ......................... */ uiColor.backgroundcc,
  "button.secondaryBackground": /* ................ */ uiColor.background33,
  "button.secondaryForeground": /* ................ */ uiColor.backgroundbb,
  "debugToolBar.background": /* ................... */ uiColor.background44,
  "diffEditor.insertedTextBackground": /* ......... */ `${uiColor.statusBarBackground}33`,
  "dropdown.background": /* ....................... */ uiColor.background11,
  "dropdown.border": /* ........................... */ uiColor.background,
  "editor.background": /* ......................... */ uiColor.background,
  "editor.findMatchBackground": /* ................ */ uiColor.background22,
  "editor.findMatchBorder": /* .................... */ uiColor.activeIndentGuideBackground,
  "editor.findMatchHighlightBackground": /* ....... */ `${uiColor.background33}77`,
  "editor.foldBackground": /* ..................... */ `${uiColor.statusBarBackground}1f`,
  "editor.foreground": /* ......................... */ uiColor.backgroundc5,
  "editor.inlineValuesBackground": /* ............. */ uiColor.inlineValuesBackground,
  "editor.inlineValuesForeground": /* ............. */ uiColor.inlineValuesForeground,
  "editor.lineHighlightBackground": /* ............ */ `${uiColor.background33}77`,
  "editor.selectionBackground": /* ................ */ `${uiColor.background33}99`,
  "editor.selectionHighlightBackground": /* ....... */ `${uiColor.background33}77`,
  "editor.selectionHighlightBorder": /* ........... */ uiColor.backgroundcc,
  "editor.wordHighlightBackground": /* ............ */ `${uiColor.background33}77`,
  "editor.wordHighlightBorder": /* ................ */ uiColor.backgroundcc,
  "editor.wordHighlightStrongBackground": /* ...... */ `${uiColor.backgroundbb}22`,
  "editor.wordHighlightStrongBorder": /* .......... */ uiColor.backgrounddd,
  "editorBracketMatch.background": /* ............. */ uiColor.background55,
  "editorBracketMatch.border": /* ................. */ uiColor.background55,
  "editorCursor.background": /* ................... */ uiColor.background11,
  "editorCursor.foreground": /* ................... */ uiColor.backgroundee,
  "editorError.background": /* .................... */ `${uiColor.editorErrorForeground}33`,
  "editorError.foreground": /* .................... */ uiColor.editorErrorForeground,
  "editorHoverWidget.background": /* .............. */ uiColor.background22,
  "editorHoverWidget.border": /* .................. */ uiColor.background,
  "editorIndentGuide.activeBackground": /* ........ */ uiColor.activeIndentGuideBackground,
  "editorIndentGuide.background": /* .............. */ uiColor.background33,
  "editorInfo.background": /* ..................... */ `${uiColor.editorInfoForeground}33`,
  "editorInfo.foreground": /* ..................... */ uiColor.editorInfoForeground,
  "editorLineNumber.activeForeground": /* ......... */ uiColor.backgroundaa,
  "editorLineNumber.foreground": /* ............... */ uiColor.background55,
  "editorMarkerNavigation.background": /* ......... */ uiColor.background22,
  "editorOverviewRuler.border": /* ................ */ uiColor.background,
  "editorRuler.foreground": /* .................... */ `${uiColor.backgroundbb}26`,
  "editorSuggestWidget.background": /* ............ */ uiColor.background11,
  "editorSuggestWidget.border": /* ................ */ uiColor.background,
  "editorSuggestWidget.foreground": /* ............ */ uiColor.backgroundcc,
  "editorSuggestWidget.highlightForeground": /* ... */ uiColor.backgroundee,
  "editorSuggestWidget.selectedBackground": /* .... */ uiColor.background55,
  "editorWarning.background": /* .................. */ `${uiColor.progressBarBackground}33`,
  "editorWarning.foreground": /* .................. */ uiColor.progressBarBackground,
  "editorWhitespace.foreground": /* ............... */ uiColor.background66,
  "editorWidget.background": /* ................... */ uiColor.background22,
  "editorWidget.border": /* ....................... */ uiColor.background,
  "editorWidget.resizeBorder": /* ................. */ uiColor.statusBarBackground,
  "input.background": /* .......................... */ uiColor.background11,
  "list.activeSelectionBackground": /* ............ */ uiColor.background33,
  "list.activeSelectionForeground": /* ............ */ uiColor.backgroundcc,
  "quickInputList.focusBackground": /* ............ */ uiColor.background55,
  "list.focusBackground": /* ...................... */ uiColor.statusBarBackground,
  "list.focusForeground": /* ...................... */ uiColor.backgrounddd,
  "list.highlightForeground": /* .................. */ uiColor.backgroundee,
  "list.hoverBackground": /* ...................... */ uiColor.background33,
  "list.inactiveSelectionBackground": /* .......... */ uiColor.background22,
  "list.inactiveSelectionForeground": /* .......... */ uiColor.backgrounddd,
  "list.warningForeground": /* .................... */ uiColor.progressBarBackground,
  "menu.background": /* ........................... */ uiColor.background11,
  "menu.foreground": /* ........................... */ uiColor.backgroundaa,
  "minimap.selectionHighlight": /* ................ */ `${uiColor.statusBarBackground}66`,
  "peekView.border": /* ........................... */ uiColor.statusBarBackground,
  "peekViewEditor.background": /* ................. */ uiColor.background11,
  "peekViewEditor.matchHighlightBackground": /* ... */ uiColor.background33,
  "peekViewResult.background": /* ................. */ uiColor.background11,
  "peekViewResult.selectionBackground": /* ........ */ uiColor.background33,
  "peekViewTitle.background": /* .................. */ uiColor.background11,
  "peekViewTitleLabel.foreground": /* ............. */ uiColor.backgroundaa,
  "progressBar.background": /* .................... */ uiColor.progressBarBackground,
  "sash.hoverBorder": /* .......................... */ uiColor.statusBarBackground,
  "scrollbar.shadow": /* .......................... */ `${uiColor.background11}00`,
  "scrollbarSlider.activeBackground": /* .......... */ `${uiColor.statusBarBackground}ff`,
  "scrollbarSlider.background": /* ................ */ `${uiColor.background44}77`,
  "scrollbarSlider.hoverBackground": /* ........... */ `${uiColor.background55}88`,
  "statusBar.background": /* ...................... */ uiColor.statusBarBackground,
  "statusBar.debuggingBackground": /* ............. */ uiColor.statusBarDebuggingBackground,
  "statusBar.debuggingBorder": /* ................. */ uiColor.statusBarDebuggingBorder,
  "statusBar.debuggingForeground": /* ............. */ uiColor.statusBarDebuggingForeground,
  "statusBar.foreground": /* ...................... */ uiColor.statusBarForeground,
  "statusBar.noFolderBackground": /* .............. */ uiColor.statusBarNoFolderBackground,
  "statusBar.noFolderForeground": /* .............. */ uiColor.statusBarNoFolderForeground,
  "statusBarItem.hoverBackground": /* ............. */ `${uiColor.background11}44`,
  "statusBarItem.remoteBackground": /* ............ */ uiColor.statusBarRemoteBackground,
  "statusBarItem.remoteForeground": /* ............ */ uiColor.statusBarRemoteForeground,
  "tab.activeBackground": /* ...................... */ uiColor.background22,
  "tab.activeForeground": /* ...................... */ uiColor.backgrounddd,
  "tab.activeModifiedBorder": /* .................. */ uiColor.statusBarNoFolderBackground,
  "tab.hoverBackground": /* ....................... */ uiColor.background33,
  "tab.hoverBorder": /* ........................... */ uiColor.activeIndentGuideBackground,
  "tab.inactiveModifiedBorder": /* ................ */ uiColor.statusBarDebuggingBackground,
  "tab.unfocusedHoverBackground": /* .............. */ uiColor.background25,
  "terminal.ansiBlack": /* ........................ */ termColor.ansiBlack,
  "terminal.ansiBlue": /* ......................... */ termColor.ansiBlue,
  "terminal.ansiBrightBlack": /* .................. */ termColor.ansiBrightBlack,
  "terminal.ansiBrightBlue": /* ................... */ termColor.ansiBrightBlue,
  "terminal.ansiBrightCyan": /* ................... */ termColor.ansiBrightCyan,
  "terminal.ansiBrightGreen": /* .................. */ termColor.ansiBrightGreen,
  "terminal.ansiBrightMagenta": /* ................ */ termColor.ansiBrightMagenta,
  "terminal.ansiBrightRed": /* .................... */ termColor.ansiBrightRed,
  "terminal.ansiBrightWhite": /* .................. */ termColor.ansiBrightWhite,
  "terminal.ansiBrightYellow": /* ................. */ termColor.ansiBrightYellow,
  "terminal.ansiCyan": /* ......................... */ termColor.ansiBrightCyan,
  "terminal.ansiGreen": /* ........................ */ termColor.ansiGreen,
  "terminal.ansiMagenta": /* ...................... */ termColor.ansiMagenta,
  "terminal.ansiRed": /* .......................... */ termColor.ansiRed,
  "terminal.ansiWhite": /* ........................ */ termColor.ansiWhite,
  "terminal.ansiYellow": /* ....................... */ termColor.ansiYellow,
  "terminal.foreground": /* ....................... */ termColor.ansiWhite,
  "textLink.foreground": /* ....................... */ uiColor.textLinkForeground,
  "titleBar.activeForeground": /* ................. */ uiColor.backgroundaa,
  "titleBar.inactiveForeground": /* ............... */ uiColor.background99,
  "widget.shadow": /* ............................. */ `${uiColor.background11}00`,
  focusBorder: /* ................................. */ uiColor.background,
};

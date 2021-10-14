import { Palette } from "../common/colors.js";

export interface workbenchColor {
  [propName: string]: string;
}

export function commonWorkbenchColors(palette: Palette): workbenchColor {
  const colors: workbenchColor = {
    "activityBar.activeBorder": /* .................. */ palette.statusBarBackground.code,
    "activityBar.foreground": /* .................... */ palette.backgroundaa.code,
    "activityBarBadge.background": /* ............... */ palette.statusBarBackground.code,
    "activityBarBadge.foreground": /* ............... */ palette.statusBarForeground.code,
    "badge.background": /* .......................... */ palette.statusBarBackground.code,
    "button.background": /* ......................... */ palette.background44.code,
    "button.foreground": /* ......................... */ palette.backgroundcc.code,
    "button.secondaryBackground": /* ................ */ palette.background33.code,
    "button.secondaryForeground": /* ................ */ palette.backgroundbb.code,
    "debugToolBar.background": /* ................... */ palette.background44.code,
    "diffEditor.insertedTextBackground": /* ......... */ `${palette.statusBarBackground.code}33`,
    "dropdown.background": /* ....................... */ palette.background11.code,
    "dropdown.border": /* ........................... */ palette.background.code,
    "editor.background": /* ......................... */ palette.background.code,
    "editor.findMatchBackground": /* ................ */ palette.background22.code,
    "editor.findMatchBorder": /* .................... */ palette.activeIndentGuideBackground.code,
    "editor.findMatchHighlightBackground": /* ....... */ `${palette.background33.code}77`,
    "editor.foldBackground": /* ..................... */ `${palette.statusBarBackground.code}1f`,
    "editor.foreground": /* ......................... */ palette.backgroundc5.code,
    "editor.inlineValuesBackground": /* ............. */ palette.inlineValuesBackground.code,
    "editor.inlineValuesForeground": /* ............. */ palette.inlineValuesForeground.code,
    "editor.lineHighlightBackground": /* ............ */ `${palette.background33.code}77`,
    "editor.selectionBackground": /* ................ */ `${palette.background33.code}99`,
    "editor.selectionHighlightBackground": /* ....... */ `${palette.background33.code}77`,
    "editor.selectionHighlightBorder": /* ........... */ palette.backgroundcc.code,
    "editor.wordHighlightBackground": /* ............ */ `${palette.background33.code}77`,
    "editor.wordHighlightBorder": /* ................ */ palette.backgroundcc.code,
    "editor.wordHighlightStrongBackground": /* ...... */ `${palette.backgroundbb.code}22`,
    "editor.wordHighlightStrongBorder": /* .......... */ palette.backgrounddd.code,
    "editorBracketHighlight.foreground1": /* ........ */ palette.bracketPair1.code,
    "editorBracketHighlight.foreground2": /* ........ */ palette.bracketPair2.code,
    "editorBracketHighlight.foreground3": /* ........ */ palette.bracketPair3.code,
    "editorBracketHighlight.foreground4": /* ........ */ palette.bracketPair4.code,
    "editorBracketHighlight.foreground5": /* ........ */ palette.bracketPair5.code,
    "editorBracketHighlight.foreground6": /* ........ */ palette.bracketPair6.code,
    "editorBracketMatch.background": /* ............. */ palette.background55.code,
    "editorBracketMatch.border": /* ................. */ palette.background55.code,
    "editorCursor.background": /* ................... */ palette.background11.code,
    "editorCursor.foreground": /* ................... */ palette.backgroundee.code,
    "editorError.background": /* .................... */ `${palette.editorErrorForeground.code}33`,
    "editorError.foreground": /* .................... */ palette.editorErrorForeground.code,
    "editorHoverWidget.background": /* .............. */ palette.background22.code,
    "editorHoverWidget.border": /* .................. */ palette.background.code,
    "editorIndentGuide.activeBackground": /* ........ */ palette.activeIndentGuideBackground.code,
    "editorIndentGuide.background": /* .............. */ palette.background33.code,
    "editorInfo.background": /* ..................... */ `${palette.editorInfoForeground.code}33`,
    "editorInfo.foreground": /* ..................... */ palette.editorInfoForeground.code,
    "editorLightBulb.foreground": /* ................ */ palette.editorLightBulbForeground.code,
    "editorLightBulbAutoFix.foreground": /* ......... */ palette.editorLightBulbAutoFixForeground.code,
    "editorLineNumber.activeForeground": /* ......... */ palette.backgroundaa.code,
    "editorLineNumber.foreground": /* ............... */ palette.background55.code,
    "editorMarkerNavigation.background": /* ......... */ palette.background22.code,
    "editorOverviewRuler.border": /* ................ */ palette.background.code,
    "editorRuler.foreground": /* .................... */ `${palette.backgroundbb.code}26`,
    "editorSuggestWidget.background": /* ............ */ palette.background11.code,
    "editorSuggestWidget.border": /* ................ */ palette.background.code,
    "editorSuggestWidget.foreground": /* ............ */ palette.backgroundcc.code,
    "editorSuggestWidget.highlightForeground": /* ... */ palette.backgroundee.code,
    "editorSuggestWidget.selectedBackground": /* .... */ palette.background55.code,
    "editorWarning.background": /* .................. */ `${palette.progressBarBackground.code}33`,
    "editorWarning.foreground": /* .................. */ palette.progressBarBackground.code,
    "editorWhitespace.foreground": /* ............... */ palette.background66.code,
    "editorWidget.background": /* ................... */ palette.background22.code,
    "editorWidget.border": /* ....................... */ palette.background.code,
    "editorWidget.resizeBorder": /* ................. */ palette.statusBarBackground.code,
    "input.background": /* .......................... */ palette.background11.code,
    "list.activeSelectionBackground": /* ............ */ palette.background33.code,
    "list.activeSelectionForeground": /* ............ */ palette.backgroundcc.code,
    "quickInputList.focusBackground": /* ............ */ palette.background55.code,
    "list.focusBackground": /* ...................... */ palette.statusBarBackground.code,
    "list.focusForeground": /* ...................... */ palette.backgrounddd.code,
    "list.highlightForeground": /* .................. */ palette.backgroundee.code,
    "list.hoverBackground": /* ...................... */ palette.background33.code,
    "list.inactiveSelectionBackground": /* .......... */ palette.background22.code,
    "list.inactiveSelectionForeground": /* .......... */ palette.backgrounddd.code,
    "list.warningForeground": /* .................... */ palette.progressBarBackground.code,
    "menu.background": /* ........................... */ palette.background11.code,
    "menu.foreground": /* ........................... */ palette.backgroundaa.code,
    "minimap.selectionHighlight": /* ................ */ `${palette.statusBarBackground.code}66`,
    "peekView.border": /* ........................... */ palette.statusBarBackground.code,
    "peekViewEditor.background": /* ................. */ palette.background11.code,
    "peekViewEditor.matchHighlightBackground": /* ... */ palette.background33.code,
    "peekViewResult.background": /* ................. */ palette.background11.code,
    "peekViewResult.selectionBackground": /* ........ */ palette.background33.code,
    "peekViewTitle.background": /* .................. */ palette.background11.code,
    "peekViewTitleLabel.foreground": /* ............. */ palette.backgroundaa.code,
    "progressBar.background": /* .................... */ palette.progressBarBackground.code,
    "sash.hoverBorder": /* .......................... */ palette.statusBarBackground.code,
    "scrollbar.shadow": /* .......................... */ `${palette.background11.code}00`,
    "scrollbarSlider.activeBackground": /* .......... */ `${palette.statusBarBackground.code}ff`,
    "scrollbarSlider.background": /* ................ */ `${palette.background44.code}77`,
    "scrollbarSlider.hoverBackground": /* ........... */ `${palette.background55.code}88`,
    "sideBySideEditor.border": /* ................... */ palette.sideBySideEditorBorder.code,
    "statusBar.background": /* ...................... */ palette.statusBarBackground.code,
    "statusBar.debuggingBackground": /* ............. */ palette.statusBarDebuggingBackground.code,
    "statusBar.debuggingBorder": /* ................. */ palette.statusBarDebuggingBorder.code,
    "statusBar.debuggingForeground": /* ............. */ palette.statusBarDebuggingForeground.code,
    "statusBar.foreground": /* ...................... */ palette.statusBarForeground.code,
    "statusBar.noFolderBackground": /* .............. */ palette.statusBarNoFolderBackground.code,
    "statusBar.noFolderForeground": /* .............. */ palette.statusBarNoFolderForeground.code,
    "statusBarItem.hoverBackground": /* ............. */ `${palette.background11.code}44`,
    "statusBarItem.remoteBackground": /* ............ */ palette.statusBarRemoteBackground.code,
    "statusBarItem.remoteForeground": /* ............ */ palette.statusBarRemoteForeground.code,
    "tab.activeBackground": /* ...................... */ palette.background22.code,
    "tab.activeForeground": /* ...................... */ palette.backgrounddd.code,
    "tab.activeModifiedBorder": /* .................. */ palette.statusBarNoFolderBackground.code,
    "tab.hoverBackground": /* ....................... */ palette.background33.code,
    "tab.hoverBorder": /* ........................... */ palette.activeIndentGuideBackground.code,
    "tab.inactiveModifiedBorder": /* ................ */ palette.statusBarDebuggingBackground.code,
    "tab.unfocusedHoverBackground": /* .............. */ palette.background25.code,
    "terminal.ansiBlack": /* ........................ */ palette.ansiBlack.code,
    "terminal.ansiBlue": /* ......................... */ palette.ansiBlue.code,
    "terminal.ansiBrightBlack": /* .................. */ palette.ansiBrightBlack.code,
    "terminal.ansiBrightBlue": /* ................... */ palette.ansiBrightBlue.code,
    "terminal.ansiBrightCyan": /* ................... */ palette.ansiBrightCyan.code,
    "terminal.ansiBrightGreen": /* .................. */ palette.ansiBrightGreen.code,
    "terminal.ansiBrightMagenta": /* ................ */ palette.ansiBrightMagenta.code,
    "terminal.ansiBrightRed": /* .................... */ palette.ansiBrightRed.code,
    "terminal.ansiBrightWhite": /* .................. */ palette.ansiBrightWhite.code,
    "terminal.ansiBrightYellow": /* ................. */ palette.ansiBrightYellow.code,
    "terminal.ansiCyan": /* ......................... */ palette.ansiBrightCyan.code,
    "terminal.ansiGreen": /* ........................ */ palette.ansiGreen.code,
    "terminal.ansiMagenta": /* ...................... */ palette.ansiMagenta.code,
    "terminal.ansiRed": /* .......................... */ palette.ansiRed.code,
    "terminal.ansiWhite": /* ........................ */ palette.ansiWhite.code,
    "terminal.ansiYellow": /* ....................... */ palette.ansiYellow.code,
    "terminal.foreground": /* ....................... */ palette.ansiWhite.code,
    "textLink.foreground": /* ....................... */ palette.textLinkForeground.code,
    "titleBar.activeForeground": /* ................. */ palette.backgroundaa.code,
    "titleBar.inactiveForeground": /* ............... */ palette.background99.code,
    "widget.shadow": /* ............................. */ `${palette.background11.code}00`,
    focusBorder: /* ................................. */ palette.background.code,
  };
  return colors;
}

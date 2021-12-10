import { Palette } from "../common/colors.js";
import { workbenchColor } from "./workbench_common.js";

export function contrastWorkbenchColors(palette: Palette): workbenchColor {
  const colors: workbenchColor = {
    "activityBar.border": /* ................. */ palette.background22.code,
    "breadcrumb.background": /* .............. */ palette.background.code,
    "editorGroup.border": /* ................. */ palette.background22.code,
    "editorGroupHeader.tabsBackground": /* ... */ palette.contrastBackground.code,
    "editorGroupHeader.tabsBorder": /* ....... */ palette.background22.code,
    "panel.background": /* ................... */ palette.contrastBackground.code,
    "panel.border": /* ....................... */ palette.background22.code,
    "sideBar.background": /* ................. */ palette.contrastBackground.code,
    "sideBar.border": /* ..................... */ palette.background22.code,
    "sideBarSectionHeader.background": /* .... */ palette.background22.code,
    "sideBySideEditor.verticalBorder": /* .... */ palette.sideBySideEditorBorder.code,
    "tab.activeBackground": /* ............... */ palette.background1a.code,
    "tab.activeBorder": /* ................... */ palette.tabActiveBorder.code,
    "tab.border": /* ......................... */ palette.background11.code,
    "tab.inactiveBackground": /* ............. */ palette.contrastBackground.code,
    "terminal.border": /* .................... */ palette.background22.code,
    "titleBar.border": /* .................... */ palette.background22.code,
    "window.activeBorder": /* ................ */ palette.statusBarBackground.code,
    "window.inactiveBorder": /* .............. */ palette.statusBarDebuggingBackground.code,
  };
  return colors;
}

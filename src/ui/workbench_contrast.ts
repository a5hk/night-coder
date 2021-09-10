import { ColorPalette } from "../common/colors.js";
import { workbenchColor } from "./workbench_common.js";

export function contrastWorkbenchColors(palette: ColorPalette): workbenchColor {
  const colors: workbenchColor = {
    "activityBar.background": /* ............. */ palette.contrastBackground.code,
    "breadcrumb.background": /* .............. */ palette.contrastBackground.code,
    "editorGroup.border": /* ................. */ palette.background11.code,
    "editorGroupHeader.border": /* ........... */ palette.background11.code,
    "editorGroupHeader.tabsBackground": /* ... */ palette.contrastBackground.code,
    "editorGroupHeader.tabsBorder": /* ....... */ palette.background.code,
    "panel.background": /* ................... */ palette.contrastBackground.code,
    "panel.border": /* ....................... */ palette.background11.code,
    "sideBar.background": /* ................. */ palette.contrastBackground.code,
    "sideBar.border": /* ..................... */ palette.background11.code,
    "sideBarSectionHeader.background": /* .... */ palette.background22.code,
    "tab.border": /* ......................... */ palette.background11.code,
    "tab.inactiveBackground": /* ............. */ palette.contrastBackground.code,
    "terminal.border": /* .................... */ palette.background11.code,
    "titleBar.activeBackground": /* .......... */ palette.contrastBackground.code,
    "titleBar.border": /* .................... */ palette.background.code,
    "titleBar.inactiveBackground": /* ........ */ palette.contrastBackground.code,
  };
  return colors;
}

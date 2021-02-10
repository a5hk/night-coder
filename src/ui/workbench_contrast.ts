import { workbenchColors as uiColor } from "../common/colors.js";
import { workbenchColor } from "./workbench_common.js";

export const contrastWorkbenchColors: workbenchColor = {
  "activityBar.background": /* ............. */ uiColor.contrastBackground,
  "breadcrumb.background": /* .............. */ uiColor.contrastBackground,
  "editorGroup.border": /* ................. */ uiColor.background11,
  "editorGroupHeader.border": /* ........... */ uiColor.background11,
  "editorGroupHeader.tabsBackground": /* ... */ uiColor.contrastBackground,
  "editorGroupHeader.tabsBorder": /* ....... */ uiColor.background,
  "panel.background": /* ................... */ uiColor.contrastBackground,
  "panel.border": /* ....................... */ uiColor.background11,
  "sideBar.background": /* ................. */ uiColor.contrastBackground,
  "sideBar.border": /* ..................... */ uiColor.background11,
  "sideBarSectionHeader.background": /* .... */ uiColor.background22,
  "tab.border": /* ......................... */ uiColor.background11,
  "tab.inactiveBackground": /* ............. */ uiColor.contrastBackground,
  "terminal.border": /* .................... */ uiColor.background11,
  "titleBar.activeBackground": /* .......... */ uiColor.contrastBackground,
  "titleBar.border": /* .................... */ uiColor.background,
  "titleBar.inactiveBackground": /* ........ */ uiColor.contrastBackground,
};

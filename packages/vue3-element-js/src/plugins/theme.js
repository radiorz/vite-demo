// 切换 theme
// 主题名称列表
const themeList = ["light", "dark", "tiger-theme"];
import i18n from "./i18n";
/**
 * set theme to body
 * @param {*} theme
 */
export function setTheme(theme) {
  if (!theme) {
    $log.warn(i18n.global.t("theme.notEmpty"));
    return;
  }
  if (!themeList.includes(theme)) {
    $log.warn(i18n.global.t("theme.notFound"));
    return;
  }
  // const body = document.body;
  // themeList.forEach((item) => {
  //   body.removeAttribute(item);
  // });
  // body.setAttribute(theme);
  const theme = document.documentElement.getAttribute("data-theme");
  if (theme) {
  }
  document.documentElement.setAttribute("data-theme", theme);
}

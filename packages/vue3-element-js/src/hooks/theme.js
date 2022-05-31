// 切换 theme

// import { useI18n } from "vue-i18n";

// const { t } = useI18n();
// 主题名称列表
export const themeList = ["light", "dark", "tiger-theme"];
/**
 * set theme to body
 * @param {*} theme
 */
export function setTheme(theme) {
  if (!theme) {
    $log.warn(() => $i18n.t("theme.empty"));
    return;
  }
  if (!themeList.includes(theme)) {
    $log.warn(() => $i18n.t("theme.notFound"));
    return;
  }
  // const body = document.body;
  // themeList.forEach((item) => {
  //   body.removeAttribute(item);
  // });
  // body.setAttribute(theme);
  // const theme = document.documentElement.getAttribute("data-theme");
  // if (theme) {

  // }
  document.documentElement.setAttribute("data-theme", theme);
}

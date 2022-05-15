const baseTitle = import.meta.env.VITE_APP_TITLE

export function createPageTitleGuard(router) {
  router.afterEach((to) => {
    const pageTitle = $t(`links.${to.name}`);
    if (pageTitle) {
      document.title = `${pageTitle} | ${baseTitle}`;
    } else {
      document.title = baseTitle;
    }
  });
}

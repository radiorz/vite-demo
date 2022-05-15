const baseTitle = import.meta.env.VITE_APP_TITLE;

export function createPageTitleGuard(router) {
  router.afterEach((to) => {
    console.log(`to.meta.title`, to.meta.title);
    const pageTitle = to.meta?.title || $t(`links.${to.name}`);
    if (pageTitle) {
      document.title = `${pageTitle} | ${baseTitle}`;
    } else {
      document.title = baseTitle;
    }
  });
}

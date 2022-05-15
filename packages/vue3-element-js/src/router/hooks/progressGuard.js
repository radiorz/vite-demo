import NProgress from "nprogress";
/**
 * 设置路由进程
 * @param {*} router
 */
export function createProgressGuard({ router }) {
  router.beforeEach((to, from) => {
    if (to.path === from.path) return true;
    if (NProgress.isStarted()) return true;
    NProgress.start();
    return true;
  });
  router.afterEach(() => {
    NProgress.done();
    return true;
  });
}

import NProgress from "nprogress";
/**
 * 设置路由进程
 * @param {*} router
 */
export default function createProgress({ router }) {
  router.beforeEach((to, from) => {
    if (to.path !== from.path) NProgress.start();
    return true;
  });
  router.afterEach(() => {
    NProgress.done();
    return true;
  });
}

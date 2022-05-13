import NProgress from "nprogress";
/**
 *
 * @param {*} isClient
 * @param {*} router
 */
export const install = ({ router }) => {
  router.beforeEach((to, from) => {
    if (to.path !== from.path) NProgress.start();
  });
  router.afterEach(() => {
    NProgress.done();
  });
};

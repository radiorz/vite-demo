export function beforeEachHook(to, from, next) {
  next();
}

export function afterEachHook(to, from) {
  //do something
}
import { createProgressGuard } from "./progressGuard";
import { createPageTitleGuard } from "./pageTitleGuard";
export default function setRouteHooks(router) {
  router.beforeEach(beforeEachHook);
  router.afterEach(afterEachHook);
  createProgressGuard({ router });
  createPageTitleGuard(router);
  return router;
}

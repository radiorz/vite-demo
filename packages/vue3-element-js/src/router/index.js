import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes.js";
import testRoutes from "./test.routes.js";
import * as hook from "./hooks/index.js";
import createProgress from "./hooks/nprogress";
$log.debug("routes", [...routes, ...testRoutes]);
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes, ...testRoutes],
});
router.beforeEach(hook.beforeEachHook);
router.afterEach(hook.afterEachHook);

createProgress({ router });

export default router;

import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes.js";
import testRoutes from "./test.routes.js";
import * as hook from "./hook.js";
$log.debug("routes", [...routes, ...testRoutes]);
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes, ...testRoutes],
});
router.beforeEach(hook.beforeEachHook);
router.afterEach(hook.afterEach);

export default router;

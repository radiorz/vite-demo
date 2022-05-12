import { createRouter, createWebHashHistory } from "vue-router";

import routes from "./route.js";
import testRoutes from "./test.route.js";
import * as hook from "./hook.js";
logger.log("routes", [...routes, ...testRoutes]);
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes, ...testRoutes],
});
router.beforeEach(hook.beforeEachHook);
router.afterEach(hook.afterEach);

export default router;

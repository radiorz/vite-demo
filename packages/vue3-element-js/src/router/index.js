import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes.js";
import testRoutes from "./test.routes.js";
import setRouteHooks from "./hooks/index.js";
$log.debug("routes", routes);
$log.debug(window);
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
if (isDev) {
  router.addRoute(testRoutes);
}
setRouteHooks(router);

export default router;

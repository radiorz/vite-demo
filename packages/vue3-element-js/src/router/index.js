import env from "~/config/env";
import logger from "~/plugins/logger.js";
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes.js";
import testRoutes from "./test.routes.js";
import setRouteHooks from "./hooks/index.js";

logger.debug("routes", routes);
logger.debug(window);
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
if (env.isDev) {
  logger.debug("testRoutesWorks", testRoutes);
  router.addRoute(testRoutes);
}
setRouteHooks(router);

export default router;

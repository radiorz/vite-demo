// import logger from "~/plugins/logger";
import testRoutes from "~pages";
// const nestRoute = { path: "nest", name: "nest" };
// let currentRoute = {};
// for (let i = 0; i < 2; i++) {
//   currentRoute.children = [nestRoute];
//   currentRoute = currentRoute.children[0];
// }
// currentRoute.component = () => import("~/testViews/Nest/index.vue");
// const
const routes = {
  path: "/test",
  name: "test",
  // redirect: "/test/home",
  component: () => import("~/test/views/Home.vue"),
  children: testRoutes,
};
export default routes;

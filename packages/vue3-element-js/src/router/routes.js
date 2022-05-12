const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home/index.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About/index.vue"),
  },
];
export default routes;

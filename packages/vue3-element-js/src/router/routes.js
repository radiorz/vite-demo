const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("~/views/Home/index.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("~/views/About/index.vue"),
  },
  
  {
    path: "/login",
    name: "login",
    component: () => import("~/views/Login/index.vue"),
  },
];
export default routes;

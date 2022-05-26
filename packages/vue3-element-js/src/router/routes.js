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
  
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login/index.vue"),
  },
];
export default routes;

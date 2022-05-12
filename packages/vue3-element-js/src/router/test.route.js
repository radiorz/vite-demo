export default !isDev
  ? []
  : [
      {
        path: "/test",
        name: "Test",
        component: () => import("@/views/Test/index.vue"),
      },
    ];

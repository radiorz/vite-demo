export default !isDev
  ? []
  : [
      {
        path: "/test",
        name: "Test",
        component: () => import("@/views/Test/index.vue"),
        children: [
          {
            path: "/pinia",
            name: "Pinia",
            component: () => import("@/views/Test/Pinia.vue"),
          },
          {
            path: "/i18n",
            name: "I18n",
            component: () => import("@/views/Test/I18n.vue"),
          },
        ],
      },
    ];

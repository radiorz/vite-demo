const testRoutes = [
  {
    path: "/test",
    name: "Test",
    component: () => import("@/views/Test/index.vue"),
    children: [
      {
        path: "pinia",
        name: "Pinia",
        component: () => import("@/views/Test/PiniaTest.vue"),
      },
      {
        path: "i18n",
        name: "I18n",
        component: () => import("@/views/Test/I18nTest.vue"),
      },
      {
        path: "componentis",
        name: "ComponentIs",
        component: () => import("@/views/Test/ComponentIsTest.vue"),
      },
      {
        path: "icon",
        name: "icon",
        component: () => import("@/views/Test/IconTest.vue"),
      },
      {
        path: "form",
        name: "form",
        component: () => import("@/views/Test/FormTest.vue"),
      },
      {
        path: "table",
        name: "Table",
        component: () => import("@/views/Test/TableTest.vue"),
      },
      {
        path: "theme",
        name: "Theme",
        component: () => import("@/views/Test/Theme/index.vue"),
      },
      {
        path: "render",
        name: "Render",
        component: () => import("@/views/Test/TestRender.vue"),
      },
      {
        path: "watermark",
        name: "WaterMarker",
        component: () => import("@/views/Test/TestWaterMark.vue"),
      },
      {
        path: "marquee",
        name: "Marquee",
        component: () => import("@/views/Test/components/Marquee.vue"),
      },
    ],
  },
];

export default !isDev ? [] : testRoutes;

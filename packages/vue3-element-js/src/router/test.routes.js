import { logger } from "@/plugins/logger";
import { namedWithTest, makeRoute } from "@/utils/route";

const nestRoute = { path: "nest", name: "nest" };
let currentRoute = {};
for (let i = 0; i < 2; i++) {
  currentRoute.children = [nestRoute];
  currentRoute = currentRoute.children[0];
}
currentRoute.component = () => import("@/testViews/Nest/index.vue");
logger.debug("nestRoute", nestRoute);
const routes = {
  path: "/test",
  name: "Test",
  // redirect: "/test/home",
  component: () => import("@/testViews/Home.vue"),
  children: [
    {
      path: "pinia",
      name: "Pinia",
      component: () => import("@/components/Layout/EmptyLayout.vue"),
      children: [
        {
          path: "todo",
          name: "TODO",
          component: () => import("@/testViews/pinia/Todo.vue"),
        },
      ],
    },

    makeRoute("tailwind", namedWithTest("Tailwind"), () =>
      import("@/testViews/Tailwind/index.vue")
    ),
    {
      path: "i18n",
      name: "I18n",
      component: () => import("@/testViews/I18nTest.vue"),
    },
    {
      path: "componentis",
      name: "ComponentIs",
      component: () => import("@/testViews/ComponentIsTest.vue"),
    },
    {
      path: "icon",
      name: "icon",
      component: () => import("@/testViews/IconTest.vue"),
    },
    {
      path: "form",
      name: "form",
      component: () => import("@/testViews/FormTest.vue"),
    },
    {
      path: "table",
      name: "Table",
      component: () => import("@/testViews/TableTest.vue"),
    },
    {
      path: "theme",
      name: "Theme",
      component: () => import("@/testViews/Theme/index.vue"),
    },
    {
      path: "render",
      name: "Render",
      component: () => import("@/testViews/TestRender.vue"),
    },
    {
      path: "watermark",
      name: "WaterMarker",
      component: () => import("@/testViews/TestWaterMark.vue"),
    },
    {
      path: "marquee",
      name: "Marquee",
      component: () => import("@/testViews/components/Marquee.vue"),
    },
    {
      path: "mymarquee",
      name: "MyMarquee",
      component: () => import("@/testViews/components/TestMyMarquee.vue"),
    },
    {
      path: "lazyImg",
      name: "LazyImg",
      component: () => import("@/testViews/directives/lazyImg.vue"),
    },
  ],
};
export default {
  ...routes,
  children: routes.children.map((item) => ({
    ...item,
    name: namedWithTest(item.name),
  })),
};

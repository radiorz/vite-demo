import "~/plugins/globalInject";
import useInject from "~/plugins/appInject";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "~/plugins/i18n";
import { registerStore } from "~/stores";
import { createPinia } from "pinia";
import { useRegisterSW } from "virtual:pwa-register/vue";

// import "~/style/main.css"; // global css
import "~/style/index.scss"; // global css
import "overlayscrollbars/overlayscrollbars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";

import Avue from "@smallwei/avue";
import "@smallwei/avue/lib/index.css";

// app.js

useRegisterSW();
const app = createApp(App);
useInject(app);
app.component("OverlayScrollbars", OverlayScrollbarsComponent);
app.use(Avue);
app.use(i18n);
app.use(createPinia());
registerStore();
app.use(router);
app.mount("#app");

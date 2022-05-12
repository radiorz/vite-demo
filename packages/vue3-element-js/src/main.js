import "@/plugins/globalInject";
import appInject from "@/plugins/appInject";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "@/plugins/i18n";
import "@/style/index.scss"; // global css
// app.js
import { createPinia } from "pinia";

import "@/style/main.css";
const app = createApp(App);
appInject(app);
app.use(i18n);
app.use(createPinia());
app.use(router);
app.mount("#app");

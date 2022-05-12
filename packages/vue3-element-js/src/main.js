import "@/plugins/globalInject";
import appInject from "@/plugins/appInject";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "@/plugins/i18n";

// app.js
// import { createPinia } from 'pinia'
// app.use(createPinia())

import "@/style/main.css";
const app = createApp(App);
appInject(app);
app.use(i18n);
app.use(router);
app.mount("#app");

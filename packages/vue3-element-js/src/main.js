import "~/plugins/globalInject";
import appInject from "~/plugins/appInject";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "~/plugins/i18n";
import { registerStore } from "~/stores";
import { ElForm } from "element-plus/es";
// import "~/style/main.css"; // global css
import "~/style/index.scss"; // global css
// app.js
import { createPinia } from "pinia";
const app = createApp(App);
appInject(app);
app.use(ElForm);
app.use(i18n);
app.use(createPinia());

registerStore();
app.use(router);
app.mount("#app");

import "@/plugins/globalInject";
import inject from "@/plugins/inject";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
//app.js
// import { createPinia } from 'pinia'
// app.use(createPinia())

import "@/style/main.css";
const app = createApp(App);
inject(app);
app.use(router);
app.mount("#app");

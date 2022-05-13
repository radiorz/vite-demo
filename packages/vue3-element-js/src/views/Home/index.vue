<!--
* @FileDescription: 该文件的描述信息
* @Date: 2022年05月12日 11:26:44
* TODO:
* [] 
-->

<script setup>
import { useI18n } from "vue-i18n";
import routes from "@/router/routes.js";
// import testRoutes from "@/router/test.route.js";
import layouts from "@/components/Layout";
import CommonLayout from "@/components/Layout/CommonLayout.vue";
import HeaderBar from "./HeaderBar.vue";
const { t } = useI18n();
// const routes = [
//   { name: "home", path: "/" },
//   { name: "about", path: "/about" },
// ];
const testRoutes = [{ name: "test", path: "/test" }];
$log.debug(`routes`, routes);
$log.debug(`routes`, testRoutes);
const links = [...routes, ...testRoutes];
const Layout = defineAsyncComponent(layouts["CommonLayout"]);
</script>

<template>
  <div class="home">
    <!-- 这个后期可以使用可变的layout -->
    <component :is="Layout">
      <template v-slot:header>
        <HeaderBar /> 
      </template>
      <template v-slot:aside>
        <ul>
          <li v-for="(link, index) in links" :key="index">
            <router-link :to="link.path">{{
              t(`links.${link.name}`)
            }}</router-link>
          </li>
        </ul>
      </template>
      <router-view>{{ t("views.main") }}</router-view>
    </component>
  </div>
</template>

<style></style>

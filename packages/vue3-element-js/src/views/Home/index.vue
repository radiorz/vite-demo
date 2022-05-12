<!--
* @FileDescription: 该文件的描述信息
* @Date: 2022年05月12日 11:26:44
* TODO:
* [] 
-->

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const links = [
  { name: "home", path: "/" },
  { name: "about", path: "/" },
  { name: "test", path: "/" },
];
</script>

<template>
  <div class="home">
    <!-- 这个后期可以使用可变的layout -->
    <CommonLayout>
      <template v-slot:header>
        <h1>{{ t("default.title") }}</h1>
      </template>
      <template v-slot:aside>
        <ul>
          <li v-for="(link, index) in links" :key="index">
            <router-link :to="link.path">{{ t(link.name) }}</router-link>
          </li>
        </ul>
      </template>
      this is main
      <router-view></router-view>
    </CommonLayout>
  </div>
</template>

<style></style>

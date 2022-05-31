<!--
* @FileDescription: 
* @Date: 2022年05月28日 00:32:02
* TODO:
* [] 
-->
<script lang="ts">
export default {
  name: "ThemeChange",
};
</script>
<script setup lang="ts">
import { themeChange } from "theme-change";
import { onMounted } from "vue";
import * as consts from "./consts.js";
const { themes } = consts;
// FIXME 修复bug 可能已经改了
const html = document.querySelector("html");
$log.debug("html", html);
const theme = html.getAttribute("data-theme");
$log.debug("value", theme);
const value = ref(theme || themes[0].id);
onMounted(() => {
  themeChange(false);
});
</script>

<template>
  <el-select v-model="value" class="m-2" placeholder="Select" data-choose-theme>
    <el-option
      v-for="theme in themes"
      :key="theme.id"
      :label="theme.name"
      :value="theme.name"
      :data-set-theme="theme.id"
      data-act-class="outline"
      class="flex-center"
      :data-theme="theme.id"
    >
      <span>{{ theme.name }}</span>
      <div width="100%"></div>
      <!-- 显示主要颜色 -->
      <!-- primary -->
      <span class="text-main">P</span>
      <!-- primary -->
      <span class="text-success">S</span>
      <!--  -->
      <span class="text-danger">D</span>
      <!-- primary -->
      <span class="text-error">E</span>
    </el-option>
  </el-select>
</template>

<style lang="scss" scoped></style>

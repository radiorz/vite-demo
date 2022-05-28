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
onMounted(() => {
  themeChange(false);
});
</script>

<template>
  <el-select v-model="value" class="m-2" placeholder="Select">
    <el-option
      v-for="theme in themes"
      :key="theme.id"
      :label="theme.name"
      :value="theme.name"
      :data-set-theme="theme.id"
      data-act-class="outline"
      :data-theme="theme.id"
    />
  </el-select>
</template>

<style lang="scss" scoped></style>

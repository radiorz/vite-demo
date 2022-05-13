<!--
* @FileDescription: 切换主题色 如何切换
* @Date: 2022年05月12日 16:19:21
* TODO:
* [] 
-->

<script setup>
import { useI18n } from "vue-i18n";
import { themeList, setTheme } from "@/composables/theme";
const { t } = useI18n();
</script>

<template>
  <div>
    <el-button
      v-for="(theme, index) in themeList"
      :key="index"
      @click="setTheme(theme)"
    >
      {{ t(`theme.${theme}`) }}
    </el-button>
  </div>
</template>

<style></style>

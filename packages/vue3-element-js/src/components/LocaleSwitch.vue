<!--
* @FileDescription: 切换 language
* @Date: 2022年05月13日 09:09:09
* TODO:
* [] 
-->

<script setup>
import { useI18n } from "vue-i18n";
const { locale, t, availableLocales } = useI18n();

const changeLocale = (lang) => {
  if (!availableLocales.includes(lang)) {
    $log.error(t(`${lang} is not available`));
    throw new Error(t("lang is not available"));
  }
  locale.value = lang
};
</script>

<template>
  <div class="language flex justify-center">
    {{ t(locale) }}

    {{ availableLocales }}
    <!-- 图标 -->
    <!-- 下拉列表 -->
    <div v-for="(theLocale, index) in availableLocales" :key="index">
      <el-button @click="changeLocale(theLocale)"> {{ t(theLocale) }}</el-button>
    </div>
  </div>
</template>

<style></style>

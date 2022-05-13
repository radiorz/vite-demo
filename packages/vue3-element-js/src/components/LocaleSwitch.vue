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
  locale.value = lang;
};
</script>

<template>
  <div class="language flex justify-center">
    <!-- 图标 -->
    <!-- 下拉列表 -->
    <el-dropdown class="dropdown" @command="changeLocale">
      <span class="text-white h-full">
        {{ t("default.language") }}
      </span>
      <el-icon class="el-icon--right"><i-ep-arrow-down /></el-icon>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="(theLocale, index) in availableLocales"
            :key="index"
            :command="theLocale"
          >
            {{ t(`language.${theLocale}`) }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style lang="scss" scoped>
.dropdown {
  font-size: 1rem;
  @apply text-white shrink-0;
}
</style>

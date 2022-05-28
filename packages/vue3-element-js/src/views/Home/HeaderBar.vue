<!--
* @FileDescription: header bar
* @Date: 2022年05月13日 11:17:01
* TODO:
* [] 
-->

<script setup>
// import ThemeChange from "@/components/ThemeChange/index.vue";
</script>

<template>
  <FlexBar>
    <div class="w-full"></div>
    <!-- 主题选择 -->
//    <ThemeChange></ThemeChange>
    <!-- 语言选择 -->
    <LocaleSwitch></LocaleSwitch>
    <ToggleDark class="text-white"></ToggleDark>
    <div class="w-4"></div>
  </FlexBar>
</template>

<style lang="scss" scoped></style>

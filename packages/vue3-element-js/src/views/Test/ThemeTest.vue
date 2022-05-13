<!--
* @FileDescription: theme test
* @Date: 2022年05月13日 14:08:16
* TODO:
* [] 
-->

<script setup>
let theme = "light";
</script>

<template>
  <div class="theme-test">
    <ThemeSwitch></ThemeSwitch>
    <h1>theme: {{ theme }}</h1>
    用户交互主要效果 - 选取 selection - hover - 渐变色 - 过渡动效
    <a></a>
    <p class="text-blue-500">
      122312333333333333333333333333111111111111111111111111111111111111111111111111111
    </p>
    <p class="text-highlight">text-highlight</p>
    <p class="text-main">test-main</p>
    <p class="text-white bg-highlight">text-white bg-highlight</p>
    <input type="text" />
  </div>
</template>

<style lang="scss" scoped></style>

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
    <ThemeSwitch> </ThemeSwitch>
    <h1>theme: {{ theme }}</h1>
  </div>
</template>

<style lang="scss" scoped></style>

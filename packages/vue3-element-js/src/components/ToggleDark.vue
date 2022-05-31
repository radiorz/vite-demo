<!--
* @FileDescription: 该文件的描述信息
* @Date: 2022年05月12日 13:40:08
* TODO:
* [] 
-->

<script setup>
import * as dark from "~/composables/dark";
let { isDark, toggleDark } = dark;
// const isDark = 123;
// const toogleDark = () => {};
</script>

<template>
  <el-button
    :style="{ '--el-fill-color-light': 'transparent' }"
    type="plain"
    text
    @click="toggleDark()"
  >
    <!-- FIXME 这货颜色有问题 -->
    <i-ep-sunny v-show="isDark"></i-ep-sunny>
    <i-ep-moon v-show="!isDark"></i-ep-moon>
  </el-button>
</template>

<style scoped lang="scss">
.button {
  @apply bg-transparent;
}
</style>

<!--
* @FileDescription: 侧边栏
* @Date: 2022年05月12日 17:55:28
* TODO:
* [] 
-->

<script setup>
// 设计成树级结构
const menus = defineProps({ type: String, default: () => [], required: true });
</script>

<template>
  <div class="my-menu">
    {{ menus }}
    <el-menu> </el-menu>
  </div>
</template>

<style></style>

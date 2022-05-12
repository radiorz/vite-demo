<!--
* @FileDescription: 该文件的描述信息
* @Date: 2022年05月12日 13:40:08
* TODO:
* [] 
-->

<script setup>
import { UseDark } from "@vueuse/components";
</script>

<template>
  <UseDark v-slot="{ isDark, toggleDark }">
    <el-button @click="toggleDark()">Is Dark: {{ isDark }}</el-button>
  </UseDark>
</template>

<style></style>

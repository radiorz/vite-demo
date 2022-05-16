<!--
* @FileDescription: 该文件的描述信息
* @Date: 2022年05月12日 16:26:27
* TODO:
* [] 
-->

<script setup>
const data1 = ref("111");
</script>

<template>
  <div>
    <h1>元素</h1>
    {{ typeof isDev}}
    {{ window.isDev ? data1 : "" }}
    <!-- <number-input v-model="data1"></number-input> -->
  </div>
</template>

<style></style>

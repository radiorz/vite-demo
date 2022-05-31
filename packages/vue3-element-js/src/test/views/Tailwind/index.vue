<!--
* @FileDescription: 测试 tailwind
* @Date: 2022年05月24日 09:59:21
* TODO:
* [] 
-->

<script>
export default {
  name: "TestTailwind",
};
</script>
<script setup></script>

<template>
  <div class="">
    <div v-for="i in 20" :key="i" :class="[`p-${i}`]">p-{{ i }}</div>
    <div v-for="i in 20" :key="i" :class="[`m-${i}`]">m-{{ i }}</div>
  </div>
</template>

<style lang="scss" scoped>
</style>

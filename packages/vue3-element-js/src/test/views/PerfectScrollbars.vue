<!--
* @FileDescription: 该文件的描述信息
* @Date: 2022年06月01日 22:01:53  
* TODO:
* [] 
-->

<script>
export default {
  name: "PefectScrollbars",
};
</script>
<script setup></script>

<template>
  <OverlayScrollbars class="flex">
    <span v-for="i of 1000" :key="i">{{ i }}</span>
  </OverlayScrollbars>
  <OverlayScrollbars class="flex flex-col h-1/2">
    <div v-for="i of 1000" :key="i">{{ i }}</div>
  </OverlayScrollbars>
</template>

<style lang="scss" scoped></style>

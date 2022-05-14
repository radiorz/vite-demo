<!--
* @FileDescription: 测试渲染
* @Date: 2022年05月14日 11:58:09
* TODO:
* [] 
-->

<script setup>
import jsNode from "./jsxrender";
const render = () => {
  return h("div", [], "h render");
};
</script>
<template>
  <div>
    <render />
    <jsxNode />
  </div>
</template>

<style lang="scss" scoped></style>

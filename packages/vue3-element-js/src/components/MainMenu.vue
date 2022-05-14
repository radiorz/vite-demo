<!--
* @FileDescription: 导航 两种形式
* @Date: 2022年05月12日 17:55:28
* TODO:
* [] 
-->

<script setup>
// 设计成树级结构
const props = defineProps({ menus: { type: Array, default: () => [] } });
$log.debug("menus", props.menus);
const render = () => {
  return h("div", [], "123");
};
</script>
<template>
  <render></render>
</template>
<style></style>

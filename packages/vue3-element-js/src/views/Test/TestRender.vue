<!--
* @FileDescription: 测试渲染
* @Date: 2022年05月14日 11:58:09
* TODO:
* [] 
-->

<script setup>
import jsxNode from "./jsxrender.jsx";
$log.info(jsxNode);

// const jsxNode2 = defineComponent({
//   name: "jsxNode2",
//   render() {
//     return <div>123</div>;
//   },
// });
const render = () => {
  return h("div", [], "h render");
};
</script>
<template>
  <div>
    <render />
    <jsxNode />
    <!-- <jsxNode2 /> -->
  </div>
</template>

<style lang="scss" scoped></style>

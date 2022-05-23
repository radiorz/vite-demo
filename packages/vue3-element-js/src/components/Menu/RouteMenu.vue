<!--
* @FileDescription: routemenu
* @Date: 2022年05月19日 15:28:11
* TODO:
* [] https://github.com/xiaoxian521/vue-pure-admin/blob/25f70fd51bb8fc5c15d2baab099d06b3e7b077c6/src/layout/components/sidebar/vertical.vue
-->

<script>
export default {
  name: "RouteMenu",
};
</script>
<script setup>
const props = defineProps({
  menus: { type: Array, default: () => [] },
  isCollapse: { type: Boolean, default: true },
});
</script>

<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu mode="vertical" router unique-opened :collapse="isCollapse">
      <sidebar-item ></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<style lang="scss" scoped></style>

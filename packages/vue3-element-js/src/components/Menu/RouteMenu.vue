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
  father: { type: Object, default: () => ({}) },
  menus: { type: Array, default: () => [] },
  isCollapse: { type: Boolean, default: false },
});
</script>

<template>
  <el-scrollbar wrap-class="scrollbar-wrapper" class="w-full">
    <el-menu
      class="w-full"
      default-active="route.path"
      mode="vertical"
      router
      unique-opened
      :collapse="isCollapse"
    >
      <route-item
        v-for="(routes, index) in menus"
        :father="{ ...father, routePath: father.path }"
        :key="routes.path"
        :data="{ ...routes, index }"
      ></route-item>
    </el-menu>
  </el-scrollbar>
</template>

<style lang="scss" scoped>
.scrollbar-wrapper {
  height: 100%;
  width: 100% !important;
  overflow: auto;
  .route-menu {
    width: 100% !important;
  }
}
</style>

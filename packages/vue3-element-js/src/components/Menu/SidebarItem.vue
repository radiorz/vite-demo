<!--
* @FileDescription: 侧边栏样式
* @Date: 2022年05月23日 14:31:02
* TODO:
* [] 
-->

<script>
export default {
  name: "SidebarItem",
};
</script>
<script setup>
const props = defineProps({
  data: { type: Object, default: () => ({}) },
});
</script>

<template>
  <div class="SidebarItem">
    {{ data }}
  </div>
</template>

<style lang="scss" scoped></style>

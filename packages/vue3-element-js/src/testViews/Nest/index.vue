<!--
* @FileDescription: 该文件的描述信息
* @Date: 2022年05月24日 14:54:31
* TODO:
* [] 
-->

<script>
export default {
  name: "",
  props: {
    route: {
      type: String,
      default: "",
    },
  },
};
</script>
<script setup></script>

<template>
  <div class="">
    <span>{{ route }}</span>
  </div>
</template>

<style lang="scss" scoped></style>

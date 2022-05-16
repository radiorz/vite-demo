<!--
* @FileDescription: 继承
* @Date: 2022年05月16日 08:47:44
* TODO:
* [] 
-->

<script setup></script>
<script>
import { ElInput } from "element-plus/es";
export default defineComponent({
  extends: ElInput,
  inheritAttrs: false,

  setup(props, { attrs }) {
    console.log(`props`, props);
    console.log(`attrs`, attrs);
  },
  mounted() {
    console.log(`$listeners`, this.$props);
    console.log(`$listeners`, this.$attrs);
    console.log(`$listeners`, this.$listeners);
  },
});
</script>

<template>
  <el-input v-bind="{ ...$props, ...$attrs }" type="number" />
</template>

<style lang="scss" scoped></style>

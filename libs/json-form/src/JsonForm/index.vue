<!--
* @FileDescription: form 的主入口
* @Date: 2022年06月07日 13:54:02
* TODO:
* [] 
-->

<script>
export default {
  name: "json-form",
};
</script>
<script setup>
const props = defineProps({
  schema: { type: Object, default: () => ({}) },
  uiSchema: { type: Object, default: () => ({}) },
});
</script>

<template>
  <div class="json-form">
    {{ props.schema }}
    {{ props.uiSchema }}
  </div>
</template>

<style lang="scss" scoped></style>

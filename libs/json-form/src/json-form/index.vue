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
import FieldManager from "~/components/field-manager";
const props = defineProps({
  schema: { type: Object, default: () => ({}) },
  uiSchema: { type: Object, default: () => ({}) },
  data: { type: Object, default: () => ({}) },
});
</script>

<template>
  <div class="json-form">
    <field-manager v-model="data" :schema="schema"></field-manager>
    {{ props.uiSchema }}
  </div>
</template>

<style lang="scss" scoped></style>

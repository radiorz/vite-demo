<!--
* @FileDescription: 该文件的描述信息
* @Date: 2022年06月07日 15:40:45
* TODO:
* [] 
-->

<script>
export default {
  name: "App",
};
</script>
<script setup>
import JsonForm from "./index.js";
const schema = {
  type: "object",
  properties: {
    username: {
      type: "string",
      default: "",
    },
    password: {
      type: "string",
      default: "",
    },
  },
};
const uiSchema = {
  username: {
    widget: "text-field",
  },
};
</script>

<template>
  <div>
    // 这是测试 jsonSchema
    <JsonForm :schema="schema"></JsonForm>
  </div>
</template>

<style lang="scss" scoped></style>

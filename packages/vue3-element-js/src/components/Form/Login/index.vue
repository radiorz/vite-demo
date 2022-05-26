<!--
* @FileDescription: 
* @Date: 2022年05月26日 22:57:38
* TODO:
* [] 
-->

<script>
export default {
  name: "LoginForm",
};
</script>
<script setup>
const { t } = useI18n();
// import VueForm from "@lljj/vue3-form-element";

const formData = reactive({
  username: "",
  password: "",
});
// $log.debug("formData", formData);

// const schema = {
//   type: "object",
//   // 必须参数
//   required: ["username", "password"],
//   properties: {
//     username: {
//       type: "string",
//       title: t("form.username"),
//     },
//     password: {
//       type: "string",
//       title: t("form.password"),
//       // 详细规则见 json-schema
//       minLength: 6,
//     },
//   },
// };
// const uiSchema = {
//   username: {
//     "ui:options": {
//       placeholder: t("form.username"),
//       //
//       // type: '',
//       rows: 1,
//     },
//   },
// };
</script>

<template>
  <span>{{ formData }}</span>
  <!-- <vue-form
    v-model="formData"
    :schema="schema"
  ></vue-form> -->
</template>

<style lang="scss" scoped></style>

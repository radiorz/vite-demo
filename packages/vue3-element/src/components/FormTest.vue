<!--
* @FileDescription: 该文件的描述信息
* @Date: 2022年05月27日 11:59:28
* TODO:
* [] 
-->

<script>
//  使用
import VueForm from "@lljj/vue3-form-element";

export default {
  name: "FormTest",
  components: {
    VueForm,
  },
  data() {
    return {
      formData: {},
      schema: {
        type: "object",
        required: ["userName", "age"],
        properties: {
          userName: {
            type: "string",
            title: "用户名",
            default: "Liu.Jun",
          },
          age: {
            type: "number",
            title: "年龄",
          },
          bio: {
            type: "string",
            title: "签名",
            minLength: 10,
            default: "知道的越多、就知道的越少",
            "ui:options": {
              placeholder: "请输入你的签名",
              type: "textarea",
              rows: 1,
            },
          },
        },
      },
    };
  },
};
</script>
<script setup></script>

<template>
  <!-- <el-form>
    <el-form-item>
      <el-input />
    </el-form-item>
  </el-form> -->
  <VueForm
    v-model="formData"
    :schema="schema"
  />
</template>

<style lang="scss" scoped></style>

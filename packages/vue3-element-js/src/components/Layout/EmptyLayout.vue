<!--
* @FileDescription: 该文件的描述信息
* @Date: 2022年01月05日 11:15:27
* TODO:
* [] 
-->

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Empty",
  setup() {},
  data() {
    return { a: 123 };
  },
});
</script>

<template>
  <span> {{ a }}</span>
  <router-view />
</template>

<style></style>

<!--
* @FileDescription: 
* @Date: 2022年06月07日 15:12:40
* TODO:
* [] 
-->

<script>
export default {
  name: "widget-text-field",
};
</script>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  value: { type: String, default: "" },
});
</script>

<template>
  <div class="">
    this is a switch
  </div>
</template>

<style lang="scss" scoped></style>

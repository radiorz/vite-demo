<!--
* @FileDescription: component3
* @Date: 2022年05月12日 18:19:22
* TODO:
* [] 
-->

<script setup>
import CommonLayout from "~/components/Layout/CommonLayout.vue";
const layout = CommonLayout;
</script>
<template>
  <div>
    {{ layout }}
    <component :is="layout">123</component>
  </div>
</template>

<style></style>

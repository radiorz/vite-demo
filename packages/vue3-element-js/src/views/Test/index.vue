<!--
* @FileDescription: 该文件的描述信息
* @Date: 2022年05月12日 11:26:44
* TODO:
* [] 
-->

<script setup>
const $log = inject("$log");
$log.debug("this is test page");
</script>

<template>
  <HeaderLayout>
    <template v-slot:header> this is test</template>
  </HeaderLayout>
</template>

<style></style>

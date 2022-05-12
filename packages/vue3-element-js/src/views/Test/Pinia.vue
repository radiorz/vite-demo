<!--
* @FileDescription: 测试使用 状态库
* @Date: 2022年05月12日 16:25:24
* TODO:
* [] 
-->

<script setup>
import { useUserStore } from "@/stores/user";
const $log = inject("$log");
const { name } = useUserStore();
$log.info(`user`, name);
$log.info(123);
</script>

<template>
  <div class="app">123123</div>
</template>

<style></style>

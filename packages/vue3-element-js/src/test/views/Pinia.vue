<!--
* @FileDescription: 测试使用 状态库
* @Date: 2022年05月12日 16:25:24
* TODO:
* [] 
-->

<script setup>
import { useUserStore } from "~/stores/user";
const $log = inject("$log");
const { name } = useUserStore();
$log.info(`user`, name);
$log.info(123);
const { t } = useI18n();
</script>

<template>
  <div class="app">{{ t("default.title") }}</div>
</template>

<style></style>

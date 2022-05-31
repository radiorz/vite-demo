<!--
* @FileDescription: i18n测试
* @Date: 2022年05月12日 16:26:33
* TODO:
* [] 
-->

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <div class="i18n test">
    {{ t("default.theme") }}
    {{ $t("default.theme") }}
  </div>
</template>

<style></style>

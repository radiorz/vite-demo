<!--
* @FileDescription: 404
* @Date: 2022年05月31日 14:17:24
* TODO:
* [] 
-->

<script>
export default {
  name: "vue",
};
</script>
<script setup>
// import { useGo } from "~/hooks/web/usePage";
const { t } = useI18n();
const router = useRouter();

function goBack() {
  router.push({
    name: "home",
  });
}
</script>

<template>
  <div class="flex-center">
    <el-button @click="goBack">{{ t("default.goBack.home") }}</el-button>
  </div>
</template>

<style lang="scss" scoped></style>

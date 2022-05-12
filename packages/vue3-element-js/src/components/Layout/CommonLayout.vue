<!--
* @FileDescription: 该文件的描述信息
* @Date: 2022年05月12日 15:11:43
* TODO:
* [] 
-->

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <div class="brand flex-center">
          <slot name="brand">{{ t("platform.title") }}</slot>
        </div>
        <!-- FIXME 此处有bug -->
        <div class="flex-center w-full">
          <slot name="header"></slot>
        </div>
      </el-header>
      <el-container>
        <el-aside class="aside flex-center">
          <slot name="aside"></slot>
        </el-aside>
        <el-main class="main flex-center">
          <slot></slot>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.common-layout {
  height: 100vh;
  .brand {
    @apply w-64 bg-black;
  }
  .header {
    @apply bg-primary text-white flex p-0;
  }
  .aside {
    @apply w-64 bg-secondary;
  }
  .main {
    @apply p-0 w-full;
  }
  .el-container {
    height: 100%;
  }
}
</style>

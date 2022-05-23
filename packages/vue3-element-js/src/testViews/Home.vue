<!--
* @FileDescription: 该文件的描述信息
* @Date: 2022年05月12日 11:26:44
* TODO:
* [] 
-->

<script setup>
$log.debug("this is test page");
import testRoutes from "@/router/test.routes";
$log.debug("testRoutes", testRoutes);
</script>

<template>
  <CommonLayout>
    <template v-slot:header> this is test</template>
    <template v-slot:aside>
      <!-- 侧边栏 -->
      {{ testRoutes.children.map((item) => item.name) }}
    </template>
    <router-view />
  </CommonLayout>
</template>

<style></style>

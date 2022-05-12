<!--
* @FileDescription: Header layout
* @Date: 2022年05月12日 21:54:33
* TODO:
* [] 
-->

<script setup></script>

<template>
  <div class="header-layout">
    <el-container>
      <el-header class="bg-primary text-white flex-center">
        <slot name="header"></slot>
      </el-header>
      <el-main class="p-0 m-0">
        <slot>
          <router-view></router-view>
        </slot>
      </el-main>
    </el-container>
  </div>
</template>

<style></style>

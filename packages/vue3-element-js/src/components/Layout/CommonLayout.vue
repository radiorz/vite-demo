<!--
* @FileDescription: 该文件的描述信息
* @Date: 2022年05月12日 15:11:43
* TODO:
* [] 
-->

<script setup></script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="bg-indigo-500 flex-center">
        <slot name="header"></slot>
      </el-header>
      <el-container>
        <el-aside width="200px" class="flex-center">
          <slot name="aside"></slot>
        </el-aside>
        <el-main class="flex-center">
          <slot></slot>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style></style>

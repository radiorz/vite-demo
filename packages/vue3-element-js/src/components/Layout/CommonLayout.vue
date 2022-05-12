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
      <el-header>
        <slot name="header"></slot>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <slot name="aside"></slot>
        </el-aside>
        <el-main>
          <slot></slot>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style></style>

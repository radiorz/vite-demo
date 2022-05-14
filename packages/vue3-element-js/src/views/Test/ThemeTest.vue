<!--
* @FileDescription: theme test
* @Date: 2022年05月13日 14:08:16
* TODO:
* [] 
-->

<script setup>
let theme = "light";
let value = ref("");
</script>

<template>
  <div class="theme-test">
    <ThemeSwitch></ThemeSwitch>
    <h1>theme: {{ theme }}</h1>
    用户交互主要效果 - 选取 selection - hover - 渐变色 - 过渡动效
    <h1>highlight</h1>
    <div class="h-10 w-10 bg-highlight"></div>
    <div class="h-10 w-10 border-8 border-highlight"></div>
    <h1>bg</h1>
    <div class="h-10 w-10 bg-base"></div>
    <div class="h-10 w-10 bg-nav"></div>
    <h1>text</h1>
    <div class="h-10 w-10 text-main">main</div>
    <div class="h-10 w-10 text-muted">muted</div>
    <div class="h-10 w-10 text-invert">invert</div>
    <h1>fill</h1>
    <div class="h-10 w-10 bg-main"></div>
    <div class="h-10 w-10 bg-muted"></div>
    <div class="flex-center">
      <p>main</p>
      <p class="selection:bg-muted selection:text-highlight">selected text</p>
      <button class="hover:bg-invert bg-main text-white">invert</button>
      <button class="bg-main text-white hover:bg-muted">muted</button>
    </div>

    <h1>form</h1>
    <a href="/">我是链接</a>
    <input type="text" />
    <span>123</span>
    <el-input v-model="value" />
    <input type="button" />
    <el-button>我是个 element 按钮啊</el-button>
    <button>我是个按钮啊</button>
    <h1>with t('default.theme')
    </h1>
  </div>
</template>

<style lang="scss" scoped></style>

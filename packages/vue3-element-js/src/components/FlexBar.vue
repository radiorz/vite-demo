<!--
* @FileDescription: Header bar
* @Date: 2022年05月13日 11:14:58
* TODO:
* [] 
-->

<script setup></script>

<template>
  <div class="flex-bar">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.flex-bar {
  @apply flex justify-center items-center w-full;
}
</style>

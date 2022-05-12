<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>  
  <div class="test">
    <ThemeButton></ThemeButton>
    <div class="test-content">asdfasdf</div>
    <el-button>123123123</el-button>
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.test {
  .test-content {
    @apply text-red-300;
    background: #2c3e50;
  }
}
</style>

<script setup lang="ts">
import JsonForm from "@tikkhun/json-form";
// import Home from "~/views/Home/index.vue";
import logger from "@tikkhun/logger";
logger.debug("123");
</script>

<template>
  <div>
    <!-- <Home /> -->
    <JsonForm />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

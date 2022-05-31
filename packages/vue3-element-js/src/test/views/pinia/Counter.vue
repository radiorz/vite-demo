<!--
* @FileDescription: 测试 pinia 的 count
* @Date: 2022年05月27日 21:04:27
* TODO:
* [] 
-->

<script>
export default {
  name: "TestCount",
};
</script>
<script setup>
import appStore from "~/stores";
</script>

<template>
  <section>
    <div class="container py-8 mx-auto text-center">
      <div>
        <p
          class="font-medium tracking-wide text-gray-600 uppercase text-10xl dark:text-gray-200"
        >
          Counter:
        </p>
        <h5 class="font-bold text-white text-8xl">
          <span class="inline text-gray-600 dark:text-white">
            {{ appStore.counter.count }}
          </span>
        </h5>
      </div>

      <div class="flex p-4 mx-auto mt-4 w-52">
        <el-button @click="appStore.counter.increment()"> +1 </el-button>
        <el-button @click="appStore.counter.decrement()"> -1 </el-button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>

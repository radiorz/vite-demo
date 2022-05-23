<!--
* @FileDescription: 该文件的描述信息
* @Date: 2022年05月23日 14:07:21
* TODO:
* [] 
-->

<script>
export default {
  name: "LazyImgTest",
};
</script>
<script setup>
import vLazyImg from "@/directives/lazyImg";
</script>

<template>
  <div class="LazyImgTest">
    <p v-for="i of 50" :key="i">{{ i }}</p>
    <img
      v-lazy-img="
        'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
      "
    />
    <p v-for="i of 50" :key="i">{{ i }}</p>
  </div>
</template>

<style lang="scss" scoped></style>

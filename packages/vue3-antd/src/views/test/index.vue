<!--
* @FileDescription: 该文件的描述信息
* @Date: 2022年05月12日 11:05:09
* TODO:
* [] 
-->

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "TheTest",
  // components: {},
  props: {},
  // 从组件触发 emits 事件
  // emits:{},
  // 暴露
  // expose: {},
  data() {
    return {};
  },
  // computed:{},
  // watch:{},
  created() {
    this.$log.info("i am test");
  },
  // methods:{}
});
</script>

<template>
  <CommonLayout>
    <router-view />
  </CommonLayout>
</template>

<style lang="scss" scoped></style>

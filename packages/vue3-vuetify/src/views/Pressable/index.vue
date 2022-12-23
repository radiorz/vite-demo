<!--
  * @file 该文件的描述信息
  * @Date 2022年12月21日 09:14:59
  * TODO
  * [] 
  * @example
  * 
-->

<script>
export default {
  name: "ThePressable",
};
</script>
<script setup>
const onDivClick = () => {
  console.log(`我是div 被点击了`);
};
const onButtonCLick = () => {
  console.log(`我是button 被点击了`);
};
function genSthClickListener(type) {
  return function onClick() {
    console.log(`type`, type);
  };
}
</script>

<template>
  <div class="row">
    <div @click="onDivClick">
      非 button 点击
    </div>
    <v-btn @click="onButtonCLick">
      v-button
    </v-btn>
    <button
      type="button"
      @click="onButtonCLick"
    >
      button
    </button>
    <input
      type="button"
      value="inputbutton"
      @click="onButtonCLick"
    >
  </div>
</template>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-direction: column;
  gap: 5;
}
</style>

<!--
* @FileDescription: 该文件的描述信息
* @Date: 2022年05月25日 13:52:14
* TODO:
* [] 
-->

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  bgColor: {
    type: String,
    default: "blue",
  },
  color: {
    type: String,
    default: "black",
  },
  width: {
    type: Number,
    default: 100,
  },
  speed: {
    type: Number,
    default: 2,
  },
});
const textDom = ref(null);
onMounted(() => {
  $log.debug("textDom", textDom.value.style);
});
function getTextWidth(text) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = "16px Arial";
  // 不够准，请参考 https://www.zhihu.com/question/30970158
  // context.fillText(text, 0, 0);
  // const value = context.getImageData(0, 0, 1, 1)
  const value = context.measureText(text).width;
  return value;
}
const textWidth = computed(() => {
  return getTextWidth(props.text);
});
const animationRange = computed(() => {
  return (textWidth.value / props.width) * 100 + 1; // +1 为了确保更大
});
</script>

<template>
  {{ animationRange }}
  <div
    ref="textDom"
    class="scroll-text truncate"
    :style="{
      // '--background-color': bgColor, // 背景色
      width: width + 'px', // 宽度
      '--text-color': color, // 文字颜色
      '--animation-speed': `${speed}s`, // 速度
      '--animation-direction': ' ', // 方向
      '--animation-range': `${animationRange}%`, // 幅度
    }"
    :data-content="text"
    :title="text"
  >
    {{ text }}
  </div>
</template>

<style lang="scss" scoped>
.scroll-text {
  transform-origin: center;
  position: relative;
  font: 16px Arial;
  color: rgba(0, 0, 0, 0);
  &::before {
    color: var(--text-color);
    background-color: var(--background-color);
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    animation: var(--animation-speed) scroll-text-before linear infinite normal;
    content: attr(data-content);
  }
  &::after {
    color: var(--text-color);
    background-color: var(--background-color);
    animation: var(--animation-speed) scroll-text-after linear infinite normal;
    content: attr(data-content);
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
  }
}
@keyframes scroll-text-before {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-1 * var(--animation-range)));
  }
}
@keyframes scroll-text-after {
  0% {
    transform: translateX(var(--animation-range));
  }
  100% {
    transform: translateX(0%);
  }
}
</style>

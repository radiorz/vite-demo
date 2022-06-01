<!--
* @FileDescription: 侧边栏样式
* @Date: 2022年05月23日 14:31:02
* TODO:
* [] 
-->

<script>
export default {
  name: "RouteItem",
};
</script>
<script setup>
import { ElMenuItem, ElSubMenu } from "element-plus/es";
import { makeWholePath } from "~/utils/route";
const props = defineProps({
  father: {
    type: Object,
    default: () => ({}),
  },
  level: {
    type: Number,
    default: 0,
  },
  data: { type: Object, default: () => ({}) },
});
// 有无fatherrouteIndex
const hasFatherRoutePath = computed(() => {
  return !!(props.father && props.father.routePath);
});
// 有无chidren
const hasChildren = computed(() => {
  return !!(props.data.children && props.data.children.length > 0);
});
const linkData = computed(() => {
  return {
    ...props.data,
    routePath: hasFatherRoutePath.value
      ? makeWholePath(props.data.path, props.father.routePath)
      : props.data.path,
    children: props.data.children?.map((item, index) => {
      return { ...item, index };
    }),
  };
});
const itemComponent = computed(() => {
  return hasChildren.value ? ElSubMenu : ElMenuItem;
});
</script>

<template>
  <component
    :index="linkData.routePath"
    :is="itemComponent"
    :class="['RouteItem']"
  >
    <template #title>
      <!-- {{ father.routeIndex }} -->
      <div class="flex flex-col items-start justify-center">
        <span class="text-xl">{{ data.name }}</span>
        <span>{{ linkData.routePath }}</span>
      </div>
    </template>
    <template v-if="hasChildren">
      <!-- data.children.length{{ data.children.length }} -->
      <route-item
        :level="level + 1"
        v-for="(childItem, index) in linkData.children"
        :father="linkData"
        :data="childItem"
        :key="index"
      ></route-item>
    </template>
  </component>
</template>

<style lang="scss" scoped></style>

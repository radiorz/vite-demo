/**
 * @file: 图片懒加载
 * TODO:
 * - 图片加载失败错误提示
 * - 图片加载占位符（加载中）
 * -
 */
import { useIntersectionObserver } from "@vueuse/core";
const directive = {
  mounted(el, binding) {
    const { stop } = useIntersectionObserver(
      el,
      ([{ isIntersecting }, observerElement]) => {
        if (isIntersecting) {
          $log.info("图片被看到");
          // binding.value(observerElement);
          el.src = binding.value;
        }
      }
    );
  },
};

export default directive;

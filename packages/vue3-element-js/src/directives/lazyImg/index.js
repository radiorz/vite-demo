import { useIntersectionObserver } from "@vueuse/core";
const directive = {
  mounted(el, binding) {
    const { stop } = useIntersectionObserver(
      el,
      ([{ isIntersecting }, observerElement]) => {
        if (isIntersecting) {
          // binding.value(observerElement);
          el.src = binding.value;
        }
      }
    );
  },
};

export default directive;

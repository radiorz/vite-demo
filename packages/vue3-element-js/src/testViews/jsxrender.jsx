import { defineComponent } from "vue";
export default defineComponent({
  name: "js-node",
  setup() {
    // return () => h("div", [], "jsx render");
    return () => (<div> this is jsxNode </div>);
  },
});

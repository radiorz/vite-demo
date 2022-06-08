import { defineComponent, defineProps } from "vue";
import FieldManager from "./index";
export default defineComponent({
  name: "object-manager",
  components: {
    FieldManager,
  },
  props: {
    schema: {
      type: Object,
      default: () => ({}),
    },
  },
  created(){
    // 此处导入 field-manager
  },
  setup({ schema }) {
    return () => (
      <>
        {!(typeof schema.properties === "object")
          ? null
          : Object.entries(schema.properties).map(([key, value]) => {
              console.log(value);
              return <field-manager schema={value}></field-manager>;
            })}
      </>
    );
  },
});

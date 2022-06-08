import { defineComponent, defineAsyncComponent, computed } from "vue";
export default defineComponent({
  name: "field-manager",
  components: {},
  props: {
    schema: {
      type: Object,
      default: () => ({}),
    },
    data: {
      type: [Object, String],
      default: () => ({}),
    },
  },
  computed: {},
  setup({ schema, data }) {
    let { widget } = schema;
    if (!widget) widget = "text-field";
    const asyncFieldComponent = defineAsyncComponent(() =>
      import(`../widget/${widget}.vue`)
    );

    return () => (
      <>
        {data}
        {schema?.type === "object" ? (
          Object.entries(schema.properties).map(([key, value]) => {
            return (
              <field-manager
                v-model={data[key]}
                schema={{ ...value, name: key }}
              ></field-manager>
            );
          })
        ) : schema?.type === "array" ? (
          <array-manager />
        ) : (
          <>
            <label htmlFor="">{schema?.name}</label>
            <asyncFieldComponent v-model={data} />
          </>
        )}
      </>
    );
  },
});

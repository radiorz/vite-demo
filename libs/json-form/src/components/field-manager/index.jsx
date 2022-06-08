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
    },
  },
  computed: {},
  setup({ schema, data }) {
    let { widget } = schema;
    if (!widget) widget = "text-field";
    // 设置 data基础值
    if (!data) {
      if (schema?.type === "object") {
        data = reactive({});
      } else if (schema?.type === "string") {
        data = "";
      }
    }
    const widgets = import.meta.glob("../widget/*.vue");
    console.log(widgets);
    const asyncFieldComponent = defineAsyncComponent(
      widgets[`../widget/${widget}.vue`]
    );

    return () => (
      <>
        {data}
        {schema?.type === "object" ? (
          Object.entries(schema.properties).map(([key, value]) => {
            return (
              <>
                <>{data}</>
                <field-manager
                  v-model={data[key]}
                  schema={{ ...value, name: key }}
                ></field-manager>
              </>
            );
          })
        ) : schema?.type === "array" ? (
          <array-manager />
        ) : (
          <>
            <label htmlFor="">{schema?.name}</label>
            {typeof data}
            <input value={data} onInput={(e) => data === e.target.value} />
          </>
        )}
      </>
    );
  },
});

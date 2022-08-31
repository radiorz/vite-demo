import { defineComponent, defineAsyncComponent } from "vue";
export default defineComponent({
  name: "field-manager",
  components: {},
  props: {
    schema: {
      type: Object,
      default: () => ({}),
    },
    modelValue: {
      type: [Object, String],
    },
  },
  computed: {},
  setup(props, { emit }) {
    const { schema, modelValue } = toRef(props);
    let { widget } = schema.value;
    if (!widget) widget = "text-field";
    // 设置 data基础值
    if (!modelValue.value) {
      if (schema?.type === "object") {
        modelValue.value = {};
      } else if (schema?.type === "string") {
        modelValue.value = "123";
      }
    }
    const widgets = import.meta.glob("../widget/*.vue");
    console.log(widgets);
    const asyncFieldComponent = defineAsyncComponent(
      widgets[`../widget/${widget}.vue`]
    );
    const onInput = (e) => {
      console.log("onInput", e.target.value);
      emit("update:modelValue", e.target.value);
    };
    return () => (
      <>
        {modelValue.value}
        {schema?.type === "object" ? (
          Object.entries(schema.properties).map(([key, value]) => {
            return (
              <>
                <>{modelValue}</>
                <field-manager
                  v-model={modelValue.value[key]}
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
            {typeof modelValue.value}
            {modelValue.value}
            <input value={modelValue.value} onInput={onInput} />
          </>
        )}
      </>
    );
  },
});

import { openBlock, createElementBlock } from "vue";
function withInstall(component, options) {
  component.install = (app) => app.component(component.name || options.name, component);
  return component;
}
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  name: "json-form"
};
const _hoisted_1 = { class: "json-form" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, "\u6211\u662Fjsonform\u563F\u563F\u563F");
}
var TheJsonForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const JsonForm = withInstall(TheJsonForm);
export { JsonForm, JsonForm as default };

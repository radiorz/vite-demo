import { PREFIX } from "./constant";

export function withInstall(component, options) {
  component.install = (app) =>
    app.component(component.name || options.name, component);
  return component;
}

export function withPrefix(name) {
  return `${PREFIX}-${name}`;
}

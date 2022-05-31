export const namedRouteWithPrefix = (routeName, prefix) =>
  `${prefix}-${routeName}`;

export const makeRoute = (path, name, component) => ({
  path,
  name,
  component,
});

export const makeWholePath = (path, fatherPath) => {
  return [...fatherPath.split("/"), path].join("/");
};

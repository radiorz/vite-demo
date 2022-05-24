export const namedWithTest = (routeName) => `Test${routeName}`;

export const makeRoute = (path, name, component) => ({
  path,
  name,
  component,
});

export const makeWholePath = (path, fatherPath) => {
  return [...fatherPath.split("/"), path].join("/");
};

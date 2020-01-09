export const isLoaded = (condition, component) => {
  if (condition) {
    return component;
  }
  return null;
};

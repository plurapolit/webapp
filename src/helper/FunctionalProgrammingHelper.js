export const pipe = (...functions) => (value) => functions.reduce(
  (currentValue, currentFunction) => currentFunction(currentValue), value,
);

export const createFunction = (func) => {
  const newFunction = (value) => {
    if (func && value) return func(value);
    if (func) return func();
    return value;
  };
  return newFunction;
};

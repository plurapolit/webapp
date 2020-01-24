export const isLoaded = (condition, resolve, reject = null) => {
  if (condition) {
    return resolve;
  }
  return reject;
};

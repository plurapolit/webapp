export const isLoaded = (condition, resolve, reject = null) => {
  if (condition) {
    return resolve;
  }
  return reject;
};

export const getDataFromEvent = (event) => {
  event.preventDefault();
  const data = {};
  const formElements = Array.from(event.target);
  formElements.forEach((input) => {
    if (input.type !== 'submit') {
      data[input.name] = input.value;
    }
  });
  return data;
};

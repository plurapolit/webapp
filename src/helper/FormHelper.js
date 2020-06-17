export const getDataFromEvent = (event) => {
  // TODO: remove preventDefault
  event.preventDefault();
  const data = {};
  const formElements = Array.from(event.target);
  formElements.forEach((input) => {
    if (input.type !== "submit") {
      data[input.name] = input.value;
    }
  });
  return data;
};

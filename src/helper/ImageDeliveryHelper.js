const ImgixApiUrlParameters = (width) => {
  if (width) return `?auto=compress&q=75&w=${width}`;
  return "?auto=compress&q=75";
};

export { ImgixApiUrlParameters };

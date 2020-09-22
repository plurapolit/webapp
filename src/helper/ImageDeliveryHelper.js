const ImgixApiUrlParameters = (width) => {
  if (width) return `?w=${width}`;
  return "";
};

export { ImgixApiUrlParameters };

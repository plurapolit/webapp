const ImgixApiUrlParameters = (width) => {
  if (width) return `?auto=compress&w=${width}`;
  return "?auto=compress";
};

export { ImgixApiUrlParameters };

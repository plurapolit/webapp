import { pipe } from "./FunctionalProgrammingHelper";

export const toLowerCase = (string) => string.toLowerCase();
export const replaceWhiteSpace = (string) => string.replace(" ", "-");
export const getAnchorFromName = (name) => {
  const anchorTag = pipe(
    toLowerCase,
    replaceWhiteSpace,
  )(name);
  return anchorTag;
};

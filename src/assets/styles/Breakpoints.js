const Breakpoints = {
  xs: 470,
  sm: 550,
  md: 960,
  lg: 1280,
  xl: 1920,
};

export const cssMinBreakpoint = (value) => `@media(min-width: ${value}px)`;

export const cssMaxBreakpoint = (value) => `@media(max-width: ${value}px)`;

export default Breakpoints;

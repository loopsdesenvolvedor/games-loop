type Breakpoints = {
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

export const BreakpointsSizes: Breakpoints = {
  sm: 756,
  md: 768,
  lg: 992,
  xl: 1440,
};

export const breakAt = (size: number) => `@media (min-width: ${size}px)`;

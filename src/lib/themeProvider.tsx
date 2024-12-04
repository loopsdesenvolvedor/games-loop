"use client";

import { ReactNode } from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

type StyledProviderProps = {
  children: ReactNode;
};

const theme = {};

const ThemeProvider = ({ children }: StyledProviderProps) => {
  return <StyledProvider theme={theme}>{children}</StyledProvider>;
};

export default ThemeProvider;

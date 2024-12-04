"use client";

import { ReactNode } from "react";
import { ThemeProvider as StyledProvider } from "styled-components";
import theme from "@/styles/theme";

type StyledProviderProps = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: StyledProviderProps) => {
  return <StyledProvider theme={theme}>{children}</StyledProvider>;
};

export default ThemeProvider;

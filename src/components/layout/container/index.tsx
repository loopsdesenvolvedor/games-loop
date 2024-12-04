"use client";

import { ReactNode } from "react";
import styled from "styled-components";
import { BreakpointsSizes, breakAt } from "@/styles/BreakPointsSizes";

type ContainerProps = {
  children: ReactNode;
};

const Root = styled.div`
  width: 100%;
  height: auto;
  padding: 0 2rem;

  ${breakAt(BreakpointsSizes.xl)} {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0;
  }
`;

const Container = ({ children }: ContainerProps) => {
  return <Root>{children}</Root>;
};

export default Container;

import { ReactNode } from "react";
import styled from "styled-components";
import { breakAt, BreakpointsSizes } from "@/styles/BreakPointsSizes";

type ContainerProps = {
  children: ReactNode;
};

const Root = styled.div`
  width: 100%;
  height: auto;
  padding: 0 2rem;
  margin: 0 auto;

  ${breakAt(BreakpointsSizes.md)} {
    max-width: 1140px;
    padding: 0 1rem;
  }
`;

const Container = ({ children }: ContainerProps) => {
  return <Root>{children}</Root>;
};

export default Container;

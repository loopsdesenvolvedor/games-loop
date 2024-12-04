"use client";

import styled from "styled-components";
import Container from "@/components/layout/container";
import Logo from "@/components/shared/logo";
import Link from "next/link";

const Root = styled.header`
  width: 100%;
  height: auto;
  background-color: ${(props) => props.theme.colors.default.primary};
`;
const Content = styled.header`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  return (
    <Root>
      <Container>
        <Content>
          <Link href="/">
            <Logo width="96" height="42" />
          </Link>
        </Content>
      </Container>
    </Root>
  );
};

export default Header;

"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import { IoMenu } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoAlertCircleOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";

import ButtomWithIcom from "../buttonWithIcon";
import Container from "../container";
import Input from "../input";

import Logo from "@/assets/logo.svg";
import { breakAt, BreakpointsSizes } from "@/styles/BreakPointsSizes";

const Root = styled.header`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.default.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.default.border};
`;

const Content = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${breakAt(BreakpointsSizes.md)} {
    height: 8rem;
  }
`;

const ContentLeft = styled.div`
  width: 35%;
  max-width: 14rem;
  display: flex;
  justify-content: space-between;
`;

const ContentRight = styled.div`
  width: 56%;
  max-width: 21.4rem;
  display: flex;
  display: flex;
  justify-content: space-between;

  ${breakAt(BreakpointsSizes.md)} {
    justify-content: flex-end;
    gap: 3rem;
    button:nth-child(1) {
      order: 1;
    }
    button:nth-child(2) {
      order: 1;
    }
    button:nth-child(2) {
      display: none;
    }
  }
`;

const FormContent = styled.form`
  width: 43rem;
  height: 4rem;
  display: none;
  position: relative;
  border-top-right-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;

  div.icon-left {
    width: 4.4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.default.backgroundRed};
    cursor: pointer;
    border-top-left-radius: 0.4rem;
    border-bottom-left-radius: 0.4rem;
  }

  div.icon-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    right: 0.5rem;
    top: 0;
    bottom: 0;
    margin: auto 0;
    opacity: 0.8;
  }

  ${breakAt(BreakpointsSizes.md)} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Notification = styled.div`
  width: 3.6rem;
  height: 3.6rem;
  position: relative;
  display: flex;

  span {
    width: 2.2rem;
    height: 2.2rem;
    top: -0.6rem;
    right: -0.6rem;
    position: absolute;
    color: ${({ theme }) => theme.colors.default.text};
    background-color: ${({ theme }) => theme.colors.default.backgroundRed};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 1.2rem;
  }
`;

const Header = () => {
  return (
    <Root>
      <Container>
        <Content>
          <ContentLeft>
            <ButtomWithIcom $icon={<IoMenu size={30} color="#fff" />} />
            <Link href="/">
              <Image src={Logo} alt="Logo Games Loop" priority quality={100} />
            </Link>
          </ContentLeft>
          <FormContent>
            <div className="icon-left" role="button" tabIndex={0}>
              <ButtomWithIcom
                $icon={<BiCategory color="#fff" size={16} />}
                type="button"
              />
            </div>

            <Input type="text" name="search" placeholder="Busque seu jogo..." />

            <div className="icon-right">
              <ButtomWithIcom $icon={<FiSearch size={16} color="#fff" />} />
            </div>
          </FormContent>
          <ContentRight>
            <ButtomWithIcom
              $icon={<IoAlertCircleOutline size={16} color="#0C0E0F" />}
              $text="Entrar"
            />

            <ButtomWithIcom $icon={<FiSearch size={22} color="#fff" />} />
            <Notification>
              <ButtomWithIcom
                $icon={<MdOutlineShoppingCart size={22} color="#fff" />}
              />
              <span>0</span>
            </Notification>
          </ContentRight>
        </Content>
      </Container>
    </Root>
  );
};

export default Header;

import { ReactNode } from "react";
import styled from "styled-components";

type ButtomWithIcomProps = {
  $text?: string;
  $icon?: ReactNode;
  type?: "button" | "submit" | "reset";
};

const Root = styled.button<ButtomWithIcomProps>`
  border: 0;
  font-weight: 400;
  cursor: pointer;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${({ $text, $icon, theme }) =>
    $text && $icon
      ? `
      width: 8.2rem;
      height: 3.4rem;  
      background-color: ${theme.colors.default.text}; 
      color:${theme.colors.default.primary}; 
      border-radius: 1.6rem;
      display:flex;
      justify-content:center;
      align-items:center;
      gap:.4rem;
      font-weight: 600;
      font-size: 1.4rem;
      transition: all .3s ease;

      &:hover{
        background-color: ${theme.colors.default.backgroundYellow}; 
      }
      `
      : `background-color: transparent;`}
`;

const ButtomWithIcom = ({ $text, $icon, type }: ButtomWithIcomProps) => {
  return (
    <Root $text={$text} $icon={$icon} type={type}>
      <div>{$icon}</div>
      {$text && <span>{$text}</span>}
    </Root>
  );
};

export default ButtomWithIcom;

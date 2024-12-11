"use client";

import { createGlobalStyle } from "styled-components";
import { css } from "styled-components";

const GlobalStyle = createGlobalStyle`
   html{
    font-family: 'Poppins', sans-serif;
    font-size: 62.5%;
    font-weight: 300;
    box-sizing: border-box;
    border: 0;
   }

   *,::before,*::after{
    box-sizing: inherit;
   }

 body{
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;

    ${({ theme }) => css`
      background-color: ${theme.colors.default.primary};
    `}
 }
`;

export default GlobalStyle;

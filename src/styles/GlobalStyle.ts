"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   html{
    font-family: 'Poppins', sans-serif;
    font-size: 62.5%;
    font-weight: 300;
    box-sizing: border-box;
   }

   *,::before,*::after{
    box-sizing: inherit;
   }

   body{
    border: 0;
    padding: 0;
   }
`;

export default GlobalStyle;

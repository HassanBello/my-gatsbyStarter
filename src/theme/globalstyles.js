import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import "tailwindcss/base";

@import "tailwindcss/components";

@import "tailwindcss/utilities";

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  *{
    font-family: 'Montserrat', sans-serif;
  }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0;
    transition: background 0.5s linear, color 0.5s linear;
  }
`;

export default GlobalStyle;
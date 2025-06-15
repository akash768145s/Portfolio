import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  @font-face {
    font-family: 'Satoshi';
    src: url('/fonts/Satoshi-Regular.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Satoshi';
    src: url('/fonts/Satoshi-Medium.otf') format('opentype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Satoshi';
    src: url('/fonts/Satoshi-Bold.otf') format('opentype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Satoshi';
    src: url('/fonts/Satoshi-Black.otf') format('opentype');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Satoshi';
    src: url('/fonts/Satoshi-Italic.otf') format('opentype');
    font-weight: 400;
    font-style: italic;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: 'Satoshi', sans-serif;
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: 'Satoshi', sans-serif;
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`;

export default GlobalStyles;
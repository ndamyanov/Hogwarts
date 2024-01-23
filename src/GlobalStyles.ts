import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
--color-main: #008b8b;
}

body {
    margin: 0;
    /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif; */
    font-family: 'Edwardian Script ITC', cursive;
    font-size: 2em;
    /* Other global styles */
  }
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export default GlobalStyles;
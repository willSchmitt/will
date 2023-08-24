import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
    font-family: 'DM Sans', sans-serif;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  ul {
    list-style: none;
  }
  button {
    background: none;
    border: 0;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
`;

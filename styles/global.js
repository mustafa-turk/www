import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap');

  * {
    box-sizing: border-box;
  }
  html {
    font-family: ui-sans-serif, system-ui, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
  }
  body {
    animation: fadeIn ease 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  @keyframes fadeIn {
    0% { opacity: 0 }
    100% { opacity: 1 }
  }
  h1,
  h2,
  h3,
  body,
  p,
  a {
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
  ul {
    padding-inline-start: 20px;
  }
  hr {
    border-top: 1px solid #EAEAEA;
  }
  h1 {
    font-size: 28px;
  }
`;

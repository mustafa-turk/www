import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    color: white;
  }
  html {
    font-family: "Inter"
  }
  body {
    animation: fadeIn ease 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    background: #020104;
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
    cursor: pointer;
  }
`;

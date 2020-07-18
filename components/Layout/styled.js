import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    font-family: "Helvetica Neue", sans-serif;
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
  ::selection {
    background: #79FFE1;
  }
`;

export const Layout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
`;

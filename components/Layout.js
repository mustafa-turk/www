import styled, { createGlobalStyle } from 'styled-components'
import Head from 'next/head'

function Layout({ pageName, children }) {
  return (
    <Wrapper>
      <GlobalStyle />
      <Head>
        <title>{pageName}</title>
      </Head>
      {children}
    </Wrapper>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    font-family: "Inter", sans-serif;
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
  p,
  body,
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
  h1 {
    font-size: 64px;
    font-weight: 700;
    line-height: 63px;
    @media (max-width: 900px) {
      letter-spacing: normal;
      font-size: 42px;
      line-height: 43px;
    }
  }
  ::selection {
    background: #79FFE1;
  }

`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 40px auto 0 auto;
  padding: 10px;
  @media (max-width: 500px) {
    margin: 40px auto 0 auto;
  }
`

export { Layout }

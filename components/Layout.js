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
    font-weight: 600;
    line-height: 63px;
    font-size: 28px;
    @media (max-width: 900px) {
      letter-spacing: normal;
      line-height: 43px;
    }
  }
  ::selection {
    background: #79FFE1;
  }

`;

const Wrapper = styled.div`
  max-width: 600px;
  height: 100vh;
  justify-content: center;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 10px;
`

export { Layout }

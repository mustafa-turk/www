import styled, { createGlobalStyle } from 'styled-components'
import withGA from 'next-ga'
import Head from 'next/head'
import Router from 'next/router'

import Header from '../components/Header'
import Footer from '../components/Footer'
import ContentBlock from '../components/ContentBlock'

function IndexPage() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Head>
        <title>Mustafa Türk — Hello World</title>
      </Head>
      <Header />
      <Content>
        <ContentBlock
          title='code-box'
          description='A web app where you can share code snippets with others.'
          image='/1.jpg'
          tags={[
            {
              name: 'View demo',
              url: 'https://code-box.now.sh'
            },
            {
              name: 'View on Github',
              url: 'https://github.com/mustafa-turk/code-box'
            }
          ]}
        />

        <ContentBlock
          title='react-native-awesome-select'
          description='A multiselect component with zero dependencies.'
          image='/2.jpg'
          tags={[
            {
              name: 'View on Github',
              url: 'https://github.com/mustafa-turk/react-native-awesome-select'
            },
            {
              name: 'View on NPM',
              url: 'https://www.npmjs.com/package/react-native-awesome-select'
            }
          ]}
        />
      </Content>
      <Footer />
    </Wrapper>
  );
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
    margin-right: 10px;
    cursor: pointer;
  }
  h1 {
    font-size: 34px;
    font-weight: 500;
  }
  ::selection {
    background: #79FFE1;
  }
  @media (max-width: 900px) {
    h1 {
      font-size: 29px;
    }
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

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    display: block;
  }
`

export default withGA('UA-154421172-1', Router)(IndexPage)

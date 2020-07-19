import React from 'react'
import { Layout, Header, Card } from "../components"
import styled from "styled-components"

export default function HomePage() {
  return (
    <Layout pageName='Hello world — Mustafa Türk'>
      <Header />
      <Content>
        <Card
          title="kopy"
          description="Clipboard application for macOS built with Electron.js and React.js"
          image="/work/1.jpg"
          url="http://github.com/mustafa-turk/kopy" />
        <Card
          title="code-box"
          description="A web app where you can share code snippets with others"
          image="/work/2.jpg"
          url="http://github.com/mustafa-turk/code-box" />
        <Card
          title="eksi-scraper"
          description="API endpoint that will return a random entry from Eksi Sözlük"
          image="/work/4.jpg"
          url="http://github.com/mustafa-turk/eksi-scraper" />
        <Card
          title="react-native-awesome-select"
          description="A dead simple multiselect component for React Native"
          image="/work/3.jpg"
          url="http://github.com/mustafa-turk/react-native-awesome-select" />
      </Content>
    </Layout>
  );
}

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  @media (max-width: 768px) {
    display: block;
  }
`;
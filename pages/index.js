import React from 'react'
import { Layout, Header, Card } from "../components"
import styled from "styled-components"

export default function HomePage() {
  return (
    <Layout pageName='Hello world — Mustafa Türk'>
      <Header />
      <Content>
        <Card
          title="kodebox"
          description="Web app where you can share code snippets with others"
          image="/work/2.jpg"
          url="http://github.com/mustafa-turk/kodebox" />
        <Card
          title="react-native-awesome-select"
          description="Dead simple multiselect component for React Native"
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
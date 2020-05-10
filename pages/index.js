import styled from 'styled-components'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContentBlock from '../components/ContentBlock'

import content from '../content';

export default function IndexPage() {
  return (
    <Layout pageName='Hello world — Mustafa Türk'>
      <Header />
      <Content>
        { content.map((contentItemProps, index) => <ContentBlock {...contentItemProps } index={index} />) }
      </Content>
      <Footer />
    </Layout>
  );
}

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    display: block;
  }
`
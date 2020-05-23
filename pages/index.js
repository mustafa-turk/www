import styled from 'styled-components'
import { ContentBlock, Header, Layout, Footer } from '../components'
import content from '../content'

function IndexPage() {
  return (
    <Layout pageName='Hello world — Mustafa Türk'>
      <Header />
      <Content>
        {content.map((contentItemProps, index) => <ContentBlock {...contentItemProps} index={index} key={index} />)}
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

export default IndexPage;
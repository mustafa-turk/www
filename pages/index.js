import styled from 'styled-components'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContentBlock from '../components/ContentBlock'

export default function IndexPage() {
  return (
    <Layout pageName='Hello world — Mustafa Türk'>
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
    </Layout>
  );
}

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    display: block;
  }
`
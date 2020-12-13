import styled from 'styled-components';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Card from '../components/Card';

export default function HomePage() {
  return (
    <Layout pageName="Hello world — Mustafa Türk">
      <Header />
      <Content>
        <Card
          title="react-native-awesome-select"
          description="Dead simple multiselect component for React Native"
          image="/work/3.jpg"
          url="http://github.com/mustafa-turk/react-native-awesome-select"
        />
        <Card
          title="bookmarks"
          description="Web app where you can share bookmarks with others"
          image="/work/2.jpg"
          url="http://github.com/mustafa-turk/bookmarks"
        />
      </Content>
    </Layout>
  );
}

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  @media (max-width: 768px) {
    margin-top: 20px;
    display: block;
  }
`;

import styled from 'styled-components';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Card from '../components/Card';
import works from '../content/works.json';

export default function HomePage() {
  return (
    <Layout pageName="Hello world — Mustafa Türk">
      <Header />
      <Content>
        {works.map((cardProps, i) => (
          <Card {...cardProps} key={i} />
        ))}
      </Content>
    </Layout>
  );
}

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  @media (max-width: 600px) {
    margin-top: 30px;
    display: block;
  }
`;

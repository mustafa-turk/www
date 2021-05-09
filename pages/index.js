import styled from 'styled-components';
import Layout from 'components/common/Layout';
import { Header, HeaderTitle, HeaderSubtitle } from 'components/common/PageHeader';
import Card from 'components/home/Card';
import works from 'content/works.json';
import Spacer from 'components/common/Spacer';

export default function HomePage() {
  return (
    <Layout pageName="Mustafa Türk - Hello World">
      <Header>
        <HeaderTitle>Mustafa Türk</HeaderTitle>
        <Spacer top="10px" />
        <HeaderSubtitle>
          Software Engineer with a soft spot for user interfaces.<br />
          Currently building products at{' '}
          <Link url="https://skryv.com" color="#007AFF">
            Skryv
          </Link>
          .
        </HeaderSubtitle>
      </Header>
      <Spacer top="40px" />
      <PageContent>
        {works.map((cardProps, i) => (
          <Card {...cardProps} key={i} />
        ))}
      </PageContent>
    </Layout>
  );
}

const PageContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    display: block;
  }
`;

const Link = styled.a`
  color: ${(props) => props.color};
  font-size: inherit;
  transition: 0.5s ease;
  margin-left: ${(props) => (props.hasMargin ? '30px' : null)};
  &:hover {
    text-decoration: underline;
  }
`;

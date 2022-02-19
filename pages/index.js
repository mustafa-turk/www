import styled from 'styled-components';
import Layout from 'components/Layout';
import List from 'components/List';
import Divider from 'components/Divider';
import works from 'content/works.json';
import { getBookmarks } from 'lib/raindrop';

export default function HomePage({ bookmarks }) {
  return (
    <Layout pageName="Mustafa Türk - Hello World">
      <Header>Mustafa Türk</Header>
      <Main>
        <Description>Software Engineer at Box, Amsterdam</Description>
        <Description isPast>Software Engineer at Skryv, Brussels</Description>
      </Main>
      <Divider size={4} />
      <Section>
        <SectionTitle>Projects</SectionTitle>
        <List items={works} />
      </Section>
      <Divider size={2} />
      <Section>
        <SectionTitle>Bookmarks</SectionTitle>
        <List items={bookmarks} />
      </Section>
      <Footer>
        <Link href="https://www.github.com/mustafa-turk" target="_blank" rel="noopener noreferrer">
          Github
        </Link>
        <Link
          href="https://www.linkedin.com/in/mustafa-t%C3%BCrk-92b363171/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
      </Footer>
    </Layout>
  );
}

export async function getServerSideProps() {
  const bookmarks = await getBookmarks();
  return {
    props: {
      bookmarks,
    },
  };
}

const Header = styled.header`
  display: inline;
  font-weight: 800;
  font-size: 28px;
  margin-bottom: 10px;
`;

const Main = styled.main`
  font-weight: 600;
  font-size: 18px;
  width: 400px;
`;

const Description = styled.div`
  display: inline-box;
  position: relative;
  opacity: ${(p) => (p.isPast ? '0.3' : '1')};
  z-index: 0;
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: -3%;
    width: 106%;
    height: ${(p) => (p.isPast ? '2px' : '0')};
    background: #000;
    z-index: -1;
  }
`;

const Link = styled.a`
  color: #141414;
  transition: all 0.4s ease;
  padding: 3px;
  border-radius: 3px;
  &:hover {
    background-color: #eaeaea;
  }
`;

const Footer = styled.footer`
  display: flex;
  gap: 10px;
  border-top: 1px dashed #b3b3b3;
  padding-top: 10px;
  font-size: 14px;
  margin-top: 60px;
`;

const Section = styled.section``;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
`;

import { getBookmarks } from 'lib/raindrop';
import Layout from 'components/Layout';
import List from 'components/List';
import Spacer from 'components/Spacer';
import works from 'content/works.json';
import styled from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function HomePage({ bookmarks }) {
  return (
    <Layout pageName="Mustafa Türk - Hello World">
      <Header>
        <h1>Mustafa Türk</h1>
        <p>
          Software Engineer with a soft spot for user interfaces.
          <br />
          Currently building products at Skryv.
        </p>
        <Links>
          <a href="https://www.github.com/mustafa-turk" target="_blank" rel="noopener noreferrer">
            <FaGithub size="20" />
          </a>
          <a
            href="https://www.linkedin.com/in/mustafa-t%C3%BCrk-92b363171/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size="20" />
          </a>
        </Links>
      </Header>

      <Spacer size="40px" />

      <Title>Projects</Title>
      <Spacer size="10px" />
      <List items={works} />

      <Spacer size="30px" />

      <Title>Bookmarks</Title>
      <Spacer size="10px" />

      <List items={bookmarks} />
    </Layout>
  );
}

const Header = styled.div`
  margin: 50px 0 0 15px;
  color: #ecedee;
  @media (max-width: 768px) {
    margin: 15px 0 0 15px;
  }
  h1 {
    margin-bottom: 10px;
  }
  p {
    font-size: 20px;
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
`;

const Title = styled.div`
  background: #241f3e;
  color: #988ef2;
  margin: 0 15px;
  display: inline-block;
  font-size: 16px;
  padding: 2px 5px;
  font-family: 'Roboto Mono', monospace;
  border-radius: 6px;
`;

const Links = styled.div`
  margin-top: 20px;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
  a {
    color: white;
    margin-right: 10px;
  }
`;

export async function getServerSideProps() {
  const bookmarks = await getBookmarks();
  return {
    props: {
      bookmarks,
    },
  };
}

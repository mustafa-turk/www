import { getBookmarks } from 'lib/raindrop';
import Layout from 'components/Layout';
import Heading from 'components/Heading';
import List from 'components/List';
import Spacer from 'components/Spacer';
import works from 'content/works.json';
import styled from 'styled-components';

export default function HomePage({ bookmarks }) {
  return (
    <Layout pageName="Mustafa Türk - Hello World">
      <Header>
        <h1>Mustafa Türk</h1>
        <p>Software Engineer with a soft spot for user interfaces.<br />Currently building products at Skryv.</p>
        <Links>
          <a href="https://www.github.com/mustafa-turk" target="_blank" rel="noopener">Github →</a>
          <a href="https://www.linkedin.com/in/mustafa-t%C3%BCrk-92b363171/" target="_blank" rel="noopener">LinkedIn →</a>
        </Links>
      </Header>

      <Spacer size="40px" />

      <Heading>Projects</Heading>
      <Spacer size="10px" />
      <List items={works} />

      <Spacer size="30px" />

      <Heading>Bookmarks</Heading>
      <Spacer size="10px" />
      <List items={bookmarks} />
    </Layout>
  );
}

const Header = styled.div`
  margin: 15px 0 0 15px;
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

const Links = styled.div`
  margin-top: 10px;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
  a {
    color: #007AFF;
    margin-right: 10px;
  }
`;

export async function getServerSideProps() {
  const bookmarks = await getBookmarks();
  return {
    props: {
      bookmarks
    }
  }
}

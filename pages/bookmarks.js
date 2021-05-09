import styled from 'styled-components';
import Layout from 'components/common/Layout';
import { getBookmarks } from 'lib/raindrop';
import { Header, HeaderSubtitle, HeaderTitle } from 'components/common/PageHeader';
import Spacer from 'components/common/Spacer';

export default function Bookmarks({ bookmarks }) {
  return (
    <Layout pageName="Mustafa Türk - Bookmarks">
      <Header>
        <HeaderTitle>Bookmarks</HeaderTitle>
        <HeaderSubtitle>
          Things saved for later
        </HeaderSubtitle>
      </Header>
      <Spacer top="50px" />
      {bookmarks.map((b) => (
        <Item href={b.link} target="_blank" rel="noopener">
          <Title>{b.title}</Title>
          <p>{b.excerpt}</p>
        </Item>
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
  const bookmarks = await getBookmarks();
  return {
    props: {
      bookmarks
    }
  }
}

const Item = styled.a`
  display: block;
  padding: 10px 15px;
  transition: 0.5s ease;
  &:hover {
    background: red;
    border-radius: 6px;
    background: #ECECEC;
  }
`

const Title = styled.p`
  font-weight: bold;
  font-size: 18px;
`
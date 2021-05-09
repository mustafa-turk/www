
import Layout from 'components/common/Layout';
import { getBookmarks } from 'lib/raindrop';
import { Header, HeaderSubtitle, HeaderTitle } from 'components/common/PageHeader';
import Spacer from 'components/common/Spacer';
import BookmarksList from 'components/bookmarks/BookmarksList';

export default function Bookmarks({ bookmarks }) {
  return (
    <Layout pageName="Mustafa Türk - Bookmarks">
      <Header>
        <HeaderTitle>Bookmarks</HeaderTitle>
        <Spacer top="10px" />
        <HeaderSubtitle>
          Interesting articles, websites and more
        </HeaderSubtitle>
      </Header>
      <Spacer top="30px" />
      <BookmarksList bookmarks={bookmarks} />
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


import Layout from 'components/common/Layout';
import { getBookmarks } from 'lib/raindrop';
import { Header, HeaderTitle } from 'components/common/PageHeader';
import Spacer from 'components/common/Spacer';
import BookmarksList from 'components/bookmarks/BookmarksList';

export default function Bookmarks({ bookmarks }) {
  return (
    <Layout pageName="Mustafa Türk - Bookmarks">
      <Header>
        <HeaderTitle>Bookmarks</HeaderTitle>
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


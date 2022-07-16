import Head from 'next/head';

import Header from 'components/Header';
import Layout from 'components/Layout';
import Section from 'components/Section';
import Link from 'components/Link';

import { getBookmarks } from 'api/raindrop';
import { getPosts } from 'api/posts';

export default function HomePage({ bookmarks, posts }) {
  return (
    <Layout className="gap-14">
      <Head>
        <title>Mustafa Türk - Hello World</title>
      </Head>

      <Header />

      <Section>
        <Section.Heading>
          Me
        </Section.Heading>
        <Section.Body>
          <span>
            I am a Software Engineer with a soft spot for user interfaces. <br />
            Currently based in Amsterdam, building <Link href="https://www.box.com/esignature" inline target="_blank">Box Sign</Link> at <Link href="https://www.box.com/home" inline target="_blank">Box</Link>.
          </span>
          <span>
            You can find me on <Link href="https://github.com/mustafa-turk" inline target="_blank">Github</Link> and <Link href="https://linkedin.com/in/mustafa-t%C3%BCrk-92b363171" target="_blank" inline>Linkedin</Link>.
          </span>
        </Section.Body>
      </Section>

      <Section>
        <Section.Heading>Recent endeavors</Section.Heading>
        <Section.Description>Things I build in my spare time</Section.Description>
        <Section.Body>
          <Link href="https://betterhackernews.com" target="_blank">Better Hacker News</Link>
          <Link href="https://github.com/mustafa-turk/www" target="_blank">Personal Website</Link>
        </Section.Body>
      </Section>

      <Section>
        <Section.Heading>Notes</Section.Heading>
        <Section.Description>Things I have found interesting and written as small notes</Section.Description>
        <Section.Body>
          {posts.map((post) => (
            <Link href={`/posts/${post.slug}`} key={post.title}>
              {post.title}
            </Link>
          ))}
        </Section.Body>
      </Section>

      <Section>
        <Section.Heading>Bookmarks</Section.Heading>
        <Section.Description>Things I found on the internet</Section.Description>
        <Section.Body>
          {bookmarks.map((bookmark) => (
            <Link href={bookmark.link} key={bookmark.title}>
              {bookmark.title}
            </Link>
          ))}
        </Section.Body>
      </Section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const bookmarks = await getBookmarks();

  const posts = getPosts();

  return {
    props: {
      bookmarks,
      posts
    },
  };
}

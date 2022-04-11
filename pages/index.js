import Head from 'next/head';

import Section from 'components/Section';
import Footer from 'components/Footer';
import Link from 'components/Link';

import { getBookmarks } from 'lib/raindrop';

export default function HomePage({ bookmarks }) {
  return (
    <div className="flex flex-col gap-16 max-w-xl p-5 mx-auto my-6 my-1">
      <Head>
        <title>Mustafa Türk - Hello World</title>
      </Head>

      <header>Mustafa Türk</header>

      <main className="flex flex-col gap-14">
        <Section>
          <Section.Heading>Me</Section.Heading>
          <Section.Body>
            <span>
              I am Mustafa, a Frontend Software Engineer at <Link href="https://box.com" inline>
                Box
              </Link>, currently living and working from
              Amsterdam. I have a soft spot for user interfaces and clean design.
            </span>
            <span>
              You can find me on <Link href="https://github.com/mustafa-turk" inline>
                Github
              </Link> and <Link href="https://linkedin.com/in/mustafa-t%C3%BCrk-92b363171" inline>
                Linkedin
              </Link>
              .
            </span>
          </Section.Body>
        </Section>

        <Section>
          <Section.Heading>Projects</Section.Heading>
          <Section.Description>Things I build in my spare time.</Section.Description>
          <Section.Body>
            <Link href="https://betterhackernews.com">Better Hacker News</Link>
          </Section.Body>
        </Section>

        <Section>
          <Section.Heading>Bookmarks</Section.Heading>
          <Section.Description>Things I found on the internet.</Section.Description>
          <Section.Body>
            {bookmarks.map((bookmark) => (
              <Link href={bookmark.link} key={bookmark.title}>
                {bookmark.title}
              </Link>
            ))}
          </Section.Body>
        </Section>
      </main>

      <Footer />
    </div>
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

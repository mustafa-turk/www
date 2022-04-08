import PageLayout from 'components/PageLayout';
import Section from 'components/Section';
import Footer from 'components/Footer';
import Spacer from 'components/Spacer';
import Link from 'components/Link';

import { getBookmarks } from 'lib/raindrop';

export default function HomePage({ bookmarks }) {
  return (
    <PageLayout title="Mustafa Türk - Hello World">
      <header>Mustafa Türk</header>

      <main>
        <Section>
          <Section.Heading>Me</Section.Heading>
          <Spacer size={18} />
          <Section.Body>
            <span>
              I am Mustafa, a Frontend Software Engineer at Box, currently living and working from
              Amsterdam. I have a soft spot for user interfaces and clean design.
            </span>
            <span>
              You can find me on{' '}
              <Link href="https://github.com/mustafa-turk" inline>
                Github
              </Link>{' '}
              and{' '}
              <Link href="https://linkedin.com/in/mustafa-t%C3%BCrk-92b363171" inline>
                Linkedin
              </Link>
              .
            </span>
          </Section.Body>
        </Section>

        <Section>
          <Section.Heading>Projects</Section.Heading>
          <Section.Description>Things I build in my spare time.</Section.Description>
          <Spacer size={18} />
          <Section.Body>
            <Link href="https://betterhackernews.com">Better Hacker News</Link>
          </Section.Body>
        </Section>

        <Section>
          <Section.Heading>Bookmarks</Section.Heading>
          <Section.Description>Things I found on the internet.</Section.Description>
          <Spacer size={18} />
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
    </PageLayout>
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

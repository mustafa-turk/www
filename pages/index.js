import Head from "next/head";

import Header from "components/Header";
import Layout from "components/Layout";
import Section from "components/Section";
import Link from "components/Link";
import { TimelineEvent } from "components/Timeline";

import { getBookmarks } from "api/raindrop";
import { getPosts } from "api/posts";

export default function HomePage({ bookmarks, posts }) {
  function linkify(href, description) {
    return (
      <Link href={href} inline target='_blank'>
        {description}
      </Link>
    );
  }

  return (
    <Layout className='gap-14'>
      <Head>
        <title>Mustafa Türk - Hello World</title>
      </Head>

      <main className='grid divide-y divide-neutral-800'>
        <div className='py-6'>
          <TimelineEvent active>
            <TimelineEvent.Title>Currently</TimelineEvent.Title>
            <TimelineEvent.Description>
              Software Engineer at {linkify("https://www.box.com/home", "Box")},
              Amsterdam. Building{" "}
              {linkify("https://www.box.com/en-nl/esignature", "Box Sign")}.
            </TimelineEvent.Description>
          </TimelineEvent>

          <TimelineEvent>
            <TimelineEvent.Title>10/2019 - 03/2022</TimelineEvent.Title>
            <TimelineEvent.Description>
              Software Engineer at {linkify("https://www.skryv.com", "Skryv")},
              Brussels.
            </TimelineEvent.Description>
          </TimelineEvent>
        </div>

        <div className='py-6'>
          <Section.Heading>Personal Projects</Section.Heading>
          <Section.Body>
            <Link href='https://betterhackernews.com' target='_blank'>
              Better Hacker News
            </Link>
          </Section.Body>
        </div>

        <div className='py-6'>
          <Section.Heading>Posts</Section.Heading>
          <Section.Body>
            {posts.map((post) => (
              <Link href={`/posts/${post.slug}`} key={post.title}>
                {post.title}
              </Link>
            ))}
          </Section.Body>
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  const bookmarks = await getBookmarks();

  const posts = getPosts();

  return {
    props: {
      bookmarks,
      posts,
    },
  };
}

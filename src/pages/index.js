import Head from "next/head";

import Layout from "components/layout";
import Link from "components/link";
import Section from "components/section";
import { TimelineEvent } from "components/timeline";

import Image from "next/image";
import ExternalLinkButton from "components/external-link-button";

export default function HomePage() {
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

      <main>
        <Section>
          <Section.Heading hidden>Timeline</Section.Heading>
          <TimelineEvent active>
            <TimelineEvent.Title>Currently</TimelineEvent.Title>
            <TimelineEvent.Description>
              Software Engineer at {linkify("https://www.box.com/home", "Box")},
              Amsterdam. Building{" "}
              {linkify("https://www.box.com/en-nl/esignature", "Box Sign")}.
            </TimelineEvent.Description>
          </TimelineEvent>

          <TimelineEvent last>
            <TimelineEvent.Title>10/2019 - 03/2022</TimelineEvent.Title>
            <TimelineEvent.Description>
              Software Engineer at {linkify("https://www.skryv.com", "Skryv")},
              Brussels.
            </TimelineEvent.Description>
          </TimelineEvent>
        </Section>

        <Section>
          <Section.Heading>Personal Projects</Section.Heading>
          <Section.Body>
            <Link href='https://betterhackernews.com' target='_blank'>
              <Image
                src='/better-hn.webp'
                alt='better hacker news'
                layout='responsive'
                width='2029px'
                height='1129px'
              />
              <ExternalLinkButton>Open website</ExternalLinkButton>
            </Link>
          </Section.Body>
        </Section>
      </main>
    </Layout>
  );
}

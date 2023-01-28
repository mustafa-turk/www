import Head from "next/head";
import Image from "next/image";

import Link from "components/common/link";
import Block from "components/home/block";
import Layout from "components/home/layout";
import Section from "components/home/section";
import ExternalLinkButton from "components/home/external-link-button";
import { Timeline, TimelineEvent } from "components/home/timeline";

export default function HomePage() {
  function linkify(href, description) {
    return (
      <Link href={href} inline target='_blank'>
        {description}
      </Link>
    );
  }

  return (
    <Layout>
      <Head>
        <title>Mustafa Türk - Hello World</title>
      </Head>

      <main>
        <Section index={1}>
          <Section.Heading hidden>About me</Section.Heading>
          <Section.Body>
            A Software Engineer with more than 3 years of professional and
            industry experience building high quality web applications.
          </Section.Body>
        </Section>

        <Section index={2}>
          <Section.Heading hidden>Timeline</Section.Heading>
          <Timeline>
            <TimelineEvent active>
              <TimelineEvent.Title>Currently</TimelineEvent.Title>
              <TimelineEvent.Description>
                Software Engineer at{" "}
                {linkify("https://www.box.com/home", "Box")}, Amsterdam.
                Building{" "}
                {linkify("https://www.box.com/en-nl/esignature", "Box Sign")}.
              </TimelineEvent.Description>
            </TimelineEvent>

            <TimelineEvent last>
              <TimelineEvent.Title>10/2019 - 03/2022</TimelineEvent.Title>
              <TimelineEvent.Description>
                Software Engineer at {linkify("https://www.skryv.com", "Skryv")}
                , Brussels.
              </TimelineEvent.Description>
            </TimelineEvent>
          </Timeline>
        </Section>

        <Section index={3}>
          <Section.Heading>Writings</Section.Heading>
          <Section.Body>
            <Block metadata='2023' href='/writings/writing-one-pagers'>
              Writing One Pagers
            </Block>
          </Section.Body>
        </Section>

        <Section index={4}>
          <Section.Heading>Personal Projects</Section.Heading>
          <Section.Body>
            <Link href='https://betterhackernews.com' target='_blank'>
              <Image
                src='/better-hn.webp'
                alt='better hacker news'
                layout='responsive'
                width={2029}
                height={1129}
              />
              <ExternalLinkButton>Open website</ExternalLinkButton>
            </Link>
          </Section.Body>
        </Section>
      </main>
    </Layout>
  );
}

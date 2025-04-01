import Head from "next/head";

import Link from "components/common/link";
import Layout from "components/home/layout";
import Section from "components/home/section";
import ExternalImage from "components/home/external-image";
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
            Software Engineer with more than 5 years of industry experience
            building high quality web applications.
          </Section.Body>
        </Section>

        <Section index={4}>
          <Section.Heading>Personal Projects</Section.Heading>
          <Section.Body>
            <ExternalImage
              appUrl='https://secret.mustafaturk.com'
              imgSrc='/secret.webp'
              sourceUrl='https://github.com/mustafa-turk/secret'
              title='Secret'
              description='A simple, minimalistic and clutter-free password generator.'
            />
            <ExternalImage
              appUrl='https://apps.apple.com/be/app/calendio/id6447790237'
              imgSrc='/today.webp'
              sourceUrl='https://github.com/mustafa-turk/today'
              title='Today'
              description='A simple, minimalistic and clutter-free calendar app.'
            />
          </Section.Body>
        </Section>
      </main>
    </Layout>
  );
}

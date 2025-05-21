import Head from "next/head";
import { useRouter } from "next/router";

import Link from "components/common/link";
import Layout from "components/home/layout";
import Section from "components/home/section";
import ExternalImage from "components/home/external-image";
import { Timeline, TimelineEvent } from "components/home/timeline";
import Tabs from "components/common/tabs";

export default function HomePage() {
  const router = useRouter();

  function linkify(href, description) {
    return (
      <Link href={href} inline target='_blank'>
        {description}
      </Link>
    );
  }

  console.log(router.query.tab)

  return (
    <Layout>
      <Head>
        <title>Mustafa Türk - Hello World</title>
      </Head>

      <main>
        <Section index={1}>
          <Section.Heading hidden>About me</Section.Heading>
          <Section.Body>
            Software Engineer with more than 6 years of industry experience
            building high quality web applications.
          </Section.Body>
        </Section>

        <Section index={2}>
          <Section.Heading hidden>Timeline</Section.Heading>
          <Timeline>
            <TimelineEvent active>
              <TimelineEvent.Title>2022 — Currently</TimelineEvent.Title>
              <TimelineEvent.Description>
                Amsterdam — Software Engineer at{" "}
                {linkify("https://www.box.com/home", "Box")}.
              </TimelineEvent.Description>
            </TimelineEvent>

            <TimelineEvent last>
              <TimelineEvent.Title>2019 — 2022</TimelineEvent.Title>
              <TimelineEvent.Description>
                Brussels — Software Engineer at{" "}
                {linkify("https://www.skryv.com", "Skryv")}.
              </TimelineEvent.Description>
            </TimelineEvent>
          </Timeline>
        </Section>

        <Section index={4}>
          <Section.Heading>
            <Tabs activeTab={router.query.tab} />
          </Section.Heading>
          <Section.Body>
            {(!router.query.tab || router.query.tab === "products") && <>
              <ExternalImage
                appUrl='https://fontara.xyz'
                imgSrc='/bio.webp'
                title='Fontara'
                description='Create your social media bio with unique fonts'
              />
              <ExternalImage
                appUrl='https://secret.mustafaturk.com'
                imgSrc='/secret.webp'
                sourceUrl='https://github.com/mustafa-turk/secret'
                title='Pass'
                description='A simple, minimalistic and clutter-free password generator'
              />
              <ExternalImage
                appUrl='https://apps.apple.com/be/app/calendio/id6447790237'
                imgSrc='/today.webp'
                sourceUrl='https://github.com/mustafa-turk/today'
                title='Calendio'
                description='A simple, minimalistic and clutter-free iOS calendar app'
              />
            </>}
            {router.query.tab === "designs" && <>
              <ExternalImage
                appUrl='https://mandalina.be/menu-nl/index.html'
                imgSrc='/mandalina.webp'
                title='Mandalina'
                description='Interactive menu for Mandalina restaurant'
              />
              <ExternalImage
                appUrl='https://makas-eosin.vercel.app/'
                imgSrc='/band.webp'
                title='Makas Band'
                description='Promotion website for the Makas Band'
              />
            </>}
          </Section.Body>
        </Section>
      </main>
    </Layout>
  );
}

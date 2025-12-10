import Head from "next/head";

import Layout from "components/home/layout";
import Section from "components/home/section";
import ExternalImage from "components/home/external-image";
import { Timeline, TimelineEvent } from "components/home/timeline";
import Link from "next/link";
import ShinyText from "components/common/shiny-text";

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Mustafa Türk - Hello World</title>
      </Head>

      <main>
        <Section index={1}>
          <Section.Heading hidden>About me</Section.Heading>
          <Section.Body>
            Based in Netherlands, I’m a frontend-focused Software Engineer with 6+ years of experience building high quality web applications.
            <br />
            <br />
            I’ve previously worked at fast-moving startups and large, product-driven tech companies where working with globally distributed teams, engineering at scale, and building reliable software and accessible interfaces all come together.
          </Section.Body>
        </Section>

        <Section index={2}>
          <Section.Heading hidden>Timeline</Section.Heading>
          <Timeline>
            <TimelineEvent active>
              <TimelineEvent.Title>2022 — Currently</TimelineEvent.Title>
              <TimelineEvent.Description label={<span>Software Engineer at <Link className="text-neutral-300 hover:text-neutral-300 transition-all" href="https://box.com" target="_blank"><ShinyText>Box</ShinyText></Link></span>} />
            </TimelineEvent>

            <TimelineEvent last>
              <TimelineEvent.Title>2019 — 2022</TimelineEvent.Title>
              <TimelineEvent.Description label={<span>Software Engineer at <Link className="text-neutral-300 hover:text-neutral-300 transition-all" href="https://skryv.com" target="_blank"><ShinyText>Skryv</ShinyText></Link> – Acquired by <Link className="text-neutral-300 hover:text-neutral-300 transition-all" href="https://vandenbroele.com" target="_blank"><ShinyText>Vanden Broele</ShinyText></Link> in 2021</span>} />
            </TimelineEvent>
          </Timeline>
        </Section>

        <Section index={4}>
          <Section.Body>
            <ExternalImage
              appUrl="https://secret.mustafaturk.me"
              imgSrc="/secret.webp"
              sourceUrl="https://github.com/mustafa-turk/secret"
              title="Pass"
              description="A simple, minimalistic and clutter-free password generator"
            />
            <ExternalImage
              appUrl="https://apps.apple.com/be/app/calendio/id6447790237"
              imgSrc="/today.webp"
              sourceUrl="https://github.com/mustafa-turk/today"
              title="Calendar"
              description="A simple, minimalistic and clutter-free iOS calendar app"
            />
            <ExternalImage
              appUrl="https://fontara.xyz"
              imgSrc="/bio.webp"
              title="Fontara"
              description="Create your social media bio with unique fonts"
            />
          </Section.Body>
        </Section>
      </main>
    </Layout>
  );
}

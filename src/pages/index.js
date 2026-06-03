import Head from "next/head";

import Layout from "components/home/layout";
import Section from "components/home/section";
import ExternalImage from "components/home/external-image";
import Link from "next/link";

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
            <p>
              I’m a frontend-focused Software Engineer with 7+ years of experience building high quality web applications, based in the Netherlands.
            </p>
            <p>
              I’ve previously worked at fast-moving startups and currently working @ <Link className="text-neutral-900 underline underline-offset-2 font-medium" href="https://box.com" target="_blank">Box</Link>, a large, product-driven tech company where working with globally distributed teams, engineering at scale, and building reliable software and accessible interfaces all come together.
            </p>
          </Section.Body>
        </Section>

        <Section index={2}>
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
          </Section.Body>
        </Section>
      </main>
    </Layout>
  );
}

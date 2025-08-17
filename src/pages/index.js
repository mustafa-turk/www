import Head from "next/head";

import Layout from "components/home/layout";
import Section from "components/home/section";
import ExternalImage from "components/home/external-image";

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
            Software Engineer with more than 6 years of industry experience
            building high quality web applications.
          </Section.Body>
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

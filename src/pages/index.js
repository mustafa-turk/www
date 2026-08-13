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
            Software Engineer with 7+ years of experience building web products, specializing in frontend engineering.
            </p>
            <p>
            I began my career in startups, taking products from 0 → 1, owning architecture and development end-to-end, contributing to a successful acquisition, and playing a key role in integrating the acquired product into the acquiring company's platform.
            </p>
            <p>
            Today, I bring that startup ownership mindset to enterprise software @ <Link className="text-neutral-900 underline underline-offset-2 font-medium" href="https://box.com" target="_blank">Box</Link>, where I lead complex engineering initiatives for products used by millions of users worldwide. I enjoy solving challenging technical problems, driving projects from idea to production, and building software that scales.
            </p>
          </Section.Body>
        </Section>

        <Section index={2}>
          <Section.Body>
            <ExternalImage
              appUrl="https://secret.mustafaturk.com"
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

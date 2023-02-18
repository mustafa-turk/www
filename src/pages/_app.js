import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { JetBrains_Mono } from "@next/font/google";

import "styles/reset.css";
import "styles/global.css";
import "styles/code.css";

const monoFont = JetBrains_Mono({ subsets: ["latin"] });

export default function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Personal website of Mustafa Türk' />
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <style jsx global>{`
          code {
            font-family: ${monoFont.style.fontFamily};
          }
        `}</style>
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

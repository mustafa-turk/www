import Head from "next/head";

import "styles/reset.css";
import "styles/global.css";

export default function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Personal website of Mustafa Türk' />
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

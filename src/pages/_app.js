import Head from "next/head";
import Script from "next/script";

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
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=UA-154421172-1'
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-154421172-1');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

import Head from 'next/head';

import 'styles/reset.css';
import 'styles/global.css';

export default function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Personal website of Mustafa Türk" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-154421172-1"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-154421172-1');
              `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

import Head from 'next/head';

export default function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Personal website of Mustafa Türk" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

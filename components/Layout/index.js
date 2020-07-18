import Head from "next/head";
import Navbar from "../Navbar";
import Footer from "../Footer";
import * as Styled from './styled'

export function Layout({ pageName, children }) {
  return (
    <Styled.Layout>
      <Styled.GlobalStyle />
      <Head>
        <title>{pageName}</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </Styled.Layout>
  );
}
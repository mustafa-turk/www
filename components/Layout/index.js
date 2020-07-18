import Head from "next/head";
import { Navbar } from "../Navbar";
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
    </Styled.Layout>
  );
}
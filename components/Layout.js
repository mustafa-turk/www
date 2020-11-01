import styled from 'styled-components';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import GlobalStyles from '../styles/global';

export default function Layout({ pageName, children }) {
  return (
    <Wrapper>
      <GlobalStyles />
      <Head>
        <title>{pageName}</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 20px;
`;

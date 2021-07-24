import styled from 'styled-components';
import Head from 'next/head';
import GlobalStyles from 'styles/global';
import Navbar from 'components/common/Navbar';
import Spacer from 'components/common/Spacer';

export default function Layout({ pageName, children }) {
  return (
    <Wrapper>
      <GlobalStyles />
      <Head>
        <title>{pageName}</title>
      </Head>
      <Navbar />
      <Spacer top="30px" />
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 10px;
`;

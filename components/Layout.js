import styled from 'styled-components';
import Head from 'next/head';
import GlobalStyles from 'styles/global';

export default function Layout({ pageName, children }) {
  return (
    <Wrapper>
      <GlobalStyles />
      <Head>
        <title>{pageName}</title>
      </Head>
      {children}
    </Wrapper>
  );
}



const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 10px;
`;

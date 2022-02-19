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
  display: flex;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  gap: 30px;
  width: 300px;
  margin: 0 auto;
`;

import styled from 'styled-components';
import Head from 'next/head';
import Image from 'next/image';
import GlobalStyles from 'styles/global';

export default function Layout({ pageName, children }) {
  return (
    <Wrapper>
      <GlobalStyles />
      <Head>
        <title>{pageName}</title>
      </Head>
      <Deco>
        <Image src="/blob.svg" height={200} width={200} />
      </Deco>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 10px;
  position: relative;
`;

const Deco = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: -100px;
  z-index: -999;
  filter: blur(100px);
  opacity: 0.5;
  margin: 0 auto;
  text-align: center;
`;

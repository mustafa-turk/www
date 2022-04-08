import styled from 'styled-components';
import Head from 'next/head';
import GlobalStyles from 'styles/globalStyles';

function PageLayout({ title, children }) {
  return (
    <Wrapper>
      <GlobalStyles />
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 640px;
  padding: 10px;
  margin: 20px auto;
`;

export default PageLayout;

import Layout from 'components/Layout';
import styled from 'styled-components';

export default function HomePage() {
  return (
    <Layout pageName="Mustafa Türk - Hello World">
      <Header>Mustafa Türk</Header>
      <Main>
        <Description>Software Engineer at Box</Description>
        <Description isPast>Software Engineer at Skryv</Description>
      </Main>
      <Footer>
        <Link href="https://www.github.com/mustafa-turk" target="_blank" rel="noopener noreferrer">
          Github
        </Link>
        <Link
          href="https://www.linkedin.com/in/mustafa-t%C3%BCrk-92b363171/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
      </Footer>
    </Layout>
  );
}

const Header = styled.header`
  display: inline;
  font-weight: 800;
  font-size: 21px;
  background: linear-gradient(90deg, #7928ca, #ff0080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Main = styled.main`
  font-weight: 600;
  font-size: 18px;
`;

const Description = styled.div`
  display: inline-box;
  position: relative;
  opacity: ${(p) => (p.isPast ? '0.3' : '1')};
  z-index: 0;
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: -3%;
    width: 106%;
    height: ${(p) => (p.isPast ? '2px' : '0')};
    background: #000;
    z-index: -1;
  }
`;

const Link = styled.a`
  color: #141414;
  transition: all 0.4s ease;
  padding: 3px;
  border-radius: 3px;
  &:hover {
    background-color: #eaeaea;
  }
`;

const Footer = styled.footer`
  display: flex;
  gap: 10px;
  border-top: 1px dashed #202020;
  padding-top: 10px;
  font-size: 14px;
  width: 300px;
`;

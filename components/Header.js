import styled from 'styled-components';
import Link from './Link';

export default function Header() {
  return (
    <Wrapper>
      <Title>Mustafa Türk</Title>
      <Body>
        <p>
          Hey there, I&apos;m currently building products at{' '}
          <Link url="https://skryv.com" color="#007AFF">
            Skryv
          </Link>{' '}
          as a Software Engineer.
        </p>
        <p>
          You can find me on{' '}
          <Link url="https://github.com/mustafa-turk" color="#007AFF">
            Github
          </Link>{' '}
          and{' '}
          <Link url="https://www.linkedin.com/in/mustafa-t%C3%BCrk-92b363171/" color="#007AFF">
            LinkedIn
          </Link>
          .
        </p>
      </Body>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  margin-top: 30px;
  @media (max-width: 900px) {
    text-align: left;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 10px;
  @media (max-width: 900px) {
    font-size: 24px;
  }
`;

const Body = styled.div`
  font-size: 21px;
  p {
    margin-bottom: 3px;
  }
  @media (max-width: 900px) {
    font-size: 19px;
  }
`;

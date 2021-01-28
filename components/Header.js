import styled from 'styled-components';
import Link from './Link';

export default function Header() {
  return (
    <Wrapper>
      <Title>Hey there,</Title>
      <Title>I am Mustafa Türk</Title>
      <Body>
        <p>
          Currently building products as a Frontend Software Engineer @{' '}
          <Link url="https://skryv.com" color="#007AFF">
            Skryv
          </Link>
          .
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
  font-size: 42px;
  font-weight: 800;
  line-height: 44px;
  @media (max-width: 900px) {
    font-size: 32px;
    line-height: 32px;
  }
`;

const Body = styled.div`
  font-size: 21px;
  margin-top: 20px;
  @media (max-width: 900px) {
    font-size: 19px;
  }
  p {
    margin-bottom: 3px;
  }
`;

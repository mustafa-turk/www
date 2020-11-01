import styled from 'styled-components';
import Link from './Link';

export default function Header() {
  return (
    <Wrapper>
      <Title>Mustafa Türk</Title>
      <Body>
        <p>
          I'm a software engineer working at <Link url="https://skryv.com">Skryv</Link> building web
          applications.
        </p>
        <p>
          You can find me on <Link url="https://github.com/mustafa-turk">Github</Link> and{' '}
          <Link url="https://www.linkedin.com/in/mustafa-t%C3%BCrk-92b363171/">LinkedIn</Link>.
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
  @media (max-width: 900px) {
    font-size: 19px;
  }
`;

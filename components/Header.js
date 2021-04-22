import styled from 'styled-components';
import Link from './Link';

export default function Header() {
  return (
    <Wrapper>
      <Title>Mustafa Türk</Title>
      <Body>
        Software Engineer with a soft spot for user interfaces.<br />
        Currently building products at{' '}
        <Link url="https://skryv.com" color="#007AFF">
          Skryv
        </Link>
        .
      </Body>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 30px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 38px;
  font-weight: 800;
  line-height: 44px;
  @media (max-width: 900px) {
    font-size: 32px;
    line-height: 32px;
  }
`;

const Body = styled.div`
  font-size: 21px;
  margin-top: 10px;
  @media (max-width: 900px) {
    font-size: 19px;
  }
`;

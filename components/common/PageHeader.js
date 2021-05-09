import styled from 'styled-components';

export function Header({ children }) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export function HeaderTitle({ children }) {
  return <Title>{children}</Title>
}

export function HeaderSubtitle({ children }) {
  return <Subtitle>{children}</Subtitle>
}

const Wrapper = styled.div`
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

const Subtitle = styled.div`
  font-size: 21px;
  @media (max-width: 900px) {
    font-size: 19px;
  }
`;

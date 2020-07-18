import styled from 'styled-components'

export const Header = styled.div`
  text-align: center;
  margin-top: 75px;
`

export const HeaderTitle = styled.h1`
  font-size: 40px;
  @media (max-width: 900px) {
    font-size: 34px;
  }
`;

export const HeaderSubtitle = styled.p`
  font-size: 24px;
  @media (max-width: 900px) {
    font-size: 21px;
  }
`
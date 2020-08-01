import styled from 'styled-components'

export const Header = styled.div`
  text-align: center;
  margin-top: 75px;
  @media (max-width: 900px) {
    text-align: left;
    margin: 75px 10px 0 10px;
  }
`

export const HeaderTitle = styled.h1`
  font-size: 40px;
  margin-bottom: 10px;
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
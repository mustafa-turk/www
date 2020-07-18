import styled from 'styled-components'

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  @media (max-width: 900px) {
    margin: 10px;
  }
`

export const NavbarGroup = styled.div`
  display: flex;
`

export const NavbarLink = styled.a`
  color: #AAAAAA;
  font-size: 14px;
  margin-left: ${props => props.hasMargin ? '30px' : null}
`;
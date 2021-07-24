import styled from 'styled-components';
import NextLink from 'next/link';
import useWindowSize from 'hooks/useWindowSize';
import { CloseIcon, MenuIcon } from './Icon';
import { useState } from 'react';
import theme from 'styles/theme';

export default function Navbar() {
  const { width } = useWindowSize();
  if (width < 600) return <NavbarMobile />;
  return <NavbarDesktop />;
}

function NavbarDesktop() {
  return (
    <WrapperDesktop>
      <NavbarContent />
    </WrapperDesktop>
  )
}

function NavbarContent() {
  return (
    <>
      <NextLink href="/">
        <Link href="/">
          Home
        </Link>
      </NextLink>
      <NextLink href="/bookmarks">
        <Link href="/bookmarks">
          Bookmarks
        </Link>
      </NextLink>
      <NextLink href="https://github.com/mustafa-turk">
        <Link href="https://github.com/mustafa-turk" target="_blank" rel="noopener">
          Github
        </Link>
      </NextLink>
      <NextLink href="https://www.linkedin.com/in/mustafa-t%C3%BCrk-92b363171/">
        <Link
          href="https://www.linkedin.com/in/mustafa-t%C3%BCrk-92b363171/"
          target="_blank"
          rel="noopener"
        >
          LinkedIn
        </Link>
      </NextLink>
    </>
  )
}

function NavbarMobile() {
  const [isOpen, setOpen] = useState(false);

  return (
    <WrapperMobile>
      { isOpen ? (
        <ToggleButton onClick={() => setOpen(false)}>
          <CloseIcon size="21px" />
        </ToggleButton>
      ) : (
        <ToggleButton onClick={() => setOpen(true)}>
          <MenuIcon size="21px" />
        </ToggleButton>
      )}
      { isOpen ? (
        <WrapperMobileContent>
          <NavbarContent />
        </WrapperMobileContent>
      ) : null }
    </WrapperMobile>
  )
}

const WrapperDesktop = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  border-bottom: 1px solid ${theme.colors.gray};
`;

const WrapperMobile = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid ${theme.colors.gray};
  position: relative;
`;

const WrapperMobileContent = styled.div`
  position: absolute;
  top: 36px;
  left: 0;
  background: white;
  width: 100%;
  height: calc(100vh - 32px);
  z-index: 1;
  padding: 10px;
  a {
    display: block;
    font-size: 18px;
    padding-left: 0;
    &:hover {
      background: none;
    }
  }
`;

const ToggleButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const Link = styled.a`
  font-size: 16px;
  transition: 0.5s ease;
  padding: 10px 15px;
  border-radius: 6px;
  &:hover {
    background: ${theme.colors.gray};
  }
`;

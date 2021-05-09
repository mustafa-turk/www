import styled from 'styled-components';
import NextLink from 'next/link';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { CloseIcon, MenuIcon } from './Icon';
import { useState } from 'react';

export default function Navbar() {
  const { width } = useWindowDimensions();
  if (width < 600) return <NavbarMobile />;
  return <NavbarDesktop />;
}

function NavbarDesktop() {
  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #ECECEC;
  `;

  return (
    <Wrapper>
      <NavbarContent />
    </Wrapper>
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

  const Wrapper = styled.div`
    padding-bottom: 10px;
    border-bottom: 1px solid #ECECEC;
    position: relative;
  `;

  const ContentWrapper = styled.div`
    position: absolute;
    top: 32px;
    left: 0;
    background: white;
    width: 100%;
    height: calc(100vh - 32px);
    z-index: 1;
    padding: 10px;
    a {
      display: block;
    }
  `;

  return (
    <Wrapper>
      { isOpen ? (
        <ToggleButton onClick={() => setOpen(false)}>
          <CloseIcon size="21px" />
        </ToggleButton>
      ) : (
        <ToggleButton onClick={() => setOpen(true)}>
          <MenuIcon size="21px" />
        </ToggleButton>
      )}
      { isOpen ? <ContentWrapper><NavbarContent /></ContentWrapper> : null }
    </Wrapper>
  )
}

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
    background: #ECECEC;
  }
`;

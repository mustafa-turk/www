import React from 'react'
import Link from 'next/link'
import * as Styled from './styled'

export default function Navbar() {
  return (
    <Styled.Navbar>
      <Styled.NavbarGroup>
        <Link href='/'>
          <Styled.NavbarLink>Home</Styled.NavbarLink>
        </Link>
      </Styled.NavbarGroup>
      <Styled.NavbarGroup>
        <Link href='/about'>
          <Styled.NavbarLink
            href='/mustafa-turk-resume.pdf'
            target='_blank'
            rel='noopener'
          >
            Resume
          </Styled.NavbarLink>
        </Link>
      </Styled.NavbarGroup>
    </Styled.Navbar>
  );
}

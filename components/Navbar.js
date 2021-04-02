import styled from 'styled-components';
import NextLink from 'next/link';
import { SiGithub, SiLinkedin } from 'react-icons/si';

export default function Navbar() {
  return (
    <Wrapper>
      <NextLink href="https://github.com/mustafa-turk/www">
        <Link href="https://github.com/mustafa-turk/www" target="_blank" rel="noopener">
          <SiGithub size="18px" />
        </Link>
      </NextLink>
      <NextLink href="https://www.linkedin.com/in/mustafa-t%C3%BCrk-92b363171/">
        <Link
          href="https://www.linkedin.com/in/mustafa-t%C3%BCrk-92b363171/"
          target="_blank"
          rel="noopener"
        >
          <SiLinkedin size="18px" />
        </Link>
      </NextLink>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Link = styled.a`
  color: #aaaaaa;
  font-size: 14px;
  margin-right: 15px;
  transition: 0.5s ease;
  margin-left: ${(props) => (props.hasMargin ? '30px' : null)};
  &:hover {
    color: black;
  }
`;

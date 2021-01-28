import styled from 'styled-components';
import NextLink from 'next/link';

export default function Navbar() {
  return (
    <Wrapper>
      <NextLink href="https://github.com/mustafa-turk/www">
        <Link href="https://github.com/mustafa-turk/www" target="_blank" rel="noopener">
          Source
        </Link>
      </NextLink>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const Link = styled.a`
  color: #aaaaaa;
  font-size: 14px;
  transition: 0.5s ease;
  margin-left: ${(props) => (props.hasMargin ? '30px' : null)};
  &:hover {
    color: black;
  }
`;

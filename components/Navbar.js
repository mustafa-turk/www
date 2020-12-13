import styled from 'styled-components';
import NextLink from 'next/link';

export default function Navbar() {
  return (
    <Wrapper>
      <Group>
        <NextLink href="/mustafa-turk-resume.pdf">
          <Link href="/mustafa-turk-resume.pdf" target="_blank" rel="noopener">
            Resume
          </Link>
        </NextLink>
      </Group>
      <Group>
        <NextLink href="https://github.com/mustafa-turk/www">
          <Link href="https://github.com/mustafa-turk/www" target="_blank" rel="noopener">
            Source
          </Link>
        </NextLink>
      </Group>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Group = styled.div`
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

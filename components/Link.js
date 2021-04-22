import styled from 'styled-components';
import NextLink from 'next/link';

export default function Link({ url, children, color }) {
  return (
    <NextLink href={url}>
      <Wrapper href={url} color={color} target="_blank" rel="noopener">
        {children}
      </Wrapper>
    </NextLink>
  );
}

const Wrapper = styled.a`
  color: ${(props) => props.color};
  font-size: inherit;
  transition: 0.5s ease;
  margin-left: ${(props) => (props.hasMargin ? '30px' : null)};
  &:hover {
    text-decoration: underline;
  }
`;

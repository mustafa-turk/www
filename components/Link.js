import styled from 'styled-components';

function Link({ href, children, inline }) {
  return (
    <Anchor href={href} target="_blank" inline={inline}>
      {children}
    </Anchor>
  );
}

const Anchor = styled.a`
  display: ${(p) => (p.inline ? 'inline' : 'block')};
  color: inherit;
  text-decoration: underline;
  text-decoration-style: dotted;
  text-underline-offset: 3px;
  text-decoration-color: #7c7c80;
`;

export default Link;

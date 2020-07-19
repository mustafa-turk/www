import React from 'react'
import * as Styled from './styled'

export function Header() {
  return (
    <Styled.Header>
      <Styled.HeaderTitle>Hey there 👋</Styled.HeaderTitle>
      <Styled.HeaderSubtitle>
        I’m a Software Engineer based in Brussels.<br />
        Currently working at Skryv where I break things only to fix them later.
      </Styled.HeaderSubtitle>
    </Styled.Header>
  );
}

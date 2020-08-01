import React from 'react'
import * as Styled from './styled'

export function Header() {
  return (
    <Styled.Header>
      <Styled.HeaderTitle>Hey there, I’m Mustafa 👋</Styled.HeaderTitle>
      <Styled.HeaderSubtitle>
        I’m a Software Engineer based in Belgium.<br/>Currently working at Skryv where I build web applications.
      </Styled.HeaderSubtitle>
    </Styled.Header>
  );
}

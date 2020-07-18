import React from 'react'
import * as Styled from './styled'

export function Card({ url, image, title, description }) {
  return (
    <Styled.Card hasMarginRight>
      <a
        href={url}
        target='_blank'
        rel='noopener'
      >
        <img src={image} alt={title} />
        <Styled.CardOverlay>
          <div>
            <Styled.CardTitle>{title}</Styled.CardTitle>
            <Styled.CardDescription>{description}</Styled.CardDescription>
          </div>
        </Styled.CardOverlay>
      </a>
    </Styled.Card>
  )
}

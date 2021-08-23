import React from 'react'
import styled from 'styled-components';

export default function Heading({ children }) {
  return (
    <Container>
      {children}
    </Container>
  )
}

const Container = styled.div`
  font-size: 23px;
  font-weight: 700;
  margin: 0 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #EAEAEA;
`;

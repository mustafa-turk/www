import styled from 'styled-components'

export default function Footer() {
  return (
    <Wrapper>
      <p>
        © 2020 — Mustafa Türk ✌
        <br/>
        <a href="">Source</a>
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  margin: 100px 0 100px 0;
  font-size: 14px;
  p {
    margin-top: 50px;
  }
`

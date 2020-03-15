import styled from 'styled-components'

export default function Header() {
  return (
    <Wrapper>
      <Links>
        <Link href="https://github.com/mustafa-turk" target="_blank" rel="noopener">Github</Link>
        <Link href="https://codepen.io/mustafa-turk" target="_blank" rel="noopener">Codepen</Link>
      </Links>
      <h1>
        👋 Hi, my name is Mustafa.
      </h1>
      <Description>
        I'm a software engineer based in Brussels, specializing in building (sometimes also designing) websites and applications.
      </Description>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 30px;
  padding: 10px;
`
const Description = styled.p`
  margin-top: 10px;
  font-size: 23px;
  @media (max-width: 500px) {
    font-size: 19px;
  }
`
const Links = styled.div`
  margin-bottom: 15px;
`
const Link = styled.a`
  display: inline-flex;
  margin-right: 20px;
`

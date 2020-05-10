import styled from 'styled-components'

export default function Header() {
  return (
    <Wrapper>
      <h1>
        Hey there, I am Mustafa.
      </h1>
      <Description>
        I am a Software Engineer based Brussels,<br />
        specializing in building (sometimes also designing) websites and applications.
      </Description>
      <Social>
        <Link href="https://github.com/mustafa-turk" target="_blank" rel="noopener">
          <img src="/github.svg" width="20" />
           Github
        </Link>
        <Link href="https://dribbble.com/mustafa-turk" target="_blank" rel="noopener">
          <img src="/dribbble.svg" width="20" />
           Dribbble
        </Link>
        <Link href="https://www.linkedin.com/in/mustafa-t%C3%BCrk-92b363171/" target="_blank" rel="noopener">
          <img src="/linkedin.svg" width="20" />
           LinkedIn
        </Link>
      </Social>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 40px;
  padding: 10px;
  @media (max-width: 768px) {
    margin-top: 0px;
    margin-bottom: 50px;
  }
`
const Social = styled.div`
  display: flex;
  margin-top: 30px;
`
const Link = styled.a`
  display: inline-flex;
  margin-right: 25px;
  border-bottom: 1px solid transparent;
  transition: border .2s ease;
  align-items: center;
  img {
    margin-right: 7px;
  }
`
const LinedText = styled.span`
  text-decoration: line-through;
`
const Description = styled.p`
  margin-top: 30px;
  font-size: 23px;
  @media (max-width: 500px) {
    font-size: 19px;
  }
`

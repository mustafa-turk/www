import styled from 'styled-components'

export default function ContentBlock({ title, description, image, tags }) {
  return (
    <Wrapper>
      <img src={image} alt="1" width="100%" />
      <Title>{title}</Title>
      <p>{description}</p>
      <Tags>
        { tags.map((tag, key) => {
          return (
            <Tag href={tag.url} target="_blank" rel="noopener" key={key}>
              {tag.name}
              <img src="../static/external-link.svg" alt="external-link-icon" />
            </Tag>
          );
        }) }
      </Tags>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 10px;
  flex: 0 50%;
  @media (max-width: 900px) {
    margin-top: 30px;
  }
`
const Title = styled.p`
  font-size: 21px;
  font-weight: 500;
  margin: 10px 0;
`
const Tags = styled.div`
  margin-top: 15px;
  display: flex;
`
const Tag = styled.a`
  display: flex;
  align-items: center;
  background: #FAFBFC;
  color: #2879F4;
  padding: 8px 10px;
  border-radius: 7px;
  font-size: 14px;
  margin-right: 10px;
  transition: background 150ms ease-in 0s;
  &:hover {
    background: #edeff0;
  }
  img {
    width: 15px;
    margin-left: 5px;
    pointer-events: none;
  }
`

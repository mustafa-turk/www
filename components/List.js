import styled from 'styled-components';

export default function List({ items }) {
  return items.map((item) => (
    <Item href={item.link} target="_blank" rel="noopener" key={item.link}>
      <ItemTitle>{item.title}</ItemTitle>
      <p>{item.excerpt}</p>
    </Item>
  ));
}

const Item = styled.a`
  display: block;
  padding: 10px 15px;
  transition: 0.5s ease;
  &:hover {
    background: red;
    border-radius: 6px;
    background: #ECECEC;
  }
`

const ItemTitle = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: #007AFF;
`
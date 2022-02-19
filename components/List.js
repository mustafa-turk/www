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
  margin: 15px 0;
  transition: 0.5s ease;
`;

const ItemTitle = styled.p`
  font-weight: 600;
  color: #0363fe;
`;

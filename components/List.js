import styled from 'styled-components';

// function List({ items }) {
//   return items.map((item) => (
//     <Item href={item.link} target="_blank" rel="noopener" key={item.link}>
//       <ItemTitle>{item.title}</ItemTitle>
//       <p>{item.excerpt}</p>
//     </Item>
//   ));
// }

export function Item({ href }) {
  return (
    <Wrapper>
      <Title href={href}>Hello</Title>
      <Body>Hallo</Body>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Title = styled.a`
  display: block;
`;

const ListItemDecoration = styled.div`
  width: 10px;
  height: 10px;
  background: #54525f;
  border-radius: 10px;
  display: inline-block;
  margin-right: 5px;
`;
const Body = styled.div`
  display: block;
`;

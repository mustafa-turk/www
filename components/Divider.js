import styled from 'styled-components';

const Divider = styled.hr`
  border: 1px solid #2b2932;
  width: 100%;
  margin: ${(props) => props.space || 0}px 0;
`;

export default Divider;

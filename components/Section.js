import styled from 'styled-components';

const Section = styled.div`
  color: #dcdcdc;
`;
const Title = styled.h3`
  font-weight: 600;
  color: #54525f;
`;
const Body = styled.p`
  margin-top: 10px;
`;

Section.Title = Title;
Section.Body = Body;

export default Section;

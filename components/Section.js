import styled from 'styled-components';

const Section = styled.section`
  margin: 48px 0;
`;
const Heading = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;
const Description = styled.span`
  font-size: 16px;
  color: #7c7c80;
`;
const Body = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

Section.Heading = Heading;
Section.Body = Body;
Section.Description = Description;

export default Section;

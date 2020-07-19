import styled from "styled-components"

export const Card = styled.div`
  flex: 0 50%;
  display: flex;
  position: relative;
  padding: 3px;
  img {
    width: 100%;
  }
`;

export const CardOverlay = styled.div`
  position: absolute;
  width: calc(100% - 6px);
  height: 100%;
  bottom: 6px;
  left: 10;
  align-items: flex-end;
  transition: .5s ease;
  background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.6) 81%);
  display: flex;

  border-radius: 5px;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  div {
    color: white;
    padding-left: 20px;
    padding-bottom: 20px;
  }
`;

export const CardTitle = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const CardDescription = styled.p`
  font-weight: normal;
`;
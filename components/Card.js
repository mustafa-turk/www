import styled from 'styled-components';

export default function Card({ url, image, title, description }) {
  return (
    <Wrapper>
      <a href={url} target="_blank" rel="noopener">
        <img src={image} alt={title} />
        <Overlay>
          <div>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </div>
        </Overlay>
      </a>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 0 50%;
  display: flex;
  position: relative;
  padding: 3px;
  img {
    width: 100%;
  }
`;

const Overlay = styled.div`
  position: absolute;
  width: calc(100% - 6px);
  height: 100%;
  bottom: 6px;
  left: 10;
  align-items: flex-end;
  transition: 0.5s ease;
  background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.6) 81%);
  display: flex;
  opacity: 0;
  border-radius: 5px;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  div {
    color: white;
    padding: 20px;
  }
`;

const Title = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Description = styled.p`
  font-weight: normal;
`;

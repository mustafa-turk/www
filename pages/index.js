import React from 'react'
import { Layout, Header } from "../components"
import styled from "styled-components"

export default function HomePage() {
  return (
    <Layout pageName='Hello world — Mustafa Türk'>
      <Header />
      <Content>
        <ContentItem hasMarginRight>
          <a
            href='http://github.com/mustafa-turk/kopy'
            target='_blank'
            rel='noopener'
          >
            <img src='/work/1.jpg' alt='' />
            <ContentOverlay>
              <div>
                <ContentOverlayTitle>kopy</ContentOverlayTitle>
                <ContentOverlayBody>
                  Clipboard application for macOS built with Electron.js and
                  React.js
                </ContentOverlayBody>
              </div>
            </ContentOverlay>
          </a>
        </ContentItem>
        <ContentItem hasMarginRight>
          <a
            href='https://github.com/mustafa-turk/code-box'
            target='_blank'
            rel='noopener'
          >
            <img src='/work/2.jpg' alt='' />
            <ContentOverlay>
              <div>
                <ContentOverlayTitle>code-box</ContentOverlayTitle>
                <ContentOverlayBody>
                  A web app where you can share code snippets with others.
                </ContentOverlayBody>
              </div>
            </ContentOverlay>
          </a>
        </ContentItem>
        <ContentItem hasMarginRight>
          <a
            href='http://github.com/mustafa-turk/react-native-awesome-select'
            target='_blank'
            rel='noopener'
          >
            <img src='/work/3.jpg' alt='' />
            <ContentOverlay>
              <div>
                <ContentOverlayTitle>
                  react-native-awesome-select
                </ContentOverlayTitle>
                <ContentOverlayBody>
                  A dead simple multiselect component for React Native
                </ContentOverlayBody>
              </div>
            </ContentOverlay>
          </a>
        </ContentItem>
      </Content>
    </Layout>
  );
}

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  @media (max-width: 768px) {
    display: block;
  }
`;

const ContentItem = styled.div`
  flex: 0 50%;
  display: flex;
  position: relative;
  padding: 3px;
  img {
    width: 100%;
  }
`;

const ContentOverlay = styled.div`
  position: absolute;
  width: calc(100% - 6px);
  height: 100%;
  bottom: 6px;
  left: 10;
  align-items: flex-end;
  transition: .5s ease;
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
    padding-left: 20px;
    padding-bottom: 20px;
  }
`;

const ContentOverlayTitle = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;

const ContentOverlayBody = styled.p`
  font-weight: normal;
`;
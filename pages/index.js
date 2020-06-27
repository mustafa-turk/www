import React from 'react';
import Styled from 'styled-components';
import { Layout } from "../components";

export default function me() {
  return (
    <Layout pageName='Hello world — Mustafa Türk'>
      <h1>Hello 👋🏻</h1>
      <Text>
        I am a software engineer specializing in web and mobile experiences.
      </Text>
      <Footer>
        Find me on{" "}
        <Link
          href='https://github.com/mustafa-turk'
          target='_blank'
          rel='noopener'
        >
          Github
        </Link>!
      </Footer>
    </Layout>
  );
}

const Text = Styled.div`
  font-size: 19px;
`

const Link = Styled.a`
  color: #1782FF;
`;

const Footer = Styled.div`
  margin-top: 30px;
  width: 100%;
`;

import styled from 'styled-components';
import Layout from 'components/Layout';
import Section from 'components/Section';
import Spacer from 'components/Spacer';
import { getBookmarks } from 'lib/raindrop';

export default function HomePage({ bookmarks }) {
  return (
    <Layout pageName="Mustafa Türk - Hello World">
      <Heading color="#7257F2">Mustafa Türk</Heading>
      <Heading>Software Engineer</Heading>
      <Heading color="#54525F">Amsterdam, Netherlands</Heading>

      <Spacer size={16} />

      <Current>
        <Pulse />
        Currently: Frontend Software Engineer, Box Sign at Box
      </Current>
      <Spacer size={16} />

      <Spacer size={64} />

      <Section>
        <Section.Title>About</Section.Title>
        <Section.Body>
          Born and raised in Belgium. Studied Multimedia and Communication Technology at the Erasmus
          University of Brussels. Recently moved to Amsterdam to join the Box Sign team at Box. You
          can find me on{' '}
          <Link href="https://be.linkedin.com/in/mustafa-t%C3%BCrk-92b363171">LinkedIn</Link> and{' '}
          <Link href="github.com/mustafa-turk">Github</Link>.
        </Section.Body>
      </Section>

      <Spacer size={32} />

      <Section>
        <Section.Title>Personal</Section.Title>
        <Section.Body>
          Building <Link href="http://betterhackernews.com">BetterHackerNews</Link> in my spare
          time.
        </Section.Body>
      </Section>
    </Layout>
  );
}

export async function getServerSideProps() {
  // const bookmarks = await getBookmarks();
  return {
    props: {
      bookmarks: [],
    },
  };
}

const Heading = styled.h1`
  font-size: 48px;
  color: ${(props) => props.color || '#fff'};
`;

const Current = styled.div`
  display: flex;
  align-items: center;
  font-family: Roboto Mono;
`;

const Link = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: underline;
  text-decoration-color: #707070;
  text-underline-offset: 1.5px;
  text-decoration-thickness: 1.5px;
`;

const Pulse = styled.div`
  display: inline-block;
  margin-right: 10px;
  background: #d23a20;
  border-radius: 10px;
  width: 15px;
  min-width: 15px;
  height: 15px;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  transform: scale(1);
  animation: pulse 2s infinite;
  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(210, 58, 32, 0.6);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(64, 18, 12, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(64, 18, 12, 0);
    }
  }
`;

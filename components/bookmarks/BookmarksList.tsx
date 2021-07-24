import styled from 'styled-components';
import theme from 'styles/theme';

export default function BookmarksList({ bookmarks }) {
  return (
    <>
      {bookmarks.map((b: { link: string, title: string, excerpt: string }) => (
        <Bookmark href={b.link} target="_blank" rel="noopener" key={b.link}>
          <BookmarkTitle>{b.title}</BookmarkTitle>
          <p>{b.excerpt}</p>
        </Bookmark>
      ))}
    </>
  )
}

const Bookmark = styled.a`
  display: block;
  padding: 10px 15px;
  transition: 0.5s ease;
  &:hover {
    border-radius: 6px;
    background: ${theme.colors.gray};
  }
`

const BookmarkTitle = styled.p`
  font-weight: bold;
  font-size: 18px;
`
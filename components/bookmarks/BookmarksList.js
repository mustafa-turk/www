import styled from 'styled-components';

export default function BookmarksList({ bookmarks }) {
  return (
    <>
      {bookmarks.map((b) => (
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
    background: red;
    border-radius: 6px;
    background: #ECECEC;
  }
`

const BookmarkTitle = styled.p`
  font-weight: bold;
  font-size: 18px;
`
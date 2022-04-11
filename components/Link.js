function Link({ href, children, inline }) {
  return (
    <a
      className={`${
        inline ? 'inline' : 'block'
      } text-inherit underline decoration-dotted decoration-neutral-500 underline-offset-4`}
      href={href}
      target="_blank"
      inline={inline}
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

export default Link;

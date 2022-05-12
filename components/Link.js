function Link({ href, children, inline, ...props }) {
  return (
    <a
      className={`${
        inline ? 'inline' : 'block'
      } text-inherit underline decoration-dotted decoration-neutral-500 underline-offset-2`}
      href={href}
      inline={inline}
      rel="noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}

export default Link;

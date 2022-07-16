function Link({ href, children, inline, ...props }) {
  return (
    <a
      className={`${
        inline ? 'inline' : 'block'
      } text-inherit underline decoration-dotted decoration-neutral-400 underline-offset-[3px]`}
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

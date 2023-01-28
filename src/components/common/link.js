function Link({ href, children, inline, ...props }) {
  return (
    <a
      className={`${inline ? "inline" : "block"} text-neutral-200 relative`}
      href={href}
      inline={inline}
      rel='noreferrer'
      {...props}
    >
      {children}
    </a>
  );
}

export default Link;

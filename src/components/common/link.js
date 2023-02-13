function Link({ href, children, inline, ...props }) {
  return (
    <a
      className={`${inline ? "inline" : "block"} text-neutral-200 relative`}
      href={href}
      rel='noreferrer'
      {...props}
    >
      {children}
    </a>
  );
}

export default Link;

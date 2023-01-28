function Heading({ children }) {
  return (
    <h2 className='mt-10 first:mt-0 mb-4 text-lg text-neutral-300'>
      {children}
    </h2>
  );
}

function SubHeading({ children }) {
  return <h3 className='mb-8 text-red'>{children}</h3>;
}

function UnorderedList({ children }) {
  return <ul className='list-disc ml-3 flex space-y-2 flex-col'>{children}</ul>;
}

export { Heading, SubHeading, UnorderedList };

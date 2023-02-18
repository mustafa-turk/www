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

const CodeBlock = ({ children }) => {
  return (
    <pre className='my-4 p-4 border border-neutral-800 rounded-lg overflow-scroll'>
      {children}
    </pre>
  );
};

const Code = ({ children }) => {
  return <code className='text-sm'>{children}</code>;
};

export { Heading, SubHeading, UnorderedList, CodeBlock, Code };

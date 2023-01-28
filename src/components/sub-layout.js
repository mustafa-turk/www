import { MDXProvider } from "@mdx-js/react";
import { Heading, SubHeading, UnorderedList } from "components/blog-components";

import Layout from "components/layout";

const components = {
  h2: Heading,
  h3: SubHeading,
  ul: UnorderedList,
};

export default function SubLayout({ children, metadata }) {
  const { title, date } = metadata;

  return (
    <Layout>
      <MDXProvider components={components}>
        <div className='text-center'>
          <h1 className='text-xl'>{title}</h1>
          <span className='text-neutral-600 text-sm'>{date}</span>
        </div>

        <main className='text-neutral-400'>{children}</main>
      </MDXProvider>
    </Layout>
  );
}

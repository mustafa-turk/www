import { motion } from "framer-motion";
import { MDXProvider } from "@mdx-js/react";
import { Heading, SubHeading, UnorderedList } from "components/writings";

import Layout from "components/home/layout";
import Head from "next/head";

const components = {
  h2: Heading,
  h3: SubHeading,
  ul: UnorderedList,
};

export default function SubLayout({ children, metadata }) {
  const { title, date } = metadata;

  return (
    <Layout>
      <Head>
        <title>Mustafa Türk - {title}</title>
      </Head>
      <MDXProvider components={components}>
        <motion.div
          transition={{ delay: 0.3 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='text-center'
        >
          <h1 className='text-xl'>{title}</h1>
          <span className='text-neutral-600 text-sm'>{date}</span>
        </motion.div>

        <motion.main
          transition={{ delay: 0.6 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='text-neutral-400'
        >
          {children}
        </motion.main>
      </MDXProvider>
    </Layout>
  );
}

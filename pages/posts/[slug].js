import Head from "next/head";

import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";

import Snippet from "components/Snippet";
import Layout from "components/Layout";

import { getPostFromSlug, getSlugs } from "api/posts";

import "highlight.js/styles/base16/black-metal.css";

export default function PostPage({ post }) {
  return (
    <Layout className="gap-8">
      <Head>
        <title>{post.meta.title}</title>
      </Head>
      <h1 className="text-xl font-bold">{post.meta.title}</h1>
      <MDXRemote {...post.source} components={{ code: Snippet }} />
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const { content, meta } = getPostFromSlug(slug);
  const source = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  });

  return {
    props: {
      post: {
        source,
        meta
      }
    }
  };
};

export const getStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
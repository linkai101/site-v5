import { getContent } from 'lib/markdown';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { useMDXComponents } from 'mdx-components';
import SafariInner from './SafariInner';

export default async function Safari({ ...rest }: { [key: string]: string }) {
  const { content } = getContent('content/landing.mdx'); 

  return <SafariInner {...rest}>
    {/* @ts-ignore */}
    <MDXRemote source={content} components={useMDXComponents()}/>
  </SafariInner>;
}

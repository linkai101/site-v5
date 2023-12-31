import Link from 'next/link';
import type { MDXComponents } from 'mdx/types';

import Socials from 'components/Socials';
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Socials,
    h1: ({ children }) => <h1 className="text-3xl font-extrabold font-display mb-1">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-extrabold font-display mb-1">{children}</h2>,
    h3: ({ children }) => <h3 className="text-lg font-bold font-display mb-1">{children}</h3>,
    p: ({ children }) => <p className="mb-5 text-sm">{children}</p>,
    a: ({ href, children }) => <Link className="text-theme-primaryVariant hover:text-theme-primary font-medium underline cursor-pointer" href={href||""} target={href?.startsWith('/') ? "_self" : "_blank"} rel={href?.startsWith('/') ? "" : "noopener noreferrer"}>{children}</Link>,
    ul: ({ children }) => <ul className="list-disc list-outside mb-5">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-outside mb-5">{children}</ol>,
    li: ({ children }) => <li className="mb-3 ml-4 text-sm">{children}</li>,
    ...components,
  }
}
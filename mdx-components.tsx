import type { MDXComponents } from 'mdx/types';

import Socials from 'components/Socials';
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Socials,
    h1: ({ children }) => <h1 className="text-3xl font-extrabold font-display">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-extrabold font-display">{children}</h2>,
    h3: ({ children }) => <h3 className="text-lg font-bold font-display">{children}</h3>,
    p: ({ children }) => <p className="mb-5 text-sm">{children}</p>,
    a: ({ href, children }) => <a className="text-theme-primaryVariant hover:text-theme-primary font-medium underline cursor-pointer" href={href} target="_blank" rel="noopener noreferrer">{children}</a>,
    ...components,
  }
}
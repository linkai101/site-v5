import './globals.css';
import type { Metadata } from 'next';
import { MDXProvider } from '@mdx-js/react';

export const metadata: Metadata = {
  title: 'Linkai Wu',
  description: 'I\'m a maker, designer, and student. Welcome to my corner of the internet!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="Linkai Wu" key="ogsitename"/>
      </head>
      <body className="bg-theme-primaryVariant text-theme-onPrimary">
        {children}
      </body>
    </html>
  )
}

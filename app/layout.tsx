import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Linkai Wu',
  description: 'I\'m a student studying computer science, fascinated with the intersection of tech, art, and people.',
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
        <meta property="og:site_name" content="Linkai's site" key="ogsitename"/>
      </head>
      <body className="bg-theme-primaryVariant text-theme-onPrimary">
        {children}
      </body>
    </html>
  )
}

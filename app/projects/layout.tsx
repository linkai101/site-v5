import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio – Linkai Wu',
  description: 'A collection of my coding projects and stuff I\'ve been involved in. Welcome to my corner of the internet!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
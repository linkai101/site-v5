import type { Metadata } from 'next';

import Navbar from 'components/Navbar';
import Dock from 'components/Dock';
import VSCode from './VSCode';

export const metadata: Metadata = {
  title: 'Portfolio – Linkai Wu',
  description: 'A collection of my projects and stuff I\'ve been involved in. Welcome to my corner of the internet!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>
    <Navbar/>

    <VSCode className="
      mt-[calc(2.75rem)] lg:mt-0 lg:fixed lg:top-[2.75rem] lg:left-0
      min-h-[16rem] lg:min-h-0 lg:h-[calc(100vh-2.75rem-5.375rem)] lg:w-screen
    ">
      {children}
    </VSCode>

    <Dock/>
  </>;
}
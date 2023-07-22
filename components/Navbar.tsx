'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

import Notch from './Notch';

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile('ontouchstart' in window);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return <nav className="fixed top-0 h-[2.75rem] w-full group bg-theme-primary backdrop-blur-[2px] z-40">
    <ul className={`
      h-full px-4 flex items-center gap-5 overflow-x-auto
      text-theme-onPrimary font-display
    `}>
      <Link href="/">
        <div className="flex items-center gap-3">
          <div className={`h-6 w-6 flex justify-center items-center shrink-0 bg-white/10 rounded-full overflow-hidden`}>
            <span className="text-xs font-bold mt-0.5">LW</span>
          </div>

          <span className="text-lg font-semibold whitespace-nowrap">
            Linkai Wu
          </span>
        </div>
      </Link>

      <Link href="/">
        <li>
          home
        </li>
      </Link>

      <Link href="/portfolio">
        <li>
          portfolio
        </li>
      </Link>

      <Link href="/blog">
        <li>
          blog
        </li>
      </Link>

    </ul>

    {!isMobile &&
      // <img
      //   src="/assets/notch.svg/"
      //   className="h-[85%] absolute top-0 left-1/2 -translate-x-1/2 group-hover:pointer-events-none group-hover:opacity-50 transition duration-500 delay-100"
      // />
      <Notch
        className="h-[85%] absolute top-0 left-1/2 -translate-x-1/2 group-hover:pointer-events-none group-hover:opacity-50 transition duration-500 delay-100"
      />
    }
  </nav>;
}

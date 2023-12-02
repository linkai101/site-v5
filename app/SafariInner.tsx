"use client";
import { useState, useRef } from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { useMDXComponents } from 'mdx-components';
export default function SafariInner({ children, className, ...rest }: { children: any, className?: string, [key: string]: any }) {
  const [showScrollHint, setShowScrollHint] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);


  return <div className={`
    ${className}
    flex flex-col
    bg-theme-background text-theme-onBackground rounded-xl overflow-hidden shadow-2xl
  `} {...rest}>
    <div className="flex gap-4 bg-theme-surface">
      <div className="p-4 flex items-center gap-1.5">
        <div className="h-3 w-3 rounded-full bg-red-400"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
        <div className="h-3 w-3 rounded-full bg-green-400"></div>
      </div>
    
      <div className="py-1.5 flex gap-2.5">
        <div className="px-2.5 py-1 flex items-center gap-1.5 text-sm font-display bg-black/10 rounded-lg">
          👋
          <p className="mt-0.5">Welcome</p>
        </div>
      </div>
    </div>

    <div
      className="pl-6 pr-6 lg:pr-[calc(8rem+1.5rem)] py-6 flex-1 overflow-y-auto"
      ref={scrollRef}
      onScroll={() => {
        if (scrollRef.current) {
          const { scrollTop, scrollHeight, offsetHeight } = scrollRef.current;
          setShowScrollHint(scrollTop + offsetHeight < scrollHeight);
        }
      }}
    >
      {children}
    </div>

    <div className={`
      px-2.5 bg-theme-primary/75 rounded-full text-theme-onPrimary font-bold
      absolute bottom-3 left-12 -translate-x-[50%]
      ${showScrollHint ? "" : "opacity-0 pointer-events-none"}
      transition-opacity duration-300 pointer-events-none
    `}>
      <span className="text-sm font-medium">↓ scroll</span>
    </div>
  </div>;
}

import { MDXRemote } from 'next-mdx-remote/rsc';
import { getContent } from 'lib/markdown';
import { useMDXComponents } from 'mdx-components';

export default async function Safari({ className }: { className?: string }) {
  const { content } = getContent('content/landing.mdx'); 

  return <div className={`
    ${className}
    flex flex-col
    bg-theme-background text-theme-onBackground rounded-xl overflow-hidden shadow-2xl
  `}>
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
        {/* <div className="px-2.5 py-1 flex items-center gap-1.5 text-sm font-display bg-black/5 rounded-lg">
          <FaRegStar/>
          <span className="mt-0.5">Start Page</span>
        </div> */}
      </div>
    </div>

    <div className="pl-6 pr-6 lg:pr-[11.5rem] pt-6 pb-12 flex-1 overflow-y-auto">
      {/* @ts-ignore */}
      <MDXRemote source={content} components={useMDXComponents()}/>
    </div>
  </div>
}

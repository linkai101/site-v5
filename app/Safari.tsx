import Link from 'next/link';

export default function Safari({ className, ...rest }: { className?: string, [key: string]: any }) {
  return <div className={`
    flex flex-col
    bg-theme-background text-theme-onBackground rounded-xl overflow-hidden shadow-2xl
    ${className}
  `} {...rest}>
    <div className="px-4 py-1.5 flex gap-4 bg-theme-surface">
      <div className="flex items-center gap-1.5">
        <div className="h-3 w-3 rounded-full bg-red-400"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
        <div className="h-3 w-3 rounded-full bg-green-400"></div>
      </div>
    
      <div className="flex gap-2.5">
        <div className="px-2.5 py-1 flex items-center gap-1.5 text-sm font-display bg-black/10 rounded-lg">
          👋
          <p className="mt-0.5">Welcome</p>
        </div>
      </div>
    </div>

    <div className="px-6 py-6 flex-1 overflow-y-auto md:pr-[calc(23rem-min(56rem,100vw)+40rem+1rem)]">
      <h2 className="text-2xl font-display font-extrabold">
        Hi! I&apos;m Linkai.
      </h2>

      <p className="text-sm">
        📍 md & wi | 🏫 <Link href="https://wisc.edu" target="_blank" rel="noopener noreferrer" className="text-theme-primaryVariant font-medium hover:underline">uw-madison</Link> '27 | 🎓 <Link href="https://mbhs.edu" target="_blank" rel="noopener noreferrer" className="text-theme-primaryVariant font-medium hover:underline">mbhs</Link> '23
      </p>

      <p className="text-sm mt-4">
        I&apos;m a student studying <span className="font-semibold">computer science</span> at UW-Madison.
      </p>

      <p className="text-sm mt-4">
        SWE is cool, but I&apos;m also interested in game design, 3D modeling, and interactive storytelling.
        Generally, <span className="font-semibold">the intersection of tech, art, and people is where I like to be.</span>
      </p>

      <p className="text-sm mt-4">
        Keep scrolling to check out the <span className="underline">cool stuff</span> I&apos;ve been up to lately 🙃
      </p>
    </div>
  </div>;
}

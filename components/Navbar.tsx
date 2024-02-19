import Link from 'next/link';

export default function Navbar() {
  return <nav className="fixed top-0 h-[2.75rem] w-full group bg-theme-primary text-theme-onPrimary backdrop-blur-[2px] z-40">
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

      {/* <Link href="/">
        <li className="-mx-2.5 px-2.5 py-1 hover:bg-black/10 rounded-lg transition duration-500 delay-100">
          home
        </li>
      </Link>

      <Link href="/projects">
        <li className="-mx-2.5 px-2.5 py-1 hover:bg-black/10 rounded-lg transition duration-500 delay-100">
          projects
        </li>
      </Link> */}

      {/* <Link href="/blog">
        <li className="-mx-2.5 px-2.5 py-1 hover:bg-black/10 rounded-lg transition duration-500 delay-100">
          blog
        </li>
      </Link> */}

    </ul>
  </nav>;
}

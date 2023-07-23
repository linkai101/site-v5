
export default function Safari({ className }: { className?: string }) {
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

    <div className="pl-6 px-6 pt-6 pb-12 flex-1 overflow-y-auto md:mr-[calc(24vw)]">
      <h2 className="text-2xl font-extrabold font-display">
        Hi! I&apos;m Linkai. <span className="text-theme-onBackground/30 text-base">(he/him)</span>
      </h2>
      <p className="text-sm mt-0.5">
        📍 md | 🏫 <a href="https://wisc.edu" className="text-theme-primaryVariant underline" target="_blank" rel="noopener noreferrer">@uwmadison</a> &apos;27 | 🎓 <a href="https://mbhs.edu" className="text-theme-primaryVariant underline" target="_blank" rel="noopener noreferrer">mbhs</a> &apos;23
      </p>

      <h3 className="font-semibold mt-6">
        I&apos;m a maker, designer, and student.
      </h3>
      <p className="text-sm">
        CS &amp; tech has been a passion of mine since grade school.
        My work is mostly in <a className="text-theme-primaryVariant font-medium underline decoration-2">fullstack web dev</a>, but I&apos;m currently exploring <a className="text-theme-primaryVariant font-medium underline decoration-2">3D modeling</a> and <a className="text-theme-primaryVariant font-medium underline decoration-2">3D printing</a>.
        I'm a rising freshman at UW-Madison with an intended major of CS.
      </p>
    </div>
  </div>
}

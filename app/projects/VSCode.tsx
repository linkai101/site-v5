
export default function VSCode({ className }: { className?: string }) {
  return <div className={`
    ${className}
    flex flex-col
    bg-theme-backgroundDark text-theme-onBackgroundDark rounded-xl overflow-hidden shadow-2xl
  `}>
    <div className="flex gap-4 items-center relative bg-theme-surfaceDark shadow-lg">
      <div className="px-2 py-2 flex items-center gap-1.5">
        <div className="h-3 w-3 rounded-full bg-red-400"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
        <div className="h-3 w-3 rounded-full bg-green-400"></div>
      </div>
    
      <p className="absolute left-1/2 -translate-x-1/2 text-sm font-semibold font-display">
        Projects — linkaiwu
      </p>
    </div>

    <div className="flex-1 flex overflow-hidden">
      <div className="h-full w-14 bg-theme-surfaceDark text-theme-surfaceDark"></div>

      <div className="h-full w-64"></div>
      
      <div className="h-full flex-1 flex flex-col border-l-2 border-theme-surfaceDark/40">
        <div className="h-10 bg-theme-backgroundDark"></div>

        <div className="flex-1 text-theme-surfaceDark bg-theme-surfaceDark/40"></div>
      </div>
    </div>
  </div>
}

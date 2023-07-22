
export default function Preview({ className }: { className?: string }) {
  return <div className={`
    ${className}
    flex flex-col
    bg-theme-backgroundDark text-theme-onBackgroundDark rounded-xl overflow-hidden shadow-2xl
    `}>
    <div className="flex gap-4 items-center bg-theme-surfaceDark">
      <div className="p-4 flex items-center gap-1.5">
        <div className="h-3 w-3 rounded-full bg-red-400"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
        <div className="h-3 w-3 rounded-full bg-green-400"></div>
      </div>
    
      <p className="font-semibold font-display">
        linkai.jpg
      </p>
    </div>

    <div className="flex-1 flex items-center justify-center overflow-hidden">
      <img
        src="/assets/linkai.jpg"
        className="h-[calc(100%-4rem)] w-[calc(100%-4rem)] object-contain"
      />
    </div>
  </div>
}

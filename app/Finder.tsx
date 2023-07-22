
export default function Finder({ className }: { className?: string }) {
  return <div className={`
    ${className}
    flex
    bg-theme-background text-theme-onBackground rounded-xl overflow-hidden shadow-2xl
    `}>
    <div className="min-w-[8rem] flex gap-4 bg-theme-surface">
      <div className="p-4 flex gap-1.5">
        <div className="h-3 w-3 rounded-full bg-red-400"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
        <div className="h-3 w-3 rounded-full bg-green-400"></div>
      </div>
    </div>
    <div className="flex-1 flex flex-col">
      <div className="px-8 py-4 bg-theme-surface/50">
        <p className="font-semibold font-display">
          Documents
        </p>
      </div>
      <div className="px-3 py-5 flex-1 flex items-start gap-8 flex-wrap overflow-y-auto">
        <div className="flex flex-col">
          <img
            src="/assets/folder.svg"
            className="mx-2 w-16"
          />
          <p className="text-xs text-center mt-3">
            Socials
          </p>
        </div>
      </div>
    </div>
  </div>
}


export default function Photoshop({ className, ...rest }: { className?: string, [key: string]: any }) {
  return <div
    className={`
      flex flex-col relative
      rounded-xl overflow-hidden bg-theme-backgroundDark text-theme-onBackgroundDark shadow-2xl
      ${className}
    `}
    {...rest}
  >
    <div className="px-2 py-1 flex gap-4 items-center justify-center bg-theme-surfaceDark text-theme-onSurfaceDark">
      <p className="text-sm font-display pt-0.5">
        Adobe Photoshop
      </p>

      <div className="absolute left-4 flex items-center gap-1.5">
        <div className="h-3 w-3 rounded-full bg-red-400"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
        <div className="h-3 w-3 rounded-full bg-green-400"></div>
      </div>
    </div>

    <div className="h-6 bg-theme-surfaceDark text-theme-onSurfaceDark border-y border-theme-backgroundDark"></div>

    <div className="flex-1 flex">
      <div className="w-5 md:w-10 bg-theme-surfaceDark text-theme-onSurfaceDark border-r border-theme-backgroundDark"></div>
      <div className="flex-1 flex items-center justify-center">
        <img
          src="/assets/the_boys_crossing_the_delaware.jpg"
          className="h-[calc(100%-4rem)] w-[calc(100%-4rem)] object-contain"
        />
      </div>
      <div className="w-5 md:w-60 bg-theme-surfaceDark text-theme-onSurfaceDark border-r border-theme-backgroundDark">
        {/* <div className="aspect-video relative">
          <div className="absolute inset-4 bg-gradient-to-r from-white to-[#FF0000]"/>
          <div className="absolute inset-4 bg-gradient-to-t from-black to-transparent"/>
        </div> */}
      </div>
    </div>
  </div>;
}

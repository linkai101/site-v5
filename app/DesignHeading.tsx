
export default function DesignHeading({ className, ...rest }: { className?: string, [key: string]: any }) {
  return <div className={`
      flex flex-col
      bg-theme-backgroundDark text-theme-onBackgroundDark rounded-xl overflow-hidden shadow-2xl
      ${className}
      `} 
      style={{
        backgroundImage: "radial-gradient(#ffffff20 1px, transparent 0)",
        backgroundSize: "24px 24px",
      }}
      {...rest}
    >
    <div className="px-4 py-4 flex gap-4 items-center bg-theme-surfaceDark text-theme-onSurfaceDark">
      <div className="flex items-center gap-1.5">
        <div className="h-3 w-3 rounded-full bg-red-400"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
        <div className="h-3 w-3 rounded-full bg-green-400"></div>
      </div>
    </div>

    <div className="flex-1 flex items-center justify-center">
      <h2 className="text-5xl text-theme-onBackgroundDark/50 text-center font-display2 font-extrabold uppercase pb-12 mt-8">
        I <span className="fancy text-theme-onBackgroundDark">design</span> cool stuff.
      </h2>
    </div>
  </div>;
}


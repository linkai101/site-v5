import Link from "next/link";
import CodeCallout from "./CodeCallout";

export default function Freeform({ className, ...rest }: { className?: string, [key: string]: any }) {
  return <div className={`flex flex-col relative ${className}`} {...rest}>
    <div
      className="
        flex flex-col relative h-full
        rounded-xl overflow-hidden bg-theme-primary text-theme-onPrimary shadow-2xl
      "
      style={{
        backgroundImage: "radial-gradient(#ffffff75 1px, transparent 0)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="px-4 py-4 flex gap-4 items-center bg-theme-surface text-theme-onSurface">
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-400"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-400"></div>
        </div>
      </div>

      <div className="h-full pt-12 pb-20 flex flex-col">
        <h2 className="
          md:absolute md:top-[7rem] w-full
          gap-5 md:gap-7
          text-5xl md:text-6xl text-center font-doodle font-bold
        ">
          I <CodeCallout className="text-5xl mx-2 md:mx-4"/> cool stuff.
        </h2>

        <div className="md:absolute top-[20rem] left-[37rem] mt-24 md:mt-0">
          <h3 className="px-4 text-4xl text-right md:text-left font-handwriting font-bold leading-7">
            STEM to the Sky's website
          </h3>
          <p className="px-4 text-xl text-right md:text-left font-handwriting leading-5 mt-1">
            Interviews with professionals showcasing careers in STEM.
          </p>
          <p className="px-4 text-xl text-right md:text-left font-handwriting leading-5 mt-3">
            (Next.js, TailwindCSS, Sanity CMS)
          </p>
        </div>

        <StemToTheSky className="block md:hidden aspect-[4/3] scale-100 -translate-x-24 my-6"/>

        <div className="md:absolute bottom-[10rem] right-[37rem] mt-12 md:mt-0">
          <h3 className="px-4 text-4xl text-left md:text-right font-handwriting font-bold leading-7">
            Oracle of Blair &apos;22
          </h3>
          <p className="px-4 text-xl text-left md:text-right font-handwriting leading-5 mt-1">
            Forecast of 2022 US elections, my HS senior class project!
          </p>
          <p className="px-4 text-xl text-left md:text-right font-handwriting leading-5 mt-3">
            (Next.js, SVGs, Minitab, &amp; more)
          </p>
        </div>

        <OracleOfBlair className="block md:hidden aspect-[4/3] scale-100 translate-x-24 my-6"/>
        
        <Link href="https://github.com/linkai101" target="_blank" rel="noreferrer noopener" className="absolute -bottom-1.5 -right-1.5 group">
          <p className="w-24 absolute top-0 right-14 text-right text-3xl font-handwriting font-bold">
            click me!
          </p>
          <img src="/assets/github.svg" className="w-12 aspect-square -rotate-12 group-hover:-rotate-[24deg] group-hover:scale-110 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-500 ease-in-out"/>
        </Link>
      </div>
    </div>
    
    <StemToTheSky className="hidden md:block absolute top-[18rem] -left-16 w-[40rem] h-[24rem] scale-100 hover:scale-[1.02] transition-transform ease-in-out"/>
    <OracleOfBlair className="hidden md:block absolute top-[32rem] -right-16 w-[40rem] h-[24rem] scale-100 hover:scale-[1.02] transition-transform ease-in-out"/>
  </div>;
}


function StemToTheSky({ className, ...rest }: { className?: string, [key: string]: any }) {
  return <Link href="https://stemtothesky.org" target="_blank" rel="noopener noreferrer">
    <div className={`
      flex flex-col
      rounded-xl overflow-hidden shadow-2xl
      ${className}
    `} {...rest}>
      <div className="flex gap-4 bg-theme-surface">
        <div className="px-3 py-2 flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-400"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-400"></div>
        </div>
      </div>

      <div className="h-full">
        <iframe
          src="https://stemtothesky.org/"
          className="w-[150%] h-[150%] border-none scale-[0.667] -translate-x-[16.667%] -translate-y-[16.667%] pointer-events-none"
          title="STEM to the Sky"
          tabIndex={-1}
        />
      </div>
    </div>
  </Link>;
}

function OracleOfBlair({ className, ...rest }: { className?: string, [key: string]: any }) {
    return <Link href="https://polistat-site-2022.vercel.app" target="_blank" rel="noopener noreferrer">
      <div className={`
        flex flex-col
        rounded-xl overflow-hidden shadow-2xl
        ${className}
      `} {...rest}>
        <div className="flex gap-4 bg-theme-surface">
          <div className="px-3 py-2 flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-400"></div>
          </div>
        </div>

        <div className="h-full bg-white">
          <iframe
            src="https://polistat-site-2022.vercel.app/"
            className="w-[200%] h-[200%] border-none scale-[0.5] -translate-x-[25%] -translate-y-[25%] pointer-events-none"
            title="Oracle of Blair 2022"
            tabIndex={-1}
          />
        </div>
      </div>
    </Link>;
}


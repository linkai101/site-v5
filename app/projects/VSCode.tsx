import Explorer from './Explorer';

import { FaRegCopy, FaInfoCircle } from 'react-icons/fa';

export default function VSCode({ className, children }: { className?: string, children: React.ReactNode }) {
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
        Welcome.md — Projects
      </p>
    </div>

    <div className="flex-1 flex items-stretch overflow-hidden">
      <div className="w-12 flex flex-col bg-theme-surfaceDark/50 text-theme-onSurfaceDark">
        <div className="aspect-square flex items-center justify-center border-l border-orange-500">
          <FaRegCopy className="text-2xl"/>
        </div>
      </div>

      <Explorer className="w-64"/>
      
      <div className="flex-1 max-w-[calc(100%-19rem)] flex flex-col border-l-2 border-theme-surfaceDark/40">
        <div className="h-10 flex text-sm overflow-x-auto bg-theme-backgroundDark shadow-lg">
          <div className="pl-2.5 pr-5 flex items-center gap-2 border-t border-orange-500 bg-theme-surfaceDark/40 cursor-pointer">
            <FaInfoCircle className="text-base text-blue-300"/>
            <span className="pt-1">Welcome.md</span>
          </div>

          <div className="pl-2.5 pr-5 flex items-center gap-2 italic cursor-pointer">
            <FaInfoCircle className="text-base text-blue-300"/>
            <span className="pt-1 text-theme-onSurfaceDark/75">README.md</span>
            <span className="pt-1 text-xs text-theme-onSurfaceDark/50">site-v5</span>
          </div>
        </div>

        <div className="flex-1 text-theme-onSurfaceDark bg-theme-surfaceDark/40">
          {children}
        </div>
      </div>
    </div>
  </div>
}

import { FiChevronRight, FiChevronDown } from 'react-icons/fi';
import { FaInfoCircle } from 'react-icons/fa';
import { FcFolder } from 'react-icons/fc';

export default function Explorer({ className }: { className?: string }) {
  return <>
    <div className={`px-4 py-3 ${className}`}>
      <p className="text-xs uppercase">
        Explorer
      </p>

      <p className="text-xs font-semibold uppercase mt-5">
        Projects
      </p>
      <ul className="pl-4 py-1 flex flex-col gap-1 text-sm">
        <li className="flex items-center gap-2 relative cursor-pointer">
          <FaInfoCircle className="text-base text-blue-300"/>
          <span className="pt-1">Welcome.md</span>
        </li>

        <li>
          <div className="flex items-center gap-2 relative cursor-pointer">
            <FiChevronDown className="absolute right-[calc(100%+0.25rem)] text-lg text-theme-onSurfaceDark/50"/>
            <FcFolder className="text-lg"/>
            <span className="pt-1">site-v5</span>
          </div>

          <ul className="-ml-4 pl-6 flex flex-col gap-1 text-xs border-l-2 border-theme-surfaceDark mt-0.5">
            <li className="flex items-center gap-2 relative cursor-pointer">
              <FaInfoCircle className="text-base text-blue-300"/>
              <span className="pt-1">README.md</span>
            </li>
          </ul>
        </li>

        <li>
          <div className="flex items-center gap-2 relative cursor-pointer">
            <FiChevronRight className="absolute right-[calc(100%+0.25rem)] text-lg text-theme-onSurfaceDark/50"/>
            <FcFolder className="text-lg"/>
            <span className="pt-1">Oracle of Blair 2022</span>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-2 relative cursor-pointer">
            <FiChevronRight className="absolute right-[calc(100%+0.25rem)] text-lg text-theme-onSurfaceDark/50"/>
            <FcFolder className="text-lg"/>
            <span className="pt-1">STEM to the Sky</span>
          </div>
        </li>
      </ul>
    </div>
  </>;
}

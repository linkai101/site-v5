import Link from "next/link";
import { FiMail, FiGithub, FiLinkedin, FiYoutube } from 'react-icons/fi';

export default function Socials() {
  return <div className="flex gap-3 overflow-x-auto overflow-y-hidden mb-5">
    <Link href="mailto:linkai@linkaiwu.com">
      <div className="px-2 h-12 flex items-end justify-center gap-2.5 rounded-lg bg-theme-surface/75 hover:bg-theme-surface">
        <FiMail size="2.15rem" className="text-theme-primaryVariant stroke-[2.2px]"/>
        <div className="py-0.5">
          <p className="text-xs text-theme-primaryVariant font-extrabold">
            Contact me
          </p>
          <p className="text-xs font-medium -mt-0.5">
            linkai@linkaiwu.com
          </p>
        </div>
      </div>
    </Link>

    <Link href="https://github.com/linkai101" target="_blank" rel="noopener noreferrer">
      <div className="h-12 w-12 flex items-end justify-center rounded-lg bg-theme-surface/75 hover:bg-theme-surface">
        <FiGithub size="2.25rem" className="text-theme-primaryVariant stroke-[2.2px]"/>
      </div>
    </Link>

    <Link href="https://linkedin.com/in/linkaiwu" target="_blank" rel="noopener noreferrer">
      <div className="h-12 w-12 flex items-end justify-center rounded-lg bg-theme-surface/75 hover:bg-theme-surface">
        <FiLinkedin size="2rem" className="text-theme-primaryVariant stroke-[2.2px] mb-[0.1rem]"/>
      </div>
    </Link>
    
    {/* <Link href="https://youtube.com/@linkai" target="_blank" rel="noopener noreferrer">
      <div className="h-12 w-12 flex items-end justify-center rounded-lg bg-theme-surface/75 hover:bg-theme-surface">
        <FiYoutube size="2.15rem" className="text-theme-primaryVariant stroke-[2.2px] -mb-[0.1rem]"/>
      </div>
    </Link> */}
  </div>;
}

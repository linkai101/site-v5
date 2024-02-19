import Link from "next/link";
import MessageBubble from "./MessageBubble";
import MessageLinkBubble from "./MessageLinkBubble";

export default function Messages({ className, ...rest }: { className?: string, [key: string]: any }) {
  return <div className={`
    ${className}
    flex rounded-xl overflow-hidden shadow-2xl
    `}
    {...rest}
  >
    <div className="md:w-[18rem] hidden md:flex flex-col gap-4 bg-theme-surface/90">
      <div className="p-4 flex gap-1.5">
        <div className="h-3 w-3 rounded-full bg-red-400"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
        <div className="h-3 w-3 rounded-full bg-green-400"></div>
      </div>

      <div className="px-3 flex flex-col">
        <div className="h-16 px-2 py-2 flex gap-2 bg-blue-400 text-white rounded-md">
          <div className="p-1 h-full aspect-square">
            <div className="h-full w-full rounded-full overflow-hidden">
              <img src="/assets/linkai.jpg" className="w-full object-contain scale-125"/>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold">
              Linkai Wu
            </p>
            <p className="text-xs">
              Thanks for visiting my site! See you around 👋
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="flex-1 flex flex-col bg-theme-background text-theme-onBackground">
      <div className="pt-4 pb-3 px-4 bg-theme-surface text-theme-onSurface text-xs">
        <span className="text-theme-onBackground/60">To:</span> Linkai Wu
      </div>

      <div className="flex-1 flex flex-col px-4 overflow-y-auto">
        <h2 className="flex mt-8 md:mt-12">
          <MessageBubble className="px-6 py-4 text-4xl">
            I <span className="text-amber-500 font-semibold">create</span> cool stuff.
          </MessageBubble>
        </h2>

        <div className="flex mt-8">
          <MessageBubble className="px-4 py-2 text-sm">
            Let&apos;s chat!
          </MessageBubble>
        </div>

        <div className="flex mt-2">
          <Link href="mailto:linkai@linkaiwu.com" target="_blank" rel="noopener noreferrer">
            <MessageLinkBubble className="px-3 py-2 text-sm" icon={<span className="text-3xl">📧</span>}>
              <p className="text-xs leading-4 font-semibold">
                Email
              </p>
              <p className="text-[0.7rem] leading-3 text-theme-onBackground/50">
                linkai@linkaiwu.com
              </p>
            </MessageLinkBubble>
          </Link>
        </div>

        <div className="flex mt-2">
          <Link href="https://www.linkedin.com/in/linkaiwu/" target="_blank" rel="noopener noreferrer">
            <MessageLinkBubble className="px-3 py-2 text-sm" icon={<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABDUlEQVR4AWP4////gOLB44D6nTcsGIo33QHi/zTGd0B2YTiAPpYjHIHNAf/piQk6wGPW8f/rLz8HYRCbXg5AWI4GQGJ0cwDY12gAJDbcHUA4CkZAIqQUK7Ts/m/SfxBMs5RupswBaACr+P47b/5zlG/5DyzZ/r/+8hNF7vuvP//nn3r0X6JhJ+0ccPrR+/+H7735jw9cf/n5v0D1Nuo5gBxQve06zR0AjoL7b7/+//zjN4bc+ScfaOeA33///k9Yfg4mDw7u/Xdeo6uhnQP6D93FMNxlxjF0ZbRzgMXEQ9iyI90cALIMJoccDXRzAK6CZog6YNQBow6gIx54Bwx4x2RAu2bAysoEZu9o7xgAQrvkxt3WZi0AAAAASUVORK5CYII="/>}>
              <p className="text-xs leading-4 font-semibold">
                Linkedin
              </p>
              <p className="text-[0.7rem] leading-3 text-theme-onBackground/50">
                linkedin.com/in/linkaiwu
              </p>
            </MessageLinkBubble>
          </Link>
        </div>

        <div className="flex mt-8 mb-4">
          <MessageBubble className="px-4 py-2 text-sm">
            Thanks for visiting my site! See you around 👋
          </MessageBubble>
        </div>
      </div>

      <div className="p-2">
        <input type="text" className="px-3 py-1 w-full text-xs bg-theme-background text-theme-onBackground rounded-full border-theme-surface border-2 outline-none cursor-not-allowed" disabled/>
      </div>
    </div>
  </div>
}

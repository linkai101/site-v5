
export default function MessageLinkBubble({ children, icon, className, ...rest }: { children: any, icon?: any, className?: string, [key: string]: any }) {
  return (
    <div className={`ml-[0.375rem] flex gap-3 relative z-10 bg-theme-surface text-theme-onSurface rounded-xl ${className}`} {...rest}>
      <div className="py-0.5 flex-1">{children}</div>
      {icon &&
        <div className="h-8 aspect-square flex items-center justify-center rounded-md overflow-hidden">{icon}</div>
      }
    </div>
  );
}

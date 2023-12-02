"use client";
import Link from 'next/link';
// import { useEffect } from "react";

// @ts-ignore
// import rough from "roughjs/bundled/rough.esm";
import { FaCaretDown } from 'react-icons/fa';

// https://www.freeconvert.com/png-to-svg

export default function Dock({ className }: { className?: string }) {
  // useEffect(() => {
  //   function handleResize() {
  //     renderDockBg();
  //   }
  //   window.addEventListener('resize', handleResize);
  //   renderDockBg();
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  // function renderDockBg() {
  //   const dockBg = document.getElementById("dockBg")!;
  //   dockBg.innerHTML = '';
  //   const rc = rough.svg(dockBg as any);

  //   const dockW = dockBg.clientWidth;
  //   const dockH = dockBg.clientHeight;
  //   const dockRadius = 24;
  //   const dockBgPath = rc.path(`M${dockRadius},0 L${dockW-dockRadius},0 Q${dockW},0 ${dockW},${dockRadius} L${dockW},${dockH-dockRadius} Q${dockW},${dockH} ${dockW-dockRadius},${dockH} L${dockRadius},${dockH} Q0,${dockH} 0,${dockH-dockRadius} L0,${dockRadius} Q0,0 ${dockRadius},0 Z`, {
  //     fill: 'rgba(0, 0, 0, 0.5)',
  //     fillWeight: 2,
  //     fillStyle: 'zigzag',
  //     roughness: 0.5,
  //   });
    
  //   dockBg.appendChild(dockBgPath);
  // }

  return <div className={`${className} h-20 w-full flex justify-center`}>
    <div className="
      px-1 relative max-w-[calc(100%-0.5rem)]
      shadow-2xl rounded-2xl
      bg-black/25 backdrop-blur-sm border border-theme-surface/25
    ">
      {/* <svg id="dockBg" className="w-full h-full absolute top-0 left-0 -z-10"/> */}

      <ul className="h-full px-3 pt-3 pb-4 flex items-center gap-3.5 overflow-x-auto sm:overflow-x-visible text-sm text-black">
        <li className="h-full aspect-square relative flex items-center group">
          <img src="/assets/finder.svg"/>
          <div className="h-1 aspect-square absolute -bottom-3.5 left-1/2 -translate-x-1/2 bg-theme-surface rounded-full"/>
          
          <div className="opacity-0 group-hover:opacity-100 px-3 pt-1 pb-0.5 absolute -top-12 left-1/2 -translate-x-1/2 text-theme-onBackgroundDark bg-theme-backgroundDark/50 rounded-md transition duration-100">
            Finder
            <FaCaretDown className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-xl text-theme-backgroundDark/50"/>
          </div>
        </li>
        <li className="h-full aspect-square relative flex items-center group">
          <img src="/assets/safari.svg"/>
          <div className="h-1 aspect-square absolute -bottom-3.5 left-1/2 -translate-x-1/2 bg-theme-surface rounded-full"/>
          
          <div className="opacity-0 group-hover:opacity-100 px-3 pt-1 pb-0.5 absolute -top-12 left-1/2 -translate-x-1/2 text-theme-onBackgroundDark bg-theme-backgroundDark/50 rounded-md transition duration-100">
            Safari
            <FaCaretDown className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-xl text-theme-backgroundDark/50"/>
          </div>
        </li>
        <li className="h-full aspect-square relative flex items-center group">
          <img src="/assets/preview.svg" className="scale-110 mt-[2px]"/>
          <div className="h-1 aspect-square absolute -bottom-3.5 left-1/2 -translate-x-1/2 bg-theme-surface rounded-full"/>
          
          <div className="opacity-0 group-hover:opacity-100 px-3 pt-1 pb-0.5 absolute -top-12 left-1/2 -translate-x-1/2 text-theme-onBackgroundDark bg-theme-backgroundDark/50 rounded-md transition duration-100">
            Preview
            <FaCaretDown className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-xl text-theme-backgroundDark/50"/>
          </div>
        </li>

        <div className="mx-1.5 h-full border-[0.5px] border-slate-400/75 scale-y-110"/>

        {/* <li className="h-full aspect-square relative flex items-center group">
          <Link href="/projects">
            <img src="/assets/freeform.svg"/>
          </Link>
          
          <div className="opacity-0 group-hover:opacity-100 px-3 pt-1 pb-0.5 absolute -top-12 left-1/2 -translate-x-1/2 text-theme-onBackgroundDark bg-theme-backgroundDark/50 rounded-md transition duration-100">
            Freeform
            <FaCaretDown className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-xl text-theme-backgroundDark/50"/>
          </div>
        </li>
        <li className="h-full aspect-square relative flex items-center group">
          <Link href="/blog">
            <img src="/assets/notes.svg"/>
          </Link>
          
          <div className="opacity-0 group-hover:opacity-100 px-3 pt-1 pb-0.5 absolute -top-12 left-1/2 -translate-x-1/2 text-theme-onBackgroundDark bg-theme-backgroundDark/50 rounded-md transition duration-100">
            Notes
            <FaCaretDown className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-xl text-theme-backgroundDark/50"/>
          </div>
        </li> */}
        {/* <li className="h-full aspect-square bg-green-400 rounded-full">Spotify</li>
        <li className="h-full aspect-square bg-[#5865F2] rounded-xl">Discord</li> */}

        {/* <div className="mx-1.5 h-full border-[0.5px] border-slate-400/75 scale-y-110"/> */}

        <li className="h-full aspect-square relative flex items-center group">
          <img src="/assets/trashfull.svg" className="scale-[1.2]"/>
          
          <div className="opacity-0 group-hover:opacity-100 px-3 pt-1 pb-0.5 absolute -top-12 left-1/2 -translate-x-1/2 text-theme-onBackgroundDark bg-theme-backgroundDark/50 rounded-md transition duration-100">
            Trash
            <FaCaretDown className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-xl text-theme-backgroundDark/50"/>
          </div>
        </li>
      </ul>
    </div>
  </div>;
}

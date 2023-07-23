"use client";
import { useEffect } from "react";

// @ts-ignore
import rough from "roughjs/bundled/rough.esm";

export default function Dock() {
  useEffect(() => {
    function handleResize() {
      renderDockBg();
    }
    window.addEventListener('resize', handleResize);
    renderDockBg();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function renderDockBg() {
    const dockBg = document.getElementById("dockBg")!;
    dockBg.innerHTML = '';
    const rc = rough.svg(dockBg as any);

    const dockW = dockBg.clientWidth;
    const dockH = dockBg.clientHeight;
    const dockRadius = 24;
    const dockBgPath = rc.path(`M${dockRadius},0 L${dockW-dockRadius},0 Q${dockW},0 ${dockW},${dockRadius} L${dockW},${dockH-dockRadius} Q${dockW},${dockH} ${dockW-dockRadius},${dockH} L${dockRadius},${dockH} Q0,${dockH} 0,${dockH-dockRadius} L0,${dockRadius} Q0,0 ${dockRadius},0 Z`, {
      fill: 'rgba(0, 0, 0, 0.5)',
      fillWeight: 2,
      fillStyle: 'zigzag',
      roughness: 0.5,
    });
    
    dockBg.appendChild(dockBgPath);
  }

  return <div className="
    h-20 max-w-[calc(100vw-1rem)] px-[3px]
    fixed bottom-1.5 left-1/2 -translate-x-1/2
    shadow-2xl rounded-2xl
  ">
    <svg id="dockBg" className="w-full h-full absolute top-0 left-0 -z-10"/>

    <ul className="h-full px-3 pt-3 pb-4 flex items-center gap-3.5 overflow-x-auto text-sm text-black">
      <li className="h-full aspect-square relative">
        <img src="/assets/finder.svg"/>
        <div className="h-1 aspect-square absolute -bottom-3.5 left-1/2 -translate-x-1/2 bg-theme-surface rounded-full"/>
      </li>
      <li className="h-full aspect-square relative">
        <img src="/assets/safari.svg"/>
        <div className="h-1 aspect-square absolute -bottom-3.5 left-1/2 -translate-x-1/2 bg-theme-surface rounded-full"/>
      </li>
      <li className="h-full aspect-square relative">
        <img src="/assets/preview.svg" className="scale-110 mt-[2px]"/>
        <div className="h-1 aspect-square absolute -bottom-3.5 left-1/2 -translate-x-1/2 bg-theme-surface rounded-full"/>
      </li>

      <div className="mx-1.5 h-full border-[0.5px] border-slate-400/75 scale-y-110"/>

      <li className="h-full aspect-square">
        <img src="/assets/vscode.svg"/>
      </li>
      <li className="h-full aspect-square">
        <img src="/assets/notes.svg"/>
      </li>
      {/* <li className="h-full aspect-square bg-green-400 rounded-full">Spotify</li>
      <li className="h-full aspect-square bg-[#5865F2] rounded-xl">Discord</li> */}

      <div className="mx-1.5 h-full border-[0.5px] border-slate-400/75 scale-y-110"/>

      <img src="/assets/trashfull.svg" className="h-full scale-[1.2]"/>
    </ul>
  </div>;
}

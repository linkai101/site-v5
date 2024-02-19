"use client";
import { useEffect, useRef } from "react";

// @ts-ignore
import rough from "roughjs/bundled/rough.esm";

export default function CodeCallout({ className, ...rest }: { className?: string, [key: string]: any }) {
  const codeBgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    function handleResize() {
      draw();
    }
    window.addEventListener('resize', handleResize);
    setTimeout(() => {
      draw();
    }, 500);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function draw() {
    const codeBg = codeBgRef.current;
    if (!codeBg) return;
    codeBg.innerHTML = '';
    const rc = rough.svg(codeBg as any);

    const codeBgW = codeBg.clientWidth;
    const codeBgH = codeBg.clientHeight;
    const codeBgR = 24;
    const codeBgPath = rc.path(`M${codeBgR},0 L${codeBgW-codeBgR},0 Q${codeBgW},0 ${codeBgW},${codeBgR} L${codeBgW},${codeBgH-codeBgR} Q${codeBgW},${codeBgH} ${codeBgW-codeBgR},${codeBgH} L${codeBgR},${codeBgH} Q0,${codeBgH} 0,${codeBgH-codeBgR} L0,${codeBgR} Q0,0 ${codeBgR},0 Z`, {
      fill: 'rgba(60, 60, 62, 0.9)',
      fillWeight: 6,
      fillStyle: "zigzag",
      hachureGap: 8,
      roughness: 2,
      stroke: 'rgba(60, 60, 62, 0.9)',
    });
    codeBg.appendChild(codeBgPath);
  }

  return (
    <span className={`font-mono relative z-10 overflow-visible ${className}`} {...rest}>
      <svg ref={codeBgRef} className="absolute -top-2 -left-2 w-[calc(100%+1rem)] h-[calc(100%+1rem)] -z-10"/>
      <span className="z-50">code</span>
    </span>
  );
}

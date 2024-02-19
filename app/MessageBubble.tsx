"use client";
import { useEffect, useRef } from "react";

// @ts-ignore
import rough from "roughjs/bundled/rough.esm";

export default function MessageBubble({ children, className, ...rest }: { children: any, className?: string, [key: string]: any }) {
  const bubbleBgRef = useRef<SVGSVGElement>(null);

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
    const bubbleBg = bubbleBgRef.current;
    if (!bubbleBg) return;
    bubbleBg.innerHTML = '';
    const rc = rough.svg(bubbleBg as any);
    const bubbleBgW = bubbleBg.clientWidth;
    const bubbleBgH = bubbleBg.clientHeight;
    const bubbleBgR = bubbleBgH/2;
    const stemOffset = 12;
    const bubbleBgPath = rc.path(`M${stemOffset+bubbleBgR},0 L${bubbleBgW-bubbleBgR},0 Q${bubbleBgW},0 ${bubbleBgW},${bubbleBgR} L${bubbleBgW},${bubbleBgH-bubbleBgR} Q${bubbleBgW},${bubbleBgH} ${bubbleBgW-bubbleBgR},${bubbleBgH} L${stemOffset+bubbleBgR},${bubbleBgH} Q${stemOffset},${bubbleBgH} ${stemOffset},${bubbleBgH-bubbleBgR} L${stemOffset},${bubbleBgR} Q${stemOffset},0 ${stemOffset+bubbleBgR},0 Z`, {
      fill: 'rgba(231, 232, 236)',
      fillWeight: 4,
      fillStyle: "solid",
      roughness: 0.5,
      stroke: 'rgba(231, 232, 236)',
    });
    const bubbleStemPath = rc.path(`M0,${bubbleBgH} Q${stemOffset},${bubbleBgH} ${stemOffset},${bubbleBgH-stemOffset*2} L${stemOffset*2},${bubbleBgH-stemOffset*2} Q${stemOffset*2},${bubbleBgH} 0,${bubbleBgH}`, {
      fill: 'rgba(231, 232, 236)',
      fillWeight: 4,
      fillStyle: "solid",
      roughness: 0.5,
      stroke: 'rgba(231, 232, 236)',
    });
    bubbleBg.appendChild(bubbleBgPath);
    bubbleBg.appendChild(bubbleStemPath);
  }

  return (
    <div className={`relative z-10 overflow-visible ${className}`} {...rest}>
      <svg ref={bubbleBgRef} className="absolute top-0 -left-[0.375rem] w-full h-full -z-10"/>
      <div>{children}</div>
    </div>
  );
}

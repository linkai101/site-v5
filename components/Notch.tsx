"use client";
import { useEffect } from "react";


// @ts-ignore
import rough from "roughjs/bundled/rough.esm";

export default function Notch({ ...rest }) {
  useEffect(() => {
    const notch = document.getElementById("notch")!;
    const rc = rough.svg(notch as any);

    const notchPath = rc.path(`M0,0 Q20,0 20,20 L20,60 Q20,100 60,100 L480,100 Q520,100 520,60 L520,20 Q520,0 540,0 Z`, {
      fill: 'rgba(0, 0, 0, 1)',
      fillWeight: 2,
      fillStyle: 'zigzag',
      roughness: 0.5,
    });
    
    notch.appendChild(notchPath);
  }, []);

  return <svg id="notch" viewBox="0 0 540 100" {...rest}/>;
}

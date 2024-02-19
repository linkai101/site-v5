"use client";
import { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { OrbitControls } from "@react-three/drei";
// import { EffectComposer, Outline } from "@react-three/postprocessing";

export default function Maya({ className, ...rest }: { className?: string, [key: string]: any }) {
  const axe = useLoader(FBXLoader, '/assets/axe.fbx');

  return <div
    className={`
      flex flex-col relative
      rounded-xl overflow-hidden bg-theme-backgroundDark text-theme-onBackgroundDark shadow-2xl
      ${className}
    `}
    {...rest}
  >
    <div className="px-2 py-1 flex gap-4 items-center justify-center bg-theme-surfaceDark text-theme-onSurfaceDark">
      <p className="text-sm font-display font-semibold opacity-75 pt-0.5">
        axe.mb - Autodesk MAYA
      </p>

      <div className="absolute left-4 flex items-center gap-1.5">
        <div className="h-3 w-3 rounded-full bg-red-400"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
        <div className="h-3 w-3 rounded-full bg-green-400"></div>
      </div>
    </div>

    <div className="h-10 bg-theme-surfaceDark text-theme-onSurfaceDark border-y border-theme-backgroundDark"></div>

    <div className="flex-1 flex">
      <div className="w-10 bg-theme-surfaceDark text-theme-onSurfaceDark border-r border-theme-backgroundDark"></div>
      <div className="w-48 bg-theme-surfaceDark/50 text-theme-surfaceDark border-r border-theme-backgroundDark"></div>
      <div className="flex-1">
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={0.3} />
            <directionalLight position={[0,0,5]} />
            <primitive object={axe} scale={0.3} rotation={[0, (30/360)*2*Math.PI, (20/360)*2*Math.PI]}/>
            <OrbitControls enablePan={false} enableZoom={false} rotateSpeed={0.8} target={[0.5,-1.5,0]}/>

            {/* <EffectComposer>
              <Outline/>
            </EffectComposer> */}
          </Suspense>
        </Canvas>
      </div>
      <div className="w-52 bg-theme-surfaceDark text-theme-onSurfaceDark border-r border-theme-backgroundDark"></div>
    </div>

    <div className="h-12 bg-theme-surfaceDark text-theme-surfaceDark border-t border-theme-backgroundDark"></div>
  </div>;
}

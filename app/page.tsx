import Navbar from 'components/Navbar';
import Dock from 'components/Dock';
import Safari from './Safari';
import Preview from './Preview';
// import Finder from './Finder';

export default function HomePage() {
  return <>
    <div className="min-h-screen relative bg-theme-primaryVariant text-theme-onPrimary">
      <Navbar/> {/* 2.75rem from top */}

      {/* @ts-ignore */}
      <Safari className="
        mt-[calc(2.75rem+1rem)] lg:mt-0 mx-2 lg:mx-0 lg:absolute lg:top-[max(calc(50vh-1.3125rem-16rem-2rem),2.75rem)] lg:left-[calc(50vw-27rem-5rem)]
        min-h-[16rem] lg:min-h-0 lg:h-[32rem] lg:max-h-[calc(100vh-2.75rem-5.375rem)] lg:w-[48rem]
      "/>

      <Preview className="
        mt-4 lg:mt-0 mx-2 lg:mx-0 lg:absolute lg:top-[max(calc(50vh-1.3125rem-14rem+4rem),2.75rem)] lg:left-[calc(50vw-12rem+20rem)]
        h-96 lg:h-[28rem] lg:max-h-[calc(100vh-2.75rem-5.375rem)] lg:w-[24rem]
      "/>
      
      <Dock className="mt-2 lg:mt-0 lg:absolute lg:bottom-1.5"/> {/* 5.375rem from bottom */}
    </div>
  </>;
}
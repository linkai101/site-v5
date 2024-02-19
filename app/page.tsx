import Navbar from 'components/Navbar';
import Dock from 'components/Dock';
import Safari from './Safari';
import Preview from './Preview';
import Freeform from './Freeform';
import Photoshop from './Photoshop';
import Maya from './Maya';
import DesignHeading from './DesignHeading';
import Messages from './Messages';

export default function HomePage() {
  return <>
    <div className="min-h-screen relative bg-theme-primaryVariant text-theme-onPrimary overflow-hidden">
      <Navbar/>

      <div className="container max-w-4xl relative md:h-[42rem]">
        <Safari className="md:absolute md:top-24 md:bottom-32 md:left-0 md:w-[40rem] m-2 mt-14 md:mt-0"/>
        <Preview className="md:absolute md:bottom-4 md:right-0 md:w-[22rem] h-[26rem] m-2 mt-4 md:mt-0"/>

        <div className={`
          px-2.5 bg-theme-primary/75 rounded-full text-theme-onPrimary font-bold
          absolute -bottom-20 left-1/2 -translate-x-[50%]
          pointer-events-none opacity-75
          hidden md:block
        `}>
          <span className="text-sm font-medium">↓ scroll</span>
        </div>
      </div>

      <div className="container max-w-5xl relative md:h-[64rem] px-2 mt-4 md:mt-[8rem]">
        <Freeform className="h-full"/>
      </div>

      <div className="container max-w-4xl relative md:h-[69rem] mt-4 md:mt-[8rem]">
        <DesignHeading className="md:absolute md:top-0 md:right-0 md:w-[42rem] md:h-[18rem] m-2"/>
        <Photoshop className="md:absolute md:top-[14rem] md:-left-36 md:w-[50rem] h-[24rem] md:h-[30rem] m-2"/>
        <Maya className="md:absolute md:top-[38rem] md:-right-36 md:w-[50rem] h-[30rem] m-2"/>
      </div>

      <div className="container max-w-4xl">
        <Messages className="md:h-[40rem] mt-4 md:mt-[8rem] md:mb-36 m-2"/>
      </div>

      <Dock className="mt-2 md:mt-0 md:absolute md:bottom-1.5"/>
    </div>
  </>;
}

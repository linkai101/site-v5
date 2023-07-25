import Navbar from 'components/Navbar';
import Dock from 'components/Dock';
import Safari from './Safari';
import Preview from './Preview';
import Finder from './Finder';

export default function HomePage() {
  return <>
    <Navbar/>

    {/* @ts-ignore */}
    <Safari className="
      mt-[calc(2.75rem)] lg:mt-0 lg:fixed lg:top-[calc(2.75rem+10vh)] lg:left-[2vw]
      min-h-[16rem] lg:min-h-0 lg:h-[32rem] lg:max-h-[calc(90vh-8.125rem)] lg:w-[54rem] lg:max-w-[calc(90vw-24rem)]
    "/>

    <Preview className="
      mt-6 lg:mt-0 lg:fixed lg:bottom-[calc(5.375rem+2vh)] lg:right-[2vw]
      h-96 lg:h-[20rem] lg:max-h-[calc(98vh-8.125rem)] lg:w-[30rem]
    "/>

    <Finder className="
      mt-6 mb-[5.375rem] lg:mt-0 lg:mb-0 lg:fixed lg:top-[calc(2.75rem+2vh)] lg:right-[8vw]
      min-h-[16rem] lg:min-h-0 lg:h-[20rem] lg:max-h-[calc(98vh-8.125rem)] lg:w-[34rem]
    "/>
    
    <Dock/>
  </>;
}
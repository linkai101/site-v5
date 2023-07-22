import Link from 'next/link';

import { FaAngleDown, FaRegStar } from 'react-icons/fa';
import { FiMail, FiGithub, FiLinkedin, FiYoutube } from 'react-icons/fi';

import Navbar from '../components/Navbar';
import Dock from '../components/Dock';
import Safari from './Safari';
import Preview from './Preview';
import Finder from './Finder';

export default function HomePage() {
  return <>
    <Navbar/>

    <Safari className="
      mt-[calc(2.75rem)] md:mt-0 md:fixed md:top-[calc(2.75rem+10vh)] md:left-[2vw]
      min-h-[16rem] md:min-h-0 md:h-[65vh] md:w-[70vw]
    "/>

    <Preview className="
      mt-6 md:mt-0 md:fixed md:bottom-[calc(5.375rem+2vh)] md:right-[2vw]
      h-96 md:h-[40vh] md:aspect-[3/2]
    "/>

    <Finder className="
      mt-6 mb-[5.375rem] md:mt-0 md:mb-0 md:fixed md:top-[calc(2.75rem+2vh)] md:right-[8vw]
      min-h-[20rem] md:min-h-0 md:h-[41vh] md:w-[44vw]
    "/>
    
    <Dock/>
  </>;
}
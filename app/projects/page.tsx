import Navbar from 'components/Navbar';
import Dock from 'components/Dock';
import VSCode from './VSCode';

export default function ProjectsPage() {
  return <>
    <Navbar/>

    <VSCode className="
      mt-[calc(2.75rem)] lg:mt-0 lg:fixed lg:top-[2.75rem] lg:left-0
      min-h-[16rem] lg:min-h-0 lg:h-[calc(100vh-2.75rem-5.375rem)] lg:w-screen
    "/>
    
    <Dock/>
  </>;
}
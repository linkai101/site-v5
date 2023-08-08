
import { FiGithub, FiArrowLeft, FiSlack, FiDownloadCloud } from "react-icons/fi";

export default function JamsPage() {
  return <div className="min-h-screen text-[#1f2d3d] bg-[#F5F5F5] relative">
    <nav className="container max-w-7xl sticky top-0 px-6 flex items-center justify-between gap-8 backdrop-blur-lg bg-[#F5F5F5]/50 z-40">
      <button className="px-2.5 py-1 flex items-center gap-1 text-sm text-purple-600 rounded-full hover:outline outline-2 outline-purple-600 my-4">
        <FiArrowLeft className="-ml-1 text-2xl"/> <span className="mt-0.5">Back</span>
      </button>

      <input className="w-64 px-4 py-2 text-sm text-[#1f2d3d] bg-[#F5F5F5] rounded-full outline outline-2 outline-neutral-300 focus:outline-purple-600 my-4" placeholder="Search for Raspberry Jam"/>

      <button className="px-1 pb-0.5 pt-1.5 text-2xl text-purple-600 rounded-full hover:outline outline-2 outline-purple-600">
        <FiGithub/>
      </button>
    </nav>

    <main className="px-4 container max-w-5xl flex flex-col-reverse md:flex-row gap-12">  
      <div className="md:w-80 pt-10 pb-12 relative">
        <h2 className="text-xl font-bold">
          Author
        </h2>

        <div className="px-6 py-4 bg-neutral-200/75 rounded-2xl mt-1">
          <div className="flex items-center gap-4 mt-1">
            <img src="https://github.com/linkai101.png" className="w-12 rounded-full"/>
            <div>
              <p className="font-semibold text-neutral-500">
                linkai101
              </p>

              <div className="flex gap-3 -mt-0.5">
                <button className="flex items-center gap-1 font-semibold text-sm text-purple-600 rounded-full hover:underline underline-2">
                  <FiGithub/> <span className="mt-0.5">GitHub</span>
                </button>
                <button className="flex items-center gap-1 font-semibold text-sm text-purple-600 rounded-full hover:underline underline-2">
                  <FiSlack/> <span className="mt-0.5">DM on Slack</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-bold mt-8">
          Resources
        </h2>
        <div className="flex flex-col gap-3 mt-1">
          <button className="px-4 py-1 flex justify-between items-center text-left text-purple-600 underline underline-2 rounded-xl outline outline-purple-600">
            <span className="mt-0.5">Presentation</span>
            <FiDownloadCloud className="text-lg"/>
          </button>
          <button className="px-4 py-1 flex justify-between items-center text-left text-purple-600 underline underline-2 rounded-xl outline outline-purple-600">
            <span className="mt-0.5">Video</span>
            <FiDownloadCloud className="text-lg"/>
          </button>
        </div>

        <div className="hidden md:block sticky top-24">
          <h2 className="text-xl font-bold mt-8">
            Outline
          </h2>
          <ul className="pl-4 flex flex-col gap-2.5 text-sm list-disc mt-1">
            <li>
              Getting started with Spline
            </li>
            <li>
              Important controls 🕹️
            </li>
            <li>
              Creating your island 🏝️
            </li>
            <li>
              Optional activity: making assets! 📦
            </li>
            <li>
              Customizing your island 🎀
            </li>
            <li>
              Build a collaborative sky village by linking islands 🌉
            </li>
            <li>
              What's next 🔮
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-1 md:pb-36">
        <p className="">
          <span className="text-purple-600 underline underline-purple-600 cursor-pointer">jams</span> / <span className="text-purple-600 underline underline-purple-600 cursor-pointer">3d-club-village</span>
        </p>

        <div className="aspect-video rounded-3xl bg-purple-300 mt-4"></div>
        
        <div className="flex gap-2 mt-3">
          <div className="px-3.5 pb-0.5 pt-1 text-sm text-purple-600 rounded-full outline outline-1 outline-purple-600">3D</div>
          <div className="px-3.5 pb-0.5 pt-1 text-sm text-purple-600 rounded-full outline outline-1 outline-purple-600">Beginner</div>
          <div className="px-3.5 pb-0.5 pt-1 text-sm text-purple-600 rounded-full outline outline-1 outline-purple-600">60 Min</div>
        </div>

        <h1 className="text-3xl font-bold mt-3">
          Build your own 3D club village
        </h1>
        <div className="flex items-center gap-2 mt-1">
          <img src="https://github.com/linkai101.png" className="w-6 rounded-full"/>
          <span className="mt-0.5 text-sm font-medium text-neutral-500">
            linkai101
          </span>
        </div>

        <p className="mt-6">
          Imagine a world where you have the power to shape the landscape and design your dream buildings. <b>Today, we'll dive into the fundamentals of 3D modeling by building our own sky islands and collaborate by merging them into a community sky village.</b>
        </p>

        <p className="mt-6">
          Here's an example of what you will make:
        </p>

        <img src="https://cloud-b1g9hwiu1-hack-club-bot.vercel.app/0image.png" className="rounded-md mt-2"/>
      </div>
    </main>
  </div>;
}
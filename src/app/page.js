
import Spline from "@splinetool/react-spline/next";
import { Major_Mono_Display } from "next/font/google";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Tiny5 } from "next/font/google";

const font = Major_Mono_Display({ subsets: ["latin"], weight: ["400", "400"] })
const tiny5 = Tiny5({ subsets: ["latin"], weight: ["400", "400"] })
export default function Home() {
  return (
    <>
      <div className="relative h-screen w-screen inset-0">
        <div className="absolute h-full w-full pointer-events-auto">
          <main className="h-full w-full">
            <Spline
              scene="https://prod.spline.design/Y3dADZBW0b0kwLub/scene.splinecode" 
              className="no-highlight h-full w-full"
            />
          </main>
        </div>    
        <div className={`${font.className} py-15 sm:py-30 absolute inset-0 -z-10 flex justify-center sm:items-start text-center font-extrabold -tracking-tighter text-7xl sm:text-8xl md:text-9xl pointer-events-none`}>
          SHReYAsH NeeRAJ
        </div>
      </div>

      {/* Hides the "Made with Spline" logo (DO NOT Question my morals ) */}
      <div className="absolute bottom-0 right-0 bg-[#0a0a0a] h-20 w-50 flex justify-center items-center " />



      <div className=" z-10 pointer-events-none m-5 absolute inset-0 flex flex-wrap md:flex-wrap-reverse  justify-center items-start gap-x-20 ">
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </div>

      <div className={` ${tiny5.className} p-20 flex justify-center w-screen text-3xl`}>Use a mouse plizzz 👉👈</div>
      
    </>
  );
}

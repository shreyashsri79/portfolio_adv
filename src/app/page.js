
import Spline from "@splinetool/react-spline/next";
import { Major_Mono_Display } from "next/font/google";
import AboutMeCard from "./components/Cards/AboutMe";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Cards/Contact";
import Projects from "./components/Cards/Projects";
import SkillsCard from "./components/Cards/Skills";
import { Tiny5 } from "next/font/google";
import MyCountryLookup from "./components/Projects/MyCountryLookup";
import InSnap from "./components/Projects/InSnap";
import Skills from "./components/Skills";
import Others from "./components/Projects/Others";

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
        <div className={`${font.className} py-15 sm:py-30 absolute inset-0 -z-10 flex justify-center sm:items-start text-center font-extrabold -tracking-tighter text-7xl sm:text-8xl md:text-[clamp(2rem,15vw,14rem)] pointer-events-none`}>
          SHReYAsH <br/> NeeRAJ
        </div>
      </div>

      {/* Hides the "Made with Spline" logo (DO NOT Question my morals ) */}
      <div className="absolute bottom-0 right-0 bg-[#0a0a0a] h-20 w-50 flex justify-center items-center " />



      <div className=" z-10 pointer-events-none m-5 absolute inset-0 flex flex-wrap md:flex-wrap-reverse  justify-center items-start gap-x-20 ">
        <AboutMeCard />
        <SkillsCard />
        <Projects />
        <Contact />
      </div>

      <div className={` ${tiny5.className} p-20 flex justify-center w-screen text-3xl text-center`}>
        Use a mouse plizzz 👉👈 <br/>Mobile Experience is gonna be autistic<br/>If it breaks in your browser, change your browser </div>

      <div className="py-10">
        <div className="flex flex-col w-full items-center py-10">
          <h2 className={`${tiny5.className} text-[clamp(2rem,15vw,11rem)]`}>
            Projects
          </h2>
          <p className={`${tiny5.className} text-[clamp(2rem,15vw,1rem)]`}>
            &quot;My two stupidest projects&quot;
          </p>

        </div>
        <div className="p-10"></div>     
        <MyCountryLookup/>
      </div>

      <div className="py-40">
        <InSnap />
      </div>
      
      <div>
        <Others />
      </div>
      <div className="p-20">
        <Skills />
      </div>
      <AboutMe />
    </>
  );
}

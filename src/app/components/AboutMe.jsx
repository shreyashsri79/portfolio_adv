import Spline from '@splinetool/react-spline/next';
import { motion } from 'framer-motion';
import { Major_Mono_Display, Oxanium } from 'next/font/google';

const title = Major_Mono_Display({ subsets: ["latin"], weight: ["400", "400"] })
const text = Oxanium({ subsets: ["latin"], weight: ["400", "400"] })

export default function Home() {
  const email = "shreyashn.dev@gmail.com";
  return (
    <section>
      <h2 
      className={`${title.className} text-9xl flex w-full justify-center p-20`}>
        ABoUt ME
      </h2>
      <div className='flex p-10 gap-10'>
        <div
        className='w-1/2 h-screen'>
          <div className={`${text.className} text-3xl p-10 w-full flex justify-center items-center gap-10`}>
            <h2>My Github Stats</h2>
            <a href="https://github.com/shreyashsri79">
              <img 
                src='https://www.vectorlogo.zone/logos/github/github-tile.svg'
                className="w-12 h-12 rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-500 cursor-pointer" 
              />
            </a>
          </div>
          <div className='flex w-full justify-center'>
            <img
              src="http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=shreyashsri79&theme=swift"
              alt="GitHub Stats"
              className="rounded-lg shadow-lg"
            />
            <img
              src="http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=shreyashsri79&theme=swift"
              alt="GitHub Stats"
              className="rounded-lg shadow-lg"
            />
          </div>
          <img
            src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=shreyashsri79&theme=swift"
            alt="GitHub Stats"
            className="rounded-lg shadow-lg"
          />
          <div className='flex w-full justify-center'>
            <img
              src="http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=shreyashsri79&theme=swift&utcOffset=8"
              alt="GitHub Stats"
              className="rounded-lg shadow-lg"
            />
            <img
              src="http://github-profile-summary-cards.vercel.app/api/cards/stats?username=shreyashsri79&theme=swift"
              alt="GitHub Stats"
              className="rounded-lg shadow-lg"
            />
          </div>
          
        </div>
        <div className='w-1/2 h-screen'>
          <Spline
            scene="https://prod.spline.design/6-3pvLTonKwmn8dp/scene.splinecode" 
          />
        </div>
      </div>
      
    </section>
  );
}

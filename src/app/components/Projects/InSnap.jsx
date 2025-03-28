import React from 'react'
import Spline from "@splinetool/react-spline/next";
import { Major_Mono_Display } from 'next/font/google';
import { Oxanium } from 'next/font/google';

const font = Major_Mono_Display({ subsets: ["latin"], weight: ["400", "400"] })
const tiny5 = Oxanium({ subsets: ["latin"], weight: ["400", "400"] })

const InSnap = () => {
  return (
    <div>
        <div className="flex relative inset-0 z-10">
          <div className='h-screen w-1/2 p-10'>
            <Spline  
              scene="https://prod.spline.design/4T3-bzWAdDBhgwtb/scene.splinecode" 
              className="no-highlight h-full w-full"
            /> 
          </div>
          <div className='h-screen w-1/2 p-10 flex flex-col gap-10'>
            <h2 className={`${font.className} flex justify-center text-7xl`}>InSnAp</h2>
            <p className={`${tiny5.className} text-2xl leading-relaxed`}>Insnap — Because why take attendance the easy way when you can overcomplicate it? Built with Kotlin and Jetpack, Insnap grabs your reg number, dives into a Google Sheet like it’s solving a murder mystery, and marks you present (or calls you out for skipping). It’s fast, efficient, and honestly way more complex than anyone ever asked for. <br /><br />But hey, I didn’t stop there — I shipped it to two college clubs, because why settle for one audience when you can double the confusion? Now twice the people can wonder why I spent this much effort reinventing a process that literally takes five seconds with pen and paper.</p>
          </div>
      </div>

    </div>
  )
}

export default InSnap
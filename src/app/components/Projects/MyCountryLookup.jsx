import React from 'react'
import { Major_Mono_Display } from "next/font/google";
import { Orbitron } from "next/font/google";
import { Oxanium } from 'next/font/google';
import Image from 'next/image';

const fontTitle = Orbitron({ subsets: ["latin"], weight: ["400"] });
const font = Major_Mono_Display({ subsets: ["latin"], weight: ["400", "400"] })
const fontDes = Oxanium({ subsets: ["latin"], weight: ["400"] });

const MyCountryLookup = () => {
  return (
    <div className={`${fontDes.className} h-full w-full`}>
        <video
            autoPlay
            loop
            muted
            playsInline
            className="-z-10  absolute w-full h-full object-cover"
        >
            <source src= "/my_country_lookup_bg.mp4" type='video/mp4'/>
            Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute w-full h-full bg-black opacity-40 -z-5"></div>

        <div className='z-10'>
            <div className='flex justify-center w-full'>
                <p className={` ${font.className} text-7xl text-center font-black`}>MY countRY LooKup</p>
            </div>
            <div className='p-10 flex flex-wrap justify-around'>
                <div className="w-xl p-5 bg-white/10 backdrop-blur-xs rounded-lg shadow-lg flex flex-col items-center text-white text-3xl font-bold">
                    <p className={`${fontTitle.className} `}>Android Version</p>
                    <div className='sm:flex m-4 my-3 items-center justify-center gap-5'>
                        <Image src= "/country_app.png" 
                            width="100"   
                            height="100"
                            className='h-96 w-fit'
                            unoptimized = {true}
                            alt = "preview" >
                        </Image>
                        <p className='text-lg leading-relaxed'>
                        "My Country Lookup" is an app that answers the burning question: What if Google... but with extra steps? Built with Kotlin, Jetpack Compose, Retrofit, MVVM, and Coil — because why not over-engineer something you could’ve just Googled in five seconds? But hey, now I can flex my architecture skills too!
                        </p>
                    </div>
                </div>
                <div className="w-xl p-5 bg-white/10 backdrop-blur-xs rounded-lg shadow-lg flex flex-col items-center text-white text-3xl font-bold">
                    <p className={`${fontTitle.className} `}>Web Version</p>
                    <div className='flex flex-col m-4 items-center gap-5'>
                        <Image src= "/country_web.png" 
                            width="100"   
                            height="100"
                            className='w-96 h-fit my-3'
                            unoptimized = {true}
                            alt = "preview" >
                        </Image>
                        <p className='text-lg leading-relaxed'>
                            "My Country Lookup" has a web version too, because clearly Google wasn’t enough competition. Built with Next.js, it’s fast, sleek, and arguably unnecessary — but hey, why stop at one over-complicated project when I can make two? Now I can impress people on both Android and the web!                        </p>
                    </div>
                </div>

            </div>
            
        </div>
        
    </div>
  )
}

export default MyCountryLookup
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Happy_Monkey, Orbitron } from "next/font/google";
import Image from "next/image";
import aboutMeBG from "../res/about_me_bg.gif";

const fontTitle = Orbitron({ subsets: ["latin"], weight: ["400"] });
const fontDesc = Happy_Monkey({ subsets: ["latin"], weight: ["400"] });

const AboutMe = () => {
  const [flipped, setFlipped] = useState(false);


  return (
    <>
      {/* Background Overlay */}
      <div className="absolute h-screen w-full pointer-events-none">
        <div className="absolute inset-0 w-screen"></div>
      </div>

      {/* Main Card */}
      <div
        className={`${fontDesc.className} p-10 w-full h-full bg-white/10 backdrop-blur-md rounded-lg shadow-xl border border-white/20 relative overflow-hidden`}
        id="content"
      >
        {/* Background Image */}
        <Image
          src={aboutMeBG}
          alt="bg"
          layout="fill"
          className="object-cover opacity-30 m-0 h-full w-full blur-sm -z-10 scale-105"
        />

        {/* Content Section */}
        <div className="sm:flex flex-row gap-10 py-10">
          {/* Flipping Image Card with 3D Tilt */}
          <motion.div
            className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px] perspective-1000"
            onMouseEnter={() => setFlipped(true)}
            onMouseLeave={() => setFlipped(false)}
            whileHover={{ rotateX: 10, rotateY: 10, scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute w-full h-full cursor-pointer"
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front Image */}
              <div className="absolute w-full h-full bg-white/10 backdrop-blur-md rounded-lg shadow-lg flex justify-center items-center text-white backface-hidden">
                <img
                  src="https://i.imgflip.com/65efzo.gif"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Back Side (Secret Text with Glitch Effect) */}
              <div className="absolute w-full h-full bg-[#fe8896] rounded-lg shadow-lg flex justify-center items-center text-white text-md p-4 rotate-y-180 backface-hidden">
                <p className={`${fontDesc.className} text-black text-center text-xl font-black glitch`}>
                  DO NOT <br /> <span className="font-extrabold">QUESTION </span> <br />MY PFP
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <div>
  
            <p className="text-gray-300 text-lg mt-2 leading-relaxed py-2 ">
                <span className="line-through text-red-500 font-extralight">BOLD</span> <span className="font-extrabold text-red-500 ">BAD</span> choice but hey you're here so...
            </p>

            <h2 className="text-gray-300 text-lg leading-loose py-3">
              Yes, I am Shreyash Neeraj, the god of{" "}
              <span className="text-blue-300">
                React, Next.js, Node.js
              </span>, and whatever else I Googled five minutes ago. My CSS skills bend reality, my backend logic deserves a TED Talk — too bad my life decisions don't.
            </h2>

            <p className="text-gray-300 text-lg leading-loose">
              Hell yeah, I know{" "}
              <span className="text-green-300">
                Android SDK, Kotlin, and Jetpack Compose
              </span> — I’ve even made apps with them. <br /> 
              Once built a game in Python’s turtle module back in 6th or 7th grade... which looked suspiciously like a fever dream.
            </p>
          </div>
        </div>

        {/* Other Info */}
        <p className="text-gray-300 text-lg leading-loose">
          Oh, you bet I dabbled in{" "}
          <span className="text-purple-300">
            Blender and Godot
          </span> too — not that I’ve produced anything except broken rigs and emotional damage. Occasionally, I edit anime reels that get demonetized before they even finish rendering — love that for me.
        </p>

        <p className="text-gray-300 text-lg leading-loose py-3">
          Yeah, I know{" "}
          <span className="text-yellow-300">
            HTML, CSS, JS, TS, React, Tailwind, Next.js, Node.js, Express
          </span> — basically, I collect frameworks like Pokémon cards. MongoDB? Let’s just say I hide that by pretending to know PostgreSQL.
        </p>

        <p className="text-gray-300 text-lg leading-loose">
          Yes, I write code like I’m assembling IKEA furniture — half the time I don’t know what I’m doing, but somehow it holds together. If you ever see me confidently pushing code, know that my inner voice is quietly whispering, "You sure about that, buddy?"
        </p>

        <p className="text-gray-400 text-md italic py-3 text-lg leading-loose">
          (Yes, I know this is way too much text for an "About Me" section — but hey, you’re still reading, so who's really winning here.)
        </p>
      </div>

      {/* CSS for Glitch & Typewriter Animation */}
      <style jsx>{`
        .glitch {
          position: relative;
          animation: glitch 0.8s infinite alternate;
        }

        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(2px, -2px); }
          60% { transform: translate(-2px, -2px); }
          80% { transform: translate(2px, 2px); }
          100% { transform: translate(0); }
        }

      `}</style>
    </>
  );
};

export default AboutMe;

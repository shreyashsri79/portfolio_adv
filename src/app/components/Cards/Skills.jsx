"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Happy_Monkey, Orbit} from "next/font/google";
import { Orbitron } from "next/font/google";

const fontTitle = Orbitron({ subsets: ["latin"], weight: ["400", "400"] })
const fontDesc = Happy_Monkey({ subsets: ["latin"], weight: ["400", "400"] })

const Skills = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="pointer-events-auto relative w-[400px] h-[150px] md:w-[300px] md:h-[250px] perspective-1000"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        className="absolute w-full h-full cursor-pointer"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div className={` ${fontTitle.className} absolute w-full h-full bg-white/10 backdrop-blur-xs rounded-lg shadow-lg flex justify-center items-center text-white text-2xl font-bold backface-hidden -tracking-tighter`}>
          Skills
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-white/10 backdrop-blur-xs rounded-lg shadow-lg flex justify-center items-center text-black text-sm p-4 rotate-y-180 backface-hidden">
          <p className={`${fontDesc.className} text-lg font-bold text-amber-50`}>
            Bold of you to assume <br />I have any 🫵😂
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;

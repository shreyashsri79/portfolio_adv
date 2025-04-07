"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Happy_Monkey, Orbit} from "next/font/google";
import { Orbitron } from "next/font/google";

const fontTitle = Orbitron({ subsets: ["latin"], weight: ["400", "400"] })
const fontDesc = Happy_Monkey({ subsets: ["latin"], weight: ["400", "400"] })

const Others = () => {

    const projects = [
  {
    title: "My Apparel",
    med : "Android",
    description: "A personal project for fashion enthusiasts.",
    img: "./my_apparel.png", 
  },
  {
    title: "Weatheria",
    med : "Android",
    description: "Developed for internship at Pinnacle Labs.",
    img: "./weatheria.jpg",
  },
  {
    title: "My Portfolio",
    med : "This One",
    description: "A personal portfolio showcasing my work and skills.",
    img: "./portfolio.png",
  },
  {
    title: "Notes Web App",
    med : "Full Stack",
    description: "A minimalistic notes app with cloud sync.",
    img: "./notes.png",
  },
];
    
      return (
        <section id = "android-projects" className= {`p-10 min-h-screen flex flex-col gap-10 justify-center items-center  text-white relative overflow-hidden`}>
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <h2 className={`${fontTitle.className} text-5xl font-bold mb-6`}>Other Projects</h2>
        <p className="text-lg text-gray-400">Some of my other notable (not really) works</p>
      </motion.div>

      {/* Draggable Floating Project Cards */}
      <div className="relative flex flex-wrap gap-10 justify-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            drag
            dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, 10, 0] }} // Floating effect
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className={`${fontDesc.className} bg-[#111827] p-4 w-56 rounded-xl shadow-lg backdrop-blur-md bg-opacity-50 cursor-grab active:cursor-grabbing`}
          >
            <img src={project.img} alt={project.title} className="w-40 h-40 object-cover rounded-md mb-3 mx-auto" />
            <h3 className={` text-lg font-semibold text-center`}>{project.title}</h3>
            <h4 className="text-md font-semibold text-center text-gray-400">{project.med}</h4>
            <p className="text-gray-400 text-sm text-center">{project.description}</p>
          </motion.div>
        ))}
      </div>
      
    </section>
  );
};

export default Others;

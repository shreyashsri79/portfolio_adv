"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import bg from '../res/about_me_bg.gif'
import Image from 'next/image';
import { Major_Mono_Display, Happy_Monkey } from 'next/font/google';

const font = Major_Mono_Display({ subsets: ["latin"], weight: ["400", "400"] })
const happyMonke = Happy_Monkey({ subsets: ["latin"], weight: ["400", "400"] })

const skills = {
  languages: ['Java', 'C++', 'Kotlin','JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS'],
  frameworks: ['Express', 'Vite','React', "NextJs",'Tailwind', 'Jetpack'],
  tools: ['Android', 'Git', "Postgres SQL" ,'Node.js', 'Postman'],
};

const techIcons = {
  Java: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
  'C++' : "https://www.vectorlogo.zone/logos/isocpp/isocpp-icon.svg",
  Kotlin: 'https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg',
  JavaScript: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
  TypeScript : "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
  Python: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
  HTML: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
  CSS: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
  Express: 'https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png',
  Vite : 'https://www.vectorlogo.zone/logos/vitejsdev/vitejsdev-icon.svg',
  React: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
  'React Native': "https://upload.vectorlogo.zone/logos/reactnativedev/images/199b2976-954e-4e42-8d79-12a784e2cdf9.svg",
  NextJs: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg",
  Tailwind: "./tailwind-css.svg",
  Jetpack : "https://upload.vectorlogo.zone/logos/jetpack/images/be5cdec8-1b56-4052-823c-9a0518e666e2.svg",
  Android: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg',
  Git: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
  MongoDB: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg',
  "Postgres SQL" : "https://www.vectorlogo.zone/logos/postgresql/postgresql-vertical.svg",
  'Node.js': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
  Postman: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
};

const techMemes = {
  Java: 'not as verbose as me',
  'C++' : "yes Im in cp (delulu)",
  Kotlin: 'wifey language',
  JavaScript: 'ex gf I keep coming back to',
  TypeScript : "toxic ex, this one is still here",
  Python: 'teen crush, simple but a lotta depth',
  HTML: 'in here because its my portfolio',
  CSS: 'also in here because its my portfolio',
  Express: 'backend on hopes & dreams',
  Vite : 'why mention a build tool? Cry.',
  React: 'prop drilling goes brrr..',
  'React Native': "prop drilling but on mobile",
  NextJs: "adult crush",
  Tailwind: "why css that way when I can css this way",
  Jetpack : "the only good ui framework",
  Android: 'yess, yes the native one',
  Git: 'only place I get to commit',
  MongoDB: 'schema ?',
  "Postgres SQL" : "yes schema",
  'Node.js': 'why write code, when you have a npm pkg for it',
  Postman: 'stress test? nope only princess treatment',
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Skills = () => {
  return (
    <section id="skills" className="p-12 text-white relative">
         <>
          {/* Background Overlay */}
          <div className="absolute h-screen w-full pointer-events-none">
            <div className="absolute inset-0 w-screen"></div>
          </div>
    
          {/* Main Card */}
          <div
            className={` p-10 w-full h-full bg-white/10 backdrop-blur-md rounded-lg shadow-xl border border-white/20 relative overflow-hidden`}
            id="content"
          >
            {/* Background Image */}
            <Image
              src="https://i.imgur.com/ZAmY2M9.gif"
              alt="bg"
              fill
              className="object-cover opacity-30 m-0 h-full w-full -z-10 scale-105"
            />
    
            {/* Content Section */}
            <div className="sm:flex flex-col gap-10 py-10">
              {/* Section Heading */}
      <div
        className={`text-center mb-12 relative z-10`}
      >
        <h2 className={`${font.className} p-5 text-9xl font-bold text-white mb-6`}>SKILLS</h2>
      </div>
      
      {/* Skills Categories */}
      {Object.keys(skills).map((category) => (
        <div
          className="mb-12 relative z-10"
        >
          <div className="flex flex-wrap gap-10 justify-center">
            {skills[category].map((tech, index) => (
              <Tilt key={index} tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05}>
                <div className="relative group">
                  <motion.img
                    src={techIcons[tech]}
                    alt={tech}
                    className="w-20 h-20 rounded-lg bg-white p-3 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-500 cursor-pointer"
                    whileHover={{ scale: 1.2 }}
                  />
                  <div
                    className={`${happyMonke.className} absolute top-full left-1/2 transform -translate-x-1/2 text-sm text-center opacity-0 bg-black text-white px-3 py-1 rounded-lg  group-hover:opacity-100 transition-opacity duration-300 w-30`}
                  >
                    {techMemes[tech]}
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      ))}
            </div>
          </div>
    </>
    </section>
  );
};

export default Skills;

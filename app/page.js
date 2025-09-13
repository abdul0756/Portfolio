"use client"
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Image from 'next/image';
import Card from '@/components/Card';
import Project from '@/components/Project';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <motion.div
        className="relative flex flex-col items-center w-full h-max pb-20 max-md:pb-16 max-sm:pb-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-indigo-500/10 border border-white/10 shadow-2xl flex justify-center items-center py-5 px-8 rounded-3xl mt-6 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[45%] xl:w-[35%] mx-auto hover:scale-[1.02] transition-transform duration-700">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extralight text-white text-center drop-shadow-md">
            <TypeAnimation
              sequence={[
                'Assalam-o-Alaikum',
                1000,
                'Welcome to Portfolio',
                2000,
              ]}
              wrapper="span"
              speed={150}
              cursor={false}
            />
          </h1>
        </div>

        <motion.div
          className="flex flex-col-reverse sm:flex-row justify-center items-center w-full mt-12 sm:mt-20 py-6 text-white gap-10 sm:gap-14 px-6"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="backdrop-blur-xl bg-gradient-to-tr from-white/5 via-black/30 to-black/20 border border-white/10 shadow-xl h-max py-8 px-10 rounded-3xl w-full sm:w-[85%] md:w-[70%] lg:w-[60%] xl:w-[50%]">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed text-center text-white/90">
              Hi, I’m <span className="text-cyan-400 font-medium">Abdul Hannan</span> — 
              a full-stack web developer who loves turning ideas into clean, modern, 
              and user-friendly digital experiences. I’ve mastered{" "}
              <span className="text-fuchsia-400">HTML</span>,{" "}
              <span className="text-fuchsia-400">CSS</span>,{" "}
              <span className="text-fuchsia-400">JavaScript</span>,{" "}
              <span className="text-fuchsia-400">React</span>,{" "}
              <span className="text-fuchsia-400">Tailwind CSS</span>,{" "}
              <span className="text-fuchsia-400">Node.js</span>,{" "}
              <span className="text-fuchsia-400">Express.js</span>,{" "}
              <span className="text-fuchsia-400">Next.js</span> and{" "}
              <span className="text-fuchsia-400">MongoDB</span>.
              <br /><br />
              My passion? Crafting portfolios, dashboards, E-commerce platforms and 
              web apps that balance <span className="text-emerald-400">aesthetics</span> 
              with <span className="text-emerald-400">functionality</span>.
            </p>
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="/Avater.png"
              width={340}
              height={340}
              alt="Profile pic"
              className="rounded-full shadow-[0_0_40px_rgba(34,211,238,0.5)] border-4 border-white/20 hover:scale-110 transition-transform duration-700"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        className="w-full flex justify-center flex-col items-center mb-16 mt-8 max-sm:mt-4"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="backdrop-blur-xl bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-indigo-500/10 border border-white/10 shadow-lg flex justify-center items-center py-4 px-8 rounded-3xl mt-3 w-[90%] sm:w-[80%] md:w-[55%] lg:w-[40%] xl:w-[30%] mx-auto text-2xl sm:text-3xl md:text-4xl font-light text-white animate-pulse">
          My Skills
        </div>

<motion.div
  className="flex flex-wrap justify-center items-center gap-10 mt-20 w-4xl 
             max-sm:w-full max-sm:mt-10 max-sm:flex-col"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={{
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }}
>
  {[
    ["HTML", 95],
    ["CSS", 80],
    ["JavaScript", 70],
    ["React", 70],
    ["Tailwind CSS", 85],
    ["Node.js", 70],
    ["Express.js", 75],
    ["Next.js", 75],
    ["MongoDB", 80],
  ].map(([title, value], idx) => (
    <motion.div
      key={idx}
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        show: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <Card title={title} value={value} />
    </motion.div>
  ))}
</motion.div>


      {/* Projects Section */}
      <motion.div
        className="backdrop-blur-xl bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-indigo-500/10 border border-white/10 flex justify-center items-center py-5 px-8 rounded-3xl shadow-lg mt-28 w-[90%] sm:w-[80%] md:w-[55%] lg:w-[40%] xl:w-[30%] mx-auto text-2xl sm:text-3xl md:text-4xl font-light text-white animate-pulse"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.div>

      <motion.div
        className="w-full flex h-max flex-col items-center mb-16 mt-16 max-sm:mt-10"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Project
          title={"Syana-Mart"}
          description={
            "This is my first fullstack project using Next.js. If your login doesn’t proceed after registration, that’s because I’m using a free DB tier."
          }
          link={"https://syana-mart.netlify.app"}
        />
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Footer />
      </motion.div>
    </>
  );
}

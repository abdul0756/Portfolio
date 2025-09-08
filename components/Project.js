import { motion } from "framer-motion";
import Link from "next/link";
const Project = ({ title, description, link }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative group w-[90%] sm:w-[80%] md:w-[70%] lg:w-[55%] xl:w-[45%] 
                 rounded-3xl backdrop-blur-2xl bg-gradient-to-br 
                 from-white/5 via-white/10 to-white/5 
                 border border-white/10 shadow-2xl shadow-black/50 
                 overflow-hidden hover:scale-[1.02] hover:shadow-cyan-500/20 
                 transition-all duration-500 p-8"
        >
            {/* Neon Glow Overlay */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-700
                      bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-indigo-500/20 blur-xl" />

            <div className="relative z-10 flex flex-col items-center text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-white drop-shadow-lg">
                    {title}
                </h1>

                {description && (
                    <p className="mt-4 text-sm sm:text-base md:text-lg text-white font-extralight leading-relaxed max-w-2xl">
                        {description}
                    </p>
                )}

                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative mt-6 px-8 py-3 rounded-xl 
                       bg-gradient-to-r from-sky-400 via-indigo-500 to-violet-500

                       text-white text-base sm:text-lg font-medium tracking-wide
                       shadow-lg shadow-black/40 overflow-hidden
                       hover:scale-105 transition-transform duration-500"
                    >
                        <span className="relative z-10">Visit Website</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-40 
                             translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </a>
                )}
            </div>
        </motion.div>
    );
};

export default Project;

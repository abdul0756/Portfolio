"use client";
import { FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full mt-20 border-t border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between py-6 px-6">
        
        <h1 className="text-white text-lg sm:text-xl font-light tracking-wide">
          Abdul Hannan
        </h1>

        <div className="flex gap-6 mt-4 sm:mt-0">
          <a
            href="https://instagram.com/abdul_56_08"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gradient-to-tr from-pink-500 via-fuchsia-500 to-purple-500 
                       text-white shadow-lg hover:scale-110 hover:shadow-pink-500/40 
                       transition-transform duration-500"
          >
            <FaInstagram size={22} />
          </a>

          <a
            href="https://github.com/abdul0756"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gradient-to-tr from-gray-700 via-gray-900 to-black 
                       text-white shadow-lg hover:scale-110 hover:shadow-gray-400/40 
                       transition-transform duration-500"
          >
            <FaGithub size={22} />
          </a>
        </div>
      </div>

      <div className="text-center py-3 border-t border-white/10 text-white font-extralight text-md">
        © {new Date().getFullYear()} Abdul Hannan • All Rights Reserved
      </div>
    </footer>
  );
}

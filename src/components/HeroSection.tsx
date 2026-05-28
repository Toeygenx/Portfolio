"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-orange/20 rounded-full blur-[120px] mix-blend-screen animate-blob -z-10" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary-purple/20 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000 -z-10" />
      <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-primary-brown/20 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-4000 -z-10" />

      <div className="max-w-5xl mx-auto text-center z-10 relative">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500 mb-4 mt-10"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-orange via-primary-purple to-primary-orange bg-300% animate-gradient mb-8"
        >
          A Full-Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light"
        >
          Passionate about Technology, AI, and Innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-surface-light border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-colors"
          >
            Contact
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 animate-bounce"
      >
        <a href="#tech-stack" className="text-gray-500 hover:text-white transition-colors">
          <ArrowDown size={32} />
        </a>
      </motion.div>
    </section>
  );
}

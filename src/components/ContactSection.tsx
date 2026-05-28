"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";
import { Mail, Sparkles, Github } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 px-4 relative z-10">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-4 tracking-tight">Contact</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-orange to-primary-purple mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group rounded-3xl p-[1px] overflow-hidden bg-surface-dark"
        >
          {/* Animated border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-orange via-primary-purple to-primary-orange opacity-50 group-hover:opacity-100 transition-opacity duration-1000 bg-300% animate-gradient"></div>

          <div className="relative bg-surface-dark rounded-3xl p-8 md:p-12 w-full flex flex-col md:flex-row items-center justify-between backdrop-blur-3xl z-10 gap-8 text-left border border-white/10">

            {/* Inner ambient glow */}
            <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 w-64 h-64 bg-primary-purple/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="flex-1 relative z-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">Let&apos;s Connect</h2>
              <p className="text-lg text-gray-400 max-w-md">
                If there&apos;s anything I can help you with, please feel free to reach out.
              </p>
            </div>

            <div className="flex-shrink-0 relative z-20 w-full md:w-auto flex flex-col gap-4">
              <div className="flex items-center gap-4 text-lg md:text-xl font-medium text-white/90 bg-white/5 px-6 py-4 rounded-2xl border border-white/10 hover:border-primary-orange/50 transition-colors group">
                <Mail className="text-primary-orange group-hover:scale-110 transition-transform" size={24} />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-primary-orange transition-colors">
                  {personalInfo.email}
                </a>
              </div>
              
              {personalInfo.github && (
                <div className="flex items-center gap-4 text-lg md:text-xl font-medium text-white/90 bg-white/5 px-6 py-4 rounded-2xl border border-white/10 hover:border-primary-orange/50 transition-colors group">
                  <Github className="text-primary-orange group-hover:scale-110 transition-transform" size={24} />
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary-orange transition-colors">
                    GitHub Profile
                  </a>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-32 text-center text-sm font-medium text-gray-600">
        <p>© {new Date().getFullYear()} {personalInfo.name}.</p>
      </div>
    </section>
  );
}

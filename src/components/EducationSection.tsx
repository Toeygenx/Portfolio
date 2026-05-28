"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-12 tracking-tight">Education</h2>

          <div className="bg-surface-light/30 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl w-full max-w-3xl relative overflow-hidden group flex flex-col md:flex-row items-center gap-8 md:gap-12 hover:border-white/20 transition-all duration-300">
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/10 to-primary-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
            
            <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 relative bg-white/5 rounded-2xl flex items-center justify-center p-4 border border-white/10 shadow-inner z-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={personalInfo.education.logoPath}
                alt={`${personalInfo.education.university} Logo`}
                className="object-contain w-full h-full filter brightness-200 contrast-100 opacity-90 group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="%23222"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="16" font-weight="bold" fill="%23888">LOGO</text></svg>';
                }}
              />
            </div>

            <div className="relative z-10 text-center md:text-left flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {personalInfo.education.university}
              </h3>
              <p className="text-xl text-gray-400 mb-6 font-medium">
                {personalInfo.education.degree}
              </p>
              <div className="inline-block px-4 py-1.5 bg-primary-orange/10 border border-primary-orange/30 rounded-full">
                <p className="text-primary-orange font-semibold text-sm">
                  Class of {personalInfo.education.graduationYear}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

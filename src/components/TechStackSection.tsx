"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/portfolioData";

export default function TechStackSection() {
  const categories = Object.keys(techStack) as Array<keyof typeof techStack>;

  return (
    <section id="tech-stack" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-4">
            Tech Stack
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-orange to-primary-purple mx-auto rounded-full"></div>
        </motion.div>

        {/* Regular Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((category, idx) => {
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-surface-light/40 backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Glow behind the card on hover */}
                <div className="absolute -inset-2 bg-gradient-to-r from-primary-orange/0 to-primary-purple/0 group-hover:from-primary-orange/10 group-hover:to-primary-purple/10 blur-xl transition-all duration-500 z-0"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-2 h-8 bg-primary-orange rounded-full inline-block"></span>
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {techStack[category].map((tech) => (
                      <div 
                        key={tech.name} 
                        className="overflow-hidden rounded-md shadow-sm transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 ring-1 ring-white/10 hover:ring-primary-orange/50"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={tech.badge} alt={`${tech.name} badge`} className="h-8 object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

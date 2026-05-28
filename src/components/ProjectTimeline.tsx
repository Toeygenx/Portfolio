"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolioData";
import { ExternalLink, ArrowRight } from "lucide-react";

export default function ProjectTimeline() {
  return (
    <section id="projects" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-purple to-primary-orange mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline center line for desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-white/10 rounded-full"></div>

          <div className="space-y-16 md:space-y-32">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={project.id} className={`relative flex flex-col md:flex-row items-center w-full ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-background border-4 border-primary-orange rounded-full z-10 shadow-[0_0_15px_rgba(255,95,21,0.6)]"></div>

                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50, rotateY: isEven ? -10 : 10 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                    className={`w-full md:w-1/2 flex flex-col ${isEven ? 'md:pr-20' : 'md:pl-20 md:order-last'}`}
                    style={{ perspective: 1000 }}
                  >
                    <div className="bg-surface-light/30 backdrop-blur-md rounded-3xl border border-white/10 w-full hover:border-primary-orange/50 transition-all duration-500 group text-left overflow-hidden shadow-2xl hover:shadow-[0_0_40px_rgba(255,95,21,0.15)] relative">

                      {/* Edge-to-edge Image */}
                      <div className="relative w-full h-56 sm:h-72 overflow-hidden bg-black/50">
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-light/90 to-transparent z-10"></div>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={project.imagePath}
                          alt={project.title}
                          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400"><rect width="800" height="400" fill="%23111"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="24" fill="%23444">Project Image Placeholder</text></svg>';
                          }}
                        />
                        {/* Title floating on image */}
                        <h3 className="absolute bottom-4 left-6 z-20 text-3xl font-black text-white">{project.title}</h3>
                      </div>

                      <div className="p-6 md:p-8 relative z-20 bg-surface-light/80 backdrop-blur-md">
                        <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8 md:justify-start">
                          {project.techStack.map((tech) => (
                            <span key={tech} className="px-4 py-1.5 bg-white/5 border border-white/10 text-xs font-semibold text-gray-300 rounded-full tracking-wide">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-white bg-primary-orange hover:bg-primary-orange/80 px-6 py-2.5 rounded-full font-bold transition-all group-hover:gap-4"
                        >
                          Visit Live <ArrowRight size={18} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

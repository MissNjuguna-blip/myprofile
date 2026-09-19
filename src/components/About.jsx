import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const HERO_IMAGE_URL = "/tech-background.avif";

// Stagger entry animations for hero items
const itemAnimate = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const About = () => {
  // State to manage the open full-screen lightbox image
  const [activeImage, setActiveImage] = useState(null);

  // Clean data array for your screenshots
  const projects = [
    { src: "/Screenshot (17).png", alt: "Contributions 1" },
    { src: "/Screenshot (18).png", alt: "Contributions 2" },
    { src: "/Screenshot (19).png", alt: "Contributions 3" },
    { src: "/Screenshot (20).png", alt: "Contributions 4" },
  ];


  return (
    <>
      <div className="bg-blue-50 min-h-screen relative">
        
        {/* RESPONSIVE HERO SECTION */}
        <div
          className="relative flex min-h-screen w-full items-center bg-cover bg-center py-20 md:py-0"
          style={{ backgroundImage: `url(${HERO_IMAGE_URL})` }}
        >
          {/* Dark overlay to make text highly readable */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Main Content Container - Staggers children animation natively */}
          <motion.div
            className="relative z-10 w-full max-w-2xl px-6 sm:px-10 lg:px-20 text-white flex flex-col gap-5 sm:gap-6"
            initial="hidden"
            animate="show"
            variants={{
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
            }}
          >
            <motion.p variants={itemAnimate} className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-400">
              full-stack developer · Nairobi, Kenya
            </motion.p>

            {/* Fluid responsive text scales from text-3xl up to text-5xl */}
            <motion.h1 variants={itemAnimate} className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              I build things with <br className="hidden sm:inline" />
              <span className="text-blue-400">Python, Django, JavaScript & React.</span>
            </motion.h1>

            <motion.p variants={itemAnimate} className="text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed">
              Software Development student at KCA University, shipping full-stack apps and writing about how they're built.
            </motion.p>

            {/* Responsive Actions: stacked on mobile, row on tablet/desktop */}
            <motion.div variants={itemAnimate} className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <a href="#projects" className="text-center px-6 py-3 bg-blue-600 font-medium rounded-xl shadow-lg transition-all duration-300 hover:bg-blue-500 hover:-translate-y-0.5 active:translate-y-0">
                View projects
              </a>
              <a href="#contact" className="text-center px-6 py-3 border border-white/20 font-medium rounded-xl transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0">
                Get in touch
              </a>
            </motion.div>
          </motion.div>

          {/* Mobile Safety: Hidden scroll indicator on very small heights to avoid screen crowding */}
          <motion.div
            className="hidden sm:flex absolute bottom-10 left-10 lg:left-20 items-center gap-3 text-white/50 text-sm font-medium tracking-widest uppercase rotate-90 origin-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <span className="w-12 h-[1px] bg-white/30" />
            <span>scroll</span>
          </motion.div>
        </div>

        {/* PROJECTS SECTION */}
        <section id="projects" className="px-6 py-16 max-w-7xl mx-auto">
          <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 capitalize">
                My Featured <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Projects</span>
              </h1>
              <div className="mt-3 h-1 w-12 bg-blue-600 rounded-full mx-auto" />
            </div>

            {/* Layout Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-10">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  onClick={() => setActiveImage(project.src)}
                  className="col-span-1 md:col-span-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gray-50 border border-gray-100 p-4 cursor-pointer"
                >
                  <img 
                    src={project.src} 
                    alt={project.alt} 
                    className="w-full h-auto object-cover rounded-md select-none" 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LIGHTBOX MODAL CONTAINER */}
        <AnimatePresence>
          {activeImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm cursor-zoom-out"
              onClick={() => setActiveImage(null)} // Closes when clicking backdrop area
            >
              {/* Close Button Button */}
              <button
                className="absolute top-6 right-6 text-white text-4xl font-light hover:text-gray-300 cursor-pointer transition select-none z-50"
                onClick={() => setActiveImage(null)}
              >
                &times;
              </button>

              {/* Dynamic Scaling Image Wrapper */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-5xl max-h-[85vh] flex items-center justify-center cursor-default"
                onClick={(e) => e.stopPropagation()} // Prevents backdrop clicks through the image boundary
              >
                <img
                  src={activeImage}
                  alt="Fullscreen Preview"
                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl select-none"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      
    </div>
  </>
  )
}

export default About

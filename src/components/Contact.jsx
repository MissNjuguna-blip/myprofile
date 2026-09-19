import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Contact = () => {
    const [activeImage, setActiveImage] = useState(null);
    const handleCopyEmail = () => {
  // 1. Sends your email string directly to the user's device clipboard
  navigator.clipboard.writeText("vwaruinu@gmail.com"); 

  // 2. Changes the state to true, flashing the "Copied!" text box indicator on your UI
  setCopied(true);
  // 3. Waits exactly 2 seconds (2000 milliseconds) and hides the "Copied!" text back to "Copy"
  setTimeout(() => setCopied(false), 2000);
};

  return (
    <div>
      {/* CONTACTS */}
      {/* BLUE RESPONSIVE CONTACT SECTION */}
                {/* BLUE RESPONSIVE CONTACT SECTION WITH BOOTSTRAP ICONS */}
        <section id="contact" className="bg-blue-900 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-blue-400">
              Let's Connect
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mt-2 mb-4 tracking-tight">
              Start a Conversation
            </h2>
            <p className="text-blue-200 max-w-lg mx-auto mb-10 text-sm sm:text-base leading-relaxed">
              Available for freelance roles, open-source work, or just talking shop about Python backend design.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              {/* WhatsApp Connection Card */}
              <a 
                href="https://wa.me" // Formatted dialable number link text target
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Official Bootstrap WhatsApp Icon */}
                <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-lg group-hover:scale-110 transition-transform">
                  {/* <BsWhatsapp size={24} /> */}
                  <i className="bi bi-whatsapp" size={24}></i>
                </div>
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-wider text-blue-300">WhatsApp</h4>
                  <p className="text-sm font-semibold mt-0.5">Chat Directly</p>
                </div>
              </a>

              {/* GitHub Link Card */}
              <a 
                href="https://github.com/MissNjuguna-blip" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Official Bootstrap GitHub Icon */}
                <div className="p-3 bg-gray-500/20 text-white rounded-lg group-hover:scale-110 transition-transform">
                  {/* <BsGithub  /> */}
                  <i className="bi bi-github" size={24}></i>
                </div>
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-wider text-blue-300">GitHub</h4>
                  <p className="text-sm font-semibold mt-0.5">Explore Repositories</p>
                </div>
              </a>

              {/* Email Address Interactive Card */}
              <div 
                onClick={handleCopyEmail}
                className="flex items-center justify-between bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  {/* Official Bootstrap Envelope Icon */}
                  <div className="p-3 bg-blue-500/20 text-blue-400 rounded-lg group-hover:scale-110 transition-transform">
                    {/* <BsEnvelopeFill  /> */}
                    <i className="bi bi-envelope-at-fill" size={24}></i>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-wider text-blue-300">Email</h4>
                    <p className="text-sm font-semibold mt-0.5">vwaruinu@gmail.com</p>
                  </div>
                </div>
                {/* <button className="text-white/40 hover:text-white p-1 transition relative">
                  <span className="text-xs font-mono block bg-blue-950 px-2 py-0.5 rounded text-blue-300 absolute -top-8 right-2 shadow transition-opacity duration-200 pointer-events-none opacity-0 group-hover:opacity-100">
                    {copied ? "Copied!" : "Copy"}
                  </span>
                  {/* <BiCopy  /> */}
                  {/* <i className="bi bi-c-circle" size={16}></i>
                </button> */}
              </div>
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
              onClick={() => setActiveImage(null)}
            >
              <button
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white text-4xl font-light hover:text-gray-300 cursor-pointer transition select-none z-50"
                onClick={() => setActiveImage(null)}
              >
                &times;
              </button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-5xl max-h-[85vh] flex items-center justify-center cursor-default"
                onClick={(e) => e.stopPropagation()}
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
  )
}

export default Contact;

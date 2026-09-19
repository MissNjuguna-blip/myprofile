import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
// import profileImage from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 pb-10 pt-25 md:px-12 lg:px-20">
      {/* Decorative circles */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[12%] top-[18%] h-20 w-20 rounded-full border-[3px] border-cyan-400"
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[10%] top-[25%] h-8 w-8 rounded-full bg-cyan-400"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute right-[15%] top-[17%] h-6 w-6 rounded-full border-2 border-[#ff5c4d]"
      />

      <div className="mx-auto flex min-h-[80vh] max-w-7xl items-center">
        <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-black/50"
            >
              Software Developer
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-4xl text-[clamp(4rem,9vw,8rem)] font-semibold leading-[0.85] tracking-[-0.07em]"
            >
              Hi,
              <br />
              I'm{" "}
              <span className="relative inline-block text-[#ff5c4d]">
                Virginia
                <span className="absolute -bottom-2 left-0 h-[5px] w-full rounded-full bg-[#ff5c4d]" />
              </span>
              <br />
              Waruinu.
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center"
            >
              <a
                href="/about"
                className="group flex w-fit items-center gap-3 rounded-full bg-[#111111] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#ff5c4d]"
              >
                View my work
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
              <a
                href="/#contact"
                className="group flex w-fit items-center gap-3 text-sm font-medium"
              >
                Let's connect
                <ArrowDownRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </motion.div>
          </div>
          {/* RIGHT SIDE */}
            <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative flex justify-center lg:justify-end"
            >
            <div className="group relative h-[500px] w-full max-w-[500px] overflow-hidden rounded-[2rem] bg-[#111111] md:h-[620px]">
                {/* Your image */}
                <img
                src="/profile.png"
                alt="Miss Njuguna"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Accent circle */}
                <motion.div
                animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute right-8 top-8 h-20 w-20 rounded-full border-[3px] border-cyan-400"
                />

                {/* Top information */}
                <div className="absolute left-0 right-0 top-0 flex justify-between p-8 text-white md:p-10">

                <span className="text-lg font-semibold">
                    &lt; / &gt;
                </span>

                <span className="text-xs uppercase tracking-[0.25em] text-white/70">
                    Kenya
                </span>

                </div>

                {/* Bottom text */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white md:p-10">

                <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#ff5c4d]">
                    Software Developer
                </p>

                <h2 className="max-w-md text-3xl font-medium leading-tight md:text-5xl">
                    I build digital
                    <span className="text-white/50">
                    {" "}experiences, systems & ideas.
                    </span>
                </h2>

                <div className="mt-6 flex items-center justify-between border-t border-white/20 pt-5">

                    <div>
                    <p className="text-xs uppercase tracking-widest text-white/40">
                        Currently
                    </p>

                    <p className="mt-1 text-sm">
                        Building & learning
                    </p>
                    </div>

                    <div className="text-3xl">
                    ✦
                    </div>

                </div>

                </div>

            </div>
            </motion.div>


        </div>
      </div>


      {/* Bottom information */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mx-auto mt-10 flex max-w-7xl items-center justify-between border-t border-black/10 pt-5"
      >

        <p className="text-xs uppercase tracking-widest text-black/40">
          Scroll to explore
        </p>

        <p className="text-xs text-black/40">
          React · Vite · Tailwind · JavaScript
        </p>

      </motion.div>

    </section>
  );
};

export default Hero;

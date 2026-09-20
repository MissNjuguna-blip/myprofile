import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="absolute left-0 top-0 z-50 w-full px-6 py-6 md:px-12 lg:px-20 bg-white/50"
    >
      <div className="mx-auto max-w-7xl">

        {/* TOP NAVBAR */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="text-xl font-semibold tracking-tight md:text-2xl"
          >
            Virginia<span className="text-[#ff5c4d]">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">

            {/* Home */}
            <Link
              to="/"
              className="text-sm transition-colors hover:text-[#ff5c4d]"
            >
              Home
            </Link>

            {/* About */}
            <Link
              to="/about"
              className="text-sm transition-colors hover:text-[#ff5c4d]"
            >
              About
            </Link>

            {/* GitHub - External Link */}
            <a
              href="https://github.com/MissNjuguna-blip"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-xl transition-all hover:scale-110 hover:text-[#ff5c4d]"
            >
              <i className="bi bi-github"></i>
            </a>

            {/* LinkedIn - External Link */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-xl transition-all hover:scale-110 hover:text-[#ff5c4d]"
            >
              <i className="bi bi-linkedin"></i>
            </a>

            {/* Let's Talk */}
            <a
              href="#contact"
              className="rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#ff5c4d]"
            >
              Let's talk
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-black/80 p-3 transition-colors hover:bg-black hover:text-white md:hidden"
          >
            <i
              className={`bi ${
                menuOpen ? "bi-x-lg" : "bi-list"
              } text-xl`}
            ></i>
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-5 overflow-hidden rounded-2xl bg-[#111111] p-6 text-white md:hidden"
            >
              <div className="flex flex-col gap-6">

                {/* Home */}
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="text-lg transition-colors hover:text-[#ff5c4d]"
                >
                  Home
                </Link>

                {/* About */}
                <Link
                  to="/about"
                  onClick={closeMenu}
                  className="text-lg transition-colors hover:text-[#ff5c4d]"
                >
                  About
                </Link>

                {/* Social Links */}
                <div className="flex items-center gap-5 border-t border-white/10 pt-5">

                  {/* GitHub */}
                  <a
                    href="https://github.com/MissNjuguna-blip"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="text-2xl transition-colors hover:text-[#ff5c4d]"
                  >
                    <i className="bi bi-github"></i>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="text-2xl transition-colors hover:text-[#ff5c4d]"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>

                </div>

                {/* Let's Talk */}
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="w-fit rounded-full bg-[#ff5c4d] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
                >
                  <i className="bi bi-telephone-fill"></i>
                  <span className="m-2">
                    Let's talk : 0113626210
                  </span>
                </a>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.nav>
  );
};

export default Navbar;

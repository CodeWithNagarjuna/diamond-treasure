import { motion } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import logo from "./assets/logo.png";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-yellow-500/20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
         <div className="w-8 h-8 overflow-hidden flex items-center justify-center">
  <img
    src={logo}
    alt="Diamond Treasure"
    className="w-full h-full object-contain"
  />
</div>

          <div>
            <h1 className="text-2xl font-bold leading-none">
              <span className="text-white">Diamond</span>{" "}
              <span className="text-yellow-500">Treasure</span>
            </h1>

            <p className="text-xs tracking-[6px] text-yellow-400 mt-1">
              CO-LIVING
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-white hover:text-yellow-500 transition">
            Home
          </a>

          <a href="#rooms" className="text-white hover:text-yellow-500 transition">
            Rooms
          </a>

          <a href="#amenities" className="text-white hover:text-yellow-500 transition">
            Amenities
          </a>

          <a href="#gallery" className="text-white hover:text-yellow-500 transition">
            Gallery
          </a>

          <a href="#location" className="text-white hover:text-yellow-500 transition">
            Location
          </a>

          <a href="#contact" className="text-white hover:text-yellow-500 transition">
            Contact
          </a>
        </div>

        {/* CTA */}
        <button className="hidden md:block px-8 py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold shadow-lg shadow-yellow-500/20 hover:scale-105 transition">
          Schedule Visit
        </button>

        {/* Mobile Menu */}
        <button className="md:hidden text-white text-3xl">
          <HiOutlineMenuAlt3 />
        </button>
      </div>
    </motion.nav>
  );
}
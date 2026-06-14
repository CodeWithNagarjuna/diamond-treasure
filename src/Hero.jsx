import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaWhatsapp, FaShieldAlt, FaWifi, FaSnowflake, FaUsers } from "react-icons/fa";
import heroRoom from "./assets/Premium Room.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-28 px-6 lg:px-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-5 py-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 text-yellow-400 text-sm mb-6"
          >
            PREMIUM CO-LIVING SPACE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black leading-none"
          >
            <span className="text-white">DIAMOND</span>
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              TREASURE
            </span>
          </motion.h1>

          <h2 className="text-3xl md:text-4xl tracking-[12px] text-gray-300 mt-4">
            CO-LIVING
          </h2>

          <div className="flex items-center gap-2 mt-6 text-yellow-400 text-lg">
            <FaMapMarkerAlt />
            Madhapur, Hyderabad
          </div>

          <p className="mt-6 text-gray-400 text-lg max-w-xl leading-relaxed">
            Comfortable living spaces for students and working
            professionals. Premium rooms, entertainment terrace,
            high-speed WiFi and 24/7 security.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold hover:scale-105 transition">
              Schedule Visit
            </button>

            <button className="px-8 py-4 rounded-xl border border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 transition flex items-center gap-2">
              <FaWhatsapp />
              WhatsApp Now
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <motion.img
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            src={heroRoom}
            alt="Diamond Treasure Room"
            className="w-full h-[550px] object-cover rounded-[32px] border border-yellow-500/20 shadow-[0_0_60px_rgba(234,179,8,0.20)]"
          />

          {/* TOP CARD */}
          <div className="absolute top-6 right-6 bg-black/70 backdrop-blur-xl border border-yellow-500/20 rounded-2xl p-4">
            <h3 className="text-3xl font-bold text-yellow-400">10+</h3>
            <p className="text-gray-300 text-sm">Rooms Available</p>
          </div>

          {/* BOTTOM CARD */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[92%] rounded-3xl backdrop-blur-xl bg-black/60 border border-yellow-500/20 p-5">

            <div className="grid grid-cols-4 gap-4 text-center">

              <div>
                <FaUsers className="mx-auto text-yellow-400 text-2xl mb-2" />
                <h3 className="text-yellow-400 text-xl font-bold">1-4</h3>
                <p className="text-sm text-gray-300">Sharing</p>
              </div>

              <div>
                <FaSnowflake className="mx-auto text-yellow-400 text-2xl mb-2" />
                <h3 className="text-yellow-400 text-xl font-bold">AC</h3>
                <p className="text-sm text-gray-300">Available</p>
              </div>

              <div>
                <FaShieldAlt className="mx-auto text-yellow-400 text-2xl mb-2" />
                <h3 className="text-yellow-400 text-xl font-bold">24/7</h3>
                <p className="text-sm text-gray-300">Security</p>
              </div>

              <div>
                <FaWifi className="mx-auto text-yellow-400 text-2xl mb-2" />
                <h3 className="text-yellow-400 text-xl font-bold">WiFi</h3>
                <p className="text-sm text-gray-300">Internet</p>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-[#050816] flex items-center justify-center z-50">
      <div className="text-center">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-black"
        >
          <span className="text-white">DIAMOND</span>{" "}
          <span className="text-yellow-500">TREASURE</span>
        </motion.h1>

        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="mt-4 text-gray-400"
        >
          Loading...
        </motion.div>
      </div>
    </div>
  );
}
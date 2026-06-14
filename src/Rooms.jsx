import { motion } from "framer-motion";

import room1 from "./assets/room1.jpeg";
import room2 from "./assets/room2.jpeg";
import room3 from "./assets/room3.jpeg";
import room4 from "./assets/room4.jpeg";

const rooms = [
  {
    title: "1 Sharing Room",
    image: room1,
    desc: "Private and comfortable room for individuals seeking maximum privacy.",
  },
  {
    title: "2 Sharing Room",
    image: room2,
    desc: "Perfect for friends and working professionals looking to share comfortably.",
  },
  {
    title: "3 Sharing Room",
    image: room3,
    desc: "Affordable and spacious option with all essential amenities included.",
  },
  {
    title: "4 Sharing Room",
    image: room4,
    desc: "Budget-friendly community living with a comfortable environment.",
  },
];

export default function Rooms() {
  return (
    <section
      id="rooms"
      className="py-24 px-6 lg:px-10 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-yellow-500 tracking-[5px] uppercase">
            Room Options
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-3">
            Choose Your Perfect Space
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Flexible sharing options designed for students and working professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {rooms.map((room, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
              className="group overflow-hidden rounded-3xl bg-white/5 border border-yellow-500/10 backdrop-blur-xl hover:border-yellow-500/50"
            >
              <div className="overflow-hidden relative">

                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-[320px] object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute top-4 left-4 bg-yellow-500 text-black font-bold px-4 py-2 rounded-full">
                  {room.title}
                </div>

              </div>

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-3">
                  {room.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {room.desc}
                </p>

                <div className="flex gap-4 mt-6">

                  <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold hover:scale-105 transition">
                    Schedule Visit
                  </button>

                  <button className="px-6 py-3 rounded-xl border border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 transition">
                    View Details
                  </button>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
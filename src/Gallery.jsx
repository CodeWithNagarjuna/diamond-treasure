import { motion } from "framer-motion";

import building from "./assets/Building.jpeg";
import room from "./assets/Premium Room.jpeg";
import parking from "./assets/Parking.jpeg";
import lift from "./assets/Lift.jpeg";
import kitchen from "./assets/Kitchen.jpeg";
import terrace from "./assets/Terrace.png";

const galleryItems = [
  {
    title: "Diamond Treasure Building",
    image: building,
  },
  {
    title: "Premium Room",
    image: room,
  },
  {
    title: "Secure Bike Parking",
    image: parking,
  },
  {
    title: "Modern Lift Facility",
    image: lift,
  },
  {
    title: "Kitchen Area",
    image: kitchen,
  },
  {
    title: "Entertainment Terrace",
    image: terrace,
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 px-6 lg:px-10 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-yellow-500 tracking-[5px] uppercase">
            Experience Life at Diamond Treasure
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            Explore Our Facilities
          </h2>

          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            Discover comfortable living spaces and premium facilities
            designed for students and working professionals.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
              className="group overflow-hidden rounded-3xl bg-white/5 border border-yellow-500/20 hover:border-yellow-500/60 backdrop-blur-sm"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[300px] object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
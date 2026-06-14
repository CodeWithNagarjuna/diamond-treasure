import { motion } from "framer-motion";
import {
  FaWifi,
  FaShieldAlt,
  FaBed,
  FaMapMarkerAlt,
  FaBuilding,
  FaFilm,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBed />,
    title: "1-4 Sharing Rooms",
    desc: "Flexible room options for every budget.",
  },
  {
    icon: <FaWifi />,
    title: "High-Speed WiFi",
    desc: "Stay connected for work and entertainment.",
  },
  {
    icon: <FaShieldAlt />,
    title: "24/7 Security",
    desc: "Safe and secure living environment.",
  },
  {
    icon: <FaBuilding />,
    title: "Lift Facility",
    desc: "Easy access to all floors.",
  },
  {
    icon: <FaFilm />,
    title: "Entertainment Terrace",
    desc: "Projector movie nights and IPL screenings.",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Prime Location",
    desc: "Located in the heart of Madhapur.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 px-6 lg:px-10 bg-[#050816]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-yellow-500 tracking-[5px] uppercase">
            Why Choose Us
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-3">
            Why Residents Love
            <span className="text-yellow-500">
              {" "}Diamond Treasure
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 backdrop-blur-lg border border-yellow-500/20 rounded-3xl p-8 hover:border-yellow-500/60"
            >
              <div className="text-yellow-500 text-5xl mb-5">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-400">
                {feature.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
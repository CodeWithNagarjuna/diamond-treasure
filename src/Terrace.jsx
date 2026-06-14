import { motion } from "framer-motion";
import { FaFilm, FaFutbol, FaUsers, FaLeaf } from "react-icons/fa";
import terrace from "./assets/Terrace.png";

export default function Terrace() {
  const features = [
    {
      icon: <FaFilm />,
      title: "Movie Nights",
      desc: "Weekend projector screenings under the open sky",
    },
    {
      icon: <FaFutbol />,
      title: "Live Matches",
      desc: "IPL, Cricket World Cup & major sporting events",
    },
    {
      icon: <FaUsers />,
      title: "Community Living",
      desc: "Meet students and working professionals",
    },
    {
      icon: <FaLeaf />,
      title: "Green Terrace",
      desc: "Relax and unwind in a peaceful environment",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#050816] overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-yellow-500 tracking-[6px] uppercase mb-4">
            Entertainment Terrace
          </p>

          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent">
            More Than Just A Room
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-center">

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="overflow-hidden rounded-3xl"
          >
            <img
              src={terrace}
              alt="Entertainment Terrace"
              className="w-full h-[450px] object-cover rounded-3xl border border-yellow-500/20 shadow-[0_0_60px_rgba(234,179,8,0.15)]"
            />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">

            {features.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 backdrop-blur-lg border border-yellow-500/20 rounded-3xl p-8 hover:border-yellow-500"
              >
                <div className="text-yellow-500 text-4xl mb-5">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

          <div className="bg-white/5 rounded-3xl p-6 text-center border border-yellow-500/10">
            <h3 className="text-4xl font-bold text-yellow-500">100+</h3>
            <p className="text-gray-400 mt-2">Movie Nights</p>
          </div>

          <div className="bg-white/5 rounded-3xl p-6 text-center border border-yellow-500/10">
            <h3 className="text-4xl font-bold text-yellow-500">500+</h3>
            <p className="text-gray-400 mt-2">Cricket Fans</p>
          </div>

          <div className="bg-white/5 rounded-3xl p-6 text-center border border-yellow-500/10">
            <h3 className="text-4xl font-bold text-yellow-500">24/7</h3>
            <p className="text-gray-400 mt-2">Community Living</p>
          </div>

          <div className="bg-white/5 rounded-3xl p-6 text-center border border-yellow-500/10">
            <h3 className="text-4xl font-bold text-yellow-500">50+</h3>
            <p className="text-gray-400 mt-2">Happy Residents</p>
          </div>

        </div>

      </div>
    </section>
  );
}
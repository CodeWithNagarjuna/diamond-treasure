import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul K.",
    role: "Software Engineer",
    review:
      "Clean rooms, great facilities and a very comfortable environment. The terrace movie nights are a big plus.",
  },
  {
    name: "Arjun S.",
    role: "Student",
    review:
      "Perfect location in Madhapur. Easy access to metro, restaurants and IT companies.",
  },
  {
    name: "Vikram R.",
    role: "Working Professional",
    review:
      "Safe, well-maintained and community-focused. One of the best co-living spaces I've stayed in.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 lg:px-10 bg-[#050816]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-yellow-500 tracking-[5px] uppercase">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold mt-3">
            What Our Residents Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white/5 border border-yellow-500/20 rounded-3xl p-8"
            >
              <div className="text-yellow-500 text-2xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-300 leading-7">
                "{item.review}"
              </p>

              <div className="mt-6">
                <h3 className="font-bold text-lg text-white">
                  {item.name}
                </h3>

                <p className="text-gray-500 text-sm">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
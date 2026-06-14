import {
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaDirections,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 lg:px-10 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-yellow-500 tracking-[5px] uppercase">
            Contact Us
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-3">
            Schedule Your Visit
          </h2>

          <p className="text-gray-400 mt-4">
            Contact us today and check room availability.
          </p>
        </div>

        {/* Quick Actions */}

        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <motion.a
            whileHover={{ y: -5 }}
            href="tel:+919111221166"
            className="bg-white/5 border border-yellow-500/20 rounded-3xl p-6 text-center"
          >
            <FaPhone className="mx-auto text-4xl text-yellow-500 mb-4" />
            <h3 className="font-bold text-xl">Call Now</h3>
          </motion.a>

          <motion.a
            whileHover={{ y: -5 }}
            href="https://wa.me/919111221166"
            target="_blank"
            className="bg-white/5 border border-yellow-500/20 rounded-3xl p-6 text-center"
          >
            <FaWhatsapp className="mx-auto text-4xl text-yellow-500 mb-4" />
            <h3 className="font-bold text-xl">WhatsApp</h3>
          </motion.a>

          <motion.a
            whileHover={{ y: -5 }}
            href="#location"
            className="bg-white/5 border border-yellow-500/20 rounded-3xl p-6 text-center"
          >
            <FaDirections className="mx-auto text-4xl text-yellow-500 mb-4" />
            <h3 className="font-bold text-xl">Get Directions</h3>
          </motion.a>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Info */}

          <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-yellow-500/20 p-10">

            <h3 className="text-3xl font-bold mb-8">
              Contact Details
            </h3>

            <div className="space-y-8">

              <div className="flex items-center gap-4">
                <FaPhone className="text-yellow-500 text-xl" />

                <div>
                  <p className="font-semibold">
                    K. Bharadwaj
                  </p>

                  <p className="text-gray-400">
                    +91 9111221166
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-yellow-500 text-xl" />

                <div>
                  <p className="font-semibold">
                    D. Sathish Nanda
                  </p>

                  <p className="text-gray-400">
                    +91 8889880828
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-yellow-500 text-xl" />

                <div>
                  <p className="font-semibold">
                    Diamond Treasure Co-Living
                  </p>

                  <p className="text-gray-400">
                    Madhapur, Hyderabad
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Form */}

          <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-yellow-500/20 p-10">

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 rounded-xl bg-black/20 border border-white/10 outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-4 rounded-xl bg-black/20 border border-white/10 outline-none"
              />

              <select className="w-full p-4 rounded-xl bg-black/20 border border-white/10 outline-none">
                <option>Room Preference</option>
                <option>1 Sharing</option>
                <option>2 Sharing</option>
                <option>3 Sharing</option>
                <option>4 Sharing</option>
              </select>

              <textarea
                rows="4"
                placeholder="Message"
                className="w-full p-4 rounded-xl bg-black/20 border border-white/10 outline-none"
              />

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold hover:scale-[1.02] transition"
              >
                Schedule Visit
              </button>

            </form>

            <div className="mt-6 text-sm text-gray-400">
              ✓ Quick Response <br />
              ✓ Free Property Visit <br />
              ✓ No Hidden Charges
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
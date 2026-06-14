import { FaMapMarkerAlt, FaSubway, FaBuilding, FaUtensils, FaHospital } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Location() {
  return (
    <section
      id="location"
      className="py-24 px-6 lg:px-10 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-yellow-500 tracking-[5px] uppercase">
            Prime Location
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-3">
            Located in the Heart of Madhapur
          </h2>

          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            Enjoy easy access to IT hubs, metro connectivity,
            restaurants, hospitals and all daily essentials.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Map */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="overflow-hidden rounded-3xl border border-yellow-500/20 shadow-[0_0_40px_rgba(234,179,8,0.10)]"
          >
            <iframe
              title="Diamond Treasure Location"
              src="https://maps.google.com/maps?q=Madhapur&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[500px]"
              loading="lazy"
            />
          </motion.div>

          {/* Details */}
          <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-yellow-500/20 p-10">

            <div className="flex items-center gap-3 text-yellow-500 mb-6">
              <FaMapMarkerAlt className="text-2xl" />

              <h3 className="text-3xl font-bold">
                Diamond Treasure Co-Living
              </h3>
            </div>

            <p className="text-gray-300 leading-8 text-lg">
              Plot No. 125,
              <br />
              Street No. 6,
              <br />
              Chanda Naik Nagar,
              <br />
              Madhapur,
              <br />
              Hyderabad, Telangana – 500081
            </p>

            {/* Nearby Highlights */}

            <div className="grid sm:grid-cols-2 gap-4 mt-10">

              <div className="p-5 rounded-2xl bg-black/20 border border-white/10">
                <FaSubway className="text-yellow-500 text-2xl mb-3" />
                <h4 className="font-semibold">
                  Metro Connectivity
                </h4>
                <p className="text-sm text-gray-400 mt-2">
                  Easy access to nearby metro stations.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-black/20 border border-white/10">
                <FaBuilding className="text-yellow-500 text-2xl mb-3" />
                <h4 className="font-semibold">
                  IT Hub Access
                </h4>
                <p className="text-sm text-gray-400 mt-2">
                  Close to Hitech City and major companies.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-black/20 border border-white/10">
                <FaUtensils className="text-yellow-500 text-2xl mb-3" />
                <h4 className="font-semibold">
                  Restaurants & Cafes
                </h4>
                <p className="text-sm text-gray-400 mt-2">
                  Food and essentials just minutes away.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-black/20 border border-white/10">
                <FaHospital className="text-yellow-500 text-2xl mb-3" />
                <h4 className="font-semibold">
                  Hospitals Nearby
                </h4>
                <p className="text-sm text-gray-400 mt-2">
                  Healthcare facilities within easy reach.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
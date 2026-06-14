import {
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-yellow-500/20 bg-[#050816] py-16 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}

          <div>
            <h3 className="text-3xl font-bold">
              <span className="text-white">
                Diamond
              </span>{" "}
              <span className="text-yellow-500">
                Treasure
              </span>
            </h3>

            <p className="text-gray-400 mt-4 leading-7">
              Premium co-living space for students and
              working professionals in Madhapur,
              Hyderabad.
            </p>

            <div className="flex items-center gap-3 mt-5 text-gray-300">
              <FaMapMarkerAlt className="text-yellow-500" />
              Madhapur, Hyderabad
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h4 className="text-xl font-bold mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#home" className="hover:text-yellow-500">
                  Home
                </a>
              </li>

              <li>
                <a href="#rooms" className="hover:text-yellow-500">
                  Rooms
                </a>
              </li>

              <li>
                <a href="#gallery" className="hover:text-yellow-500">
                  Gallery
                </a>
              </li>

              <li>
                <a href="#location" className="hover:text-yellow-500">
                  Location
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-yellow-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h4 className="text-xl font-bold mb-5">
              Contact
            </h4>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <FaPhone className="text-yellow-500" />
                <span className="text-gray-400">
                  +91 9111221166
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="text-yellow-500" />
                <span className="text-gray-400">
                  +91 8889880828
                </span>
              </div>

              <a
                href="https://wa.me/919111221166"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-yellow-500"
              >
                <FaWhatsapp />
                WhatsApp
              </a>

              <a
                href="#"
                className="flex items-center gap-3 text-gray-400 hover:text-yellow-500"
              >
                <FaInstagram />
                Instagram
              </a>

            </div>
          </div>

        </div>

        {/* Facilities */}

        <div className="border-t border-white/10 mt-12 pt-8">

          <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-400">

            <span>✓ Premium Rooms</span>
            <span>✓ Lift Facility</span>
            <span>✓ Bike Parking</span>
            <span>✓ Entertainment Terrace</span>
            <span>✓ High-Speed WiFi</span>

          </div>

          <p className="text-center text-gray-500 mt-8">
            © 2026 Diamond Treasure Co-Living. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}
import {
  FaMapMarkerAlt,
  FaShieldAlt,
  FaWifi,
  FaUtensils,
  FaVideo,
  FaSnowflake,
} from "react-icons/fa";

const features = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Prime Location",
    desc: "Located in Madhapur near IT hubs and transport facilities.",
  },
  {
    icon: <FaShieldAlt />,
    title: "24/7 Security",
    desc: "CCTV surveillance and secure environment for residents.",
  },
  {
    icon: <FaWifi />,
    title: "High-Speed WiFi",
    desc: "Reliable internet for students and professionals.",
  },
  {
    icon: <FaUtensils />,
    title: "Food & Self Cooking",
    desc: "Food options along with self-cooking facilities.",
  },
  {
    icon: <FaVideo />,
    title: "Projector Screening",
    desc: "Enjoy movies and community events together.",
  },
  {
    icon: <FaSnowflake />,
    title: "AC Rooms Available",
    desc: "AC and Non-AC rooms based on your requirements.",
  },
];

export default function Features() {
  return (
    <section id="amenities" className="py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-yellow-500 tracking-[4px] uppercase">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Everything You Need
          </h2>

          <p className="text-gray-400 mt-4">
            Comfortable living designed for students and professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-yellow-500/40 transition duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl text-yellow-500 mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
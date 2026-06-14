import { FaUsers, FaBed, FaShieldAlt, FaHeart } from "react-icons/fa";

export default function Stats() {
  const stats = [
    {
      icon: <FaUsers />,
      value: "200+",
      label: "Happy Residents",
    },
    {
      icon: <FaBed />,
      value: "50+",
      label: "Rooms Available",
    },
    {
      icon: <FaShieldAlt />,
      value: "24/7",
      label: "Security",
    },
    {
      icon: <FaHeart />,
      value: "100%",
      label: "Comfort",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-xl"
            >
              <div className="text-4xl text-yellow-500 flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-yellow-400">
                {item.value}
              </h3>

              <p className="text-gray-400 mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
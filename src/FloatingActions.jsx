import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex">

      <a
        href="tel:+919111221166"
        className="flex-1 bg-yellow-500 text-black py-4 flex items-center justify-center gap-2 font-bold"
      >
        <FaPhoneAlt />
        Call Now
      </a>

      <a
        href="https://wa.me/919111221166"
        target="_blank"
        rel="noreferrer"
        className="flex-1 bg-green-600 text-white py-4 flex items-center justify-center gap-2 font-bold"
      >
        <FaWhatsapp />
        WhatsApp
      </a>

    </div>
  );
}
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919111221166"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-3xl shadow-2xl animate-bounce">
        <FaWhatsapp />
      </div>
    </a>
  );
}
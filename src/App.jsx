import { useEffect, useState } from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Rooms from "./Rooms";
import Terrace from "./Terrace";
import Stats from "./Stats";
import Gallery from "./Gallery";
import WhyChoose from "./WhyChoose";
import Location from "./Location";
import Contact from "./Contact";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import LoadingScreen from "./LoadingScreen";
import Testimonials from "./Testimonials";
import FloatingActions from "./FloatingActions";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-[#050816] text-white overflow-x-hidden">
      <Navbar />

      <Hero />

      <Features />

      <Rooms />

      <Terrace />

      <Stats />

      <Testimonials />

      <Gallery />

      <WhyChoose />

      <Location />

      <Contact />

      <Footer />

      <FloatingActions />

      <WhatsAppButton />
    </div>
  );
}

export default App;
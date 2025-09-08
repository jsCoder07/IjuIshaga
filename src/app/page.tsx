import Image from "next/image";
import Hero from "./components/Hero";
import FeaturedRooms from "./components/FeaturedRooms";
import About from "./components/About";
import Dining from "./components/Dinning";
import Ammenities from "./components/Ammenities";
import FooterCTA from "./components/FooterCta";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <FeaturedRooms />
      <Dining />
      <Ammenities />
      <FooterCTA/>
    </main>

  );
}

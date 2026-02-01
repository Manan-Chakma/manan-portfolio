import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Hero } from "@/app/components/Hero"
import { About } from "@/app/components/About";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  );
}

import Header from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { Hero } from "@/app/components/Hero"
import { About } from "@/app/components/About";
import { Skills } from "@/app/components/Skills";
import { Experience } from "@/app/components/Experience";
import { Projects } from "@/app/components/Projects";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

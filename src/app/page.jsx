import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
import Experience from "@/components/Home/Experience";
import FAQ from "@/components/Home/FAQ";
import HeroBanner from "@/components/Home/HeroBanner";
import Projects from "@/components/Home/Projects";
import Reviews from "@/components/Home/Reviews";
import Skills from "@/components/Home/Skills";


export default function Home() {
  return (
    <div>
      <HeroBanner />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Reviews />
      <FAQ />
      <Contact />
    </div>
  );
}

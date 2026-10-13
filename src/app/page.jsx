import About from "@/components/Home/About";
import HeroBanner from "@/components/Home/HeroBanner";
import Projects from "@/components/Home/Projects";
import Skills from "@/components/Home/Skills";


export default function Home() {
  return (
    <div>
      <HeroBanner />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

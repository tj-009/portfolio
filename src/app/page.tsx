import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import AIEvaluation from "@/components/AIEvaluation";
import Skills from "@/components/Skills";
// import CodingProfiles from "@/components/CodingProfiles";
import WhyFit from "@/components/WhyFit";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <AIEvaluation />
      <Skills />
      {/* <CodingProfiles /> */}
      <WhyFit />
      <Contact />
    </>
  );
}

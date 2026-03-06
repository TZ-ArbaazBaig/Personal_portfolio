import Scene from "@/components/Scene";
import Hero from "@/components/Hero";
import Terminal from "@/components/Terminal";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Impact from "@/components/Impact";
import Architecture from "@/components/Architecture";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Services from "@/components/Services";
import GithubActivity from "@/components/GithubActivity";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";

export default function Home() {
  return (
    <main className="relative">
      <Scene />
      <AIChatbot />
      <div className="relative z-10">
        <Hero />
        <Projects />
        <Architecture />
        <Impact />
        <Stats />
        <Terminal />
        <Skills />
        <GithubActivity />
        <Experience />
        <Education />
        <Services />
        <Contact />
        <Footer />
      </div>

      {/* Scroll indicator */}
      <section className="h-[10vh] flex items-center justify-center relative z-10">
        <div className="opacity-20 flex flex-col items-center">
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>
    </main>
  );
}

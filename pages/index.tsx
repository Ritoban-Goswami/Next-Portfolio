import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Projects from "@/Components/Projects";
import ContactForm from "@/Components/ContactForm";

export default function Home() {
  return (
    <>
      <Header />
      <section id="hero" className="min-h-screen flex items-center">
        <Hero />
      </section>
      <section id="about" className="min-h-screen flex items-center">
        <About />
      </section>
      <section id="projects" className="min-h-screen flex items-center">
        <Projects />
      </section>
      <section id="contact" className="min-h-screen flex items-center">
        <ContactForm />
      </section>
    </>
  );
}

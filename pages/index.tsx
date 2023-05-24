import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Projects from "@/Components/Projects";
import ContactForm from "@/Components/ContactForm";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="container mx-auto px-20 h-screen snap-center"
      >
        <Header />
        <Hero />
      </section>
      <section
        id="about"
        className="container mx-auto px-20 h-screen flex items-center snap-center"
      >
        <About />
      </section>
      <section
        id="projects"
        className="container mx-auto px-20 h-screen flex items-center snap-center"
      >
        <Projects />
      </section>
      <section
        id="contact"
        className="container mx-auto px-20 h-screen flex items-center flex-col snap-center"
      >
        <ContactForm />
        <Footer />
      </section>
    </>
  );
}

import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import ExperienceSkills from "@/Components/ExperienceSkills";
import Projects from "@/Components/Projects";
import ContactForm from "@/Components/ContactForm";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <>
      <section
        id="hero"
        // className="snap-center"
        // className="container mx-auto px-20 h-screen snap-center"
      >
        {/* <Header /> */}
        <Hero />
      </section>
      <section
        id="about"
        // className="flex items-center snap-center"
        // className="container mx-auto px-20 h-screen flex items-center snap-center"
      >
        <About />
      </section>
      <section
        id="experience-skills"
        // className="flex items-center snap-center"
        // className="container mx-auto px-20 h-screen flex items-center snap-center"
      >
        <ExperienceSkills />
      </section>
      <section
        id="projects"
        // className="flex items-center snap-center"
        // className="container mx-auto px-20 h-screen flex items-center snap-center"
      >
        <Projects />
      </section>
      <section
        id="contact"
        // className="flex items-center flex-col snap-center"
        // className="container mx-auto px-20 h-screen flex items-center flex-col snap-center"
      >
        <ContactForm />
        {/* <Footer /> */}
      </section>
    </>
  );
}

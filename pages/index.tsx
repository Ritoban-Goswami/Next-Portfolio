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
        className="mt-20 mb-16 md:mt-24 lg:mt-5 lg:m-b-0 lg:h-screen flex items-center justify-center"
        // className="container mx-auto px-20 h-screen snap-center"
      >
        {/* <Header /> */}
        <Hero />
      </section>
      <section
        id="about"
        className="my-16"
        // className="container mx-auto px-20 h-screen flex items-center snap-center"
      >
        <About />
      </section>
      <section
        id="experience-skills"
        className="my-16"
        // className="container mx-auto px-20 h-screen flex items-center snap-center"
      >
        <ExperienceSkills />
      </section>
      <section
        id="projects"
        className="my-16"
        // className="container mx-auto px-20 h-screen flex items-center snap-center"
      >
        <Projects />
      </section>
      <section
        id="contact"
        className="my-16"
        // className="container mx-auto px-20 h-screen flex items-center flex-col snap-center"
      >
        <ContactForm />
        {/* <Footer /> */}
      </section>
    </>
  );
}

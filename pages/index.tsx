import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Projects from "@/Components/Projects";
import ContactForm from "@/Components/ContactForm";
import Footer from "@/Components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <main
        className={`${inter.className} overflow-y-scroll max-h-screen snap-y snap-mandatory overflow-x-clip scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-[#ad000085]`}
      >
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
          // className="flex items-center"
          className="container mx-auto px-20 snap-center"
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
      </main>
    </>
  );
}

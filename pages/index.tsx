import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Projects from "@/Components/Projects";
import ContactForm from "@/Components/ContactForm";
import Footer from "@/Components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Home() {
  return (
    <>
      <main
        className={`container mx-auto px-20 ${inter.variable} font-inter snap-mandatory`}
      >
        <section id="hero" className="min-h-screen snap-center">
          <Header />
          <Hero />
        </section>
        <section
          id="about"
          className="min-h-screen flex items-center snap-center"
        >
          <About />
        </section>
        <section
          id="projects"
          className="min-h-screen flex items-center snap-center"
        >
          <Projects />
        </section>
        <section
          id="contact"
          className="min-h-screen flex items-center snap-center"
        >
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}

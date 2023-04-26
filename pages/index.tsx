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
      <main className={`container mx-auto px-4 ${inter.variable} font-inter`}>
        <section id="hero" className="min-h-screen">
          <Header />
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
      </main>
      <Footer />
    </>
  );
}

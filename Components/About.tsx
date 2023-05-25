import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import AboutSVG from "@/public/svg/aboutSVG";

type Props = {};

function About({}: Props) {
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delay: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="flex justify-between"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.85 }}
    >
      <div className="w-5/12">
        <AboutSVG className="w-10/12 mx-auto" />
      </div>
      <div className="flex flex-col w-5/12">
        <h3
          className="text-7xl font-bold mb-12 tracking-wider"
          style={{ textShadow: "#2B2B2B 0.4rem 0px 0px" }}
        >
          Over the years,
        </h3>
        <div className="text-xl text-neutral-400">
          <p className="mb-3">
            I've been a Web Designer and Front End Web Developer, using various
            technologies to build digital products for different industries. I
            believe that the work I aspire to do defines me more than what I
            have already accomplished. I'm driven by a love for learning,
            problem-solving, and pushing myself outside of my comfort zone.
            Alongside my professional pursuits, I enjoy playing musical
            instruments, traveling, learning new languages, and exploring life.
          </p>
          <p className="mb-3">
            In my journey, I've developed a strong commitment to delivering
            exceptional results for clients. Collaboration and effective
            communication are crucial in understanding their unique needs. By
            fostering strong client-designer relationships, I create tailor-made
            solutions that surpass expectations. I take pride in attention to
            detail and strive for pixel-perfect designs that combine aesthetics
            with functionality. With a solid foundation in web technologies, I
            stay up-to-date with the latest trends, ensuring my work remains
            innovative.
          </p>
          I’d love to hear from you, feel free to{" "}
          <Link className="text-primary-red tracking-widest" href={"#contact"}>
            contact me.
          </Link>
          You can check out my{" "}
          <Link
            className="text-primary-red tracking-widest"
            href={
              "https://docs.google.com/document/d/184pnJeKjjObl9KucRJJB4QlqMAAXqfjk/edit?usp=sharing&ouid=110347533012246211464&rtpof=true&sd=true"
            }
            target="_blank"
          >
            Resume here.
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default About;

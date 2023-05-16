import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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
      <div className="flex flex-col w-5/12">
        <h3
          className="text-7xl font-bold mb-12 tracking-wider"
          style={{ textShadow: "#2B2B2B 0.4rem 0px 0px" }}
        >
          About Me
        </h3>
        <p className="text-xl text-neutral-400">
          Hi, this is Ritoban, I’m a Web Designer and a Front End Web Developer,
          using various web technologies to build digital products for different
          niches and different industries. I think the work you want to do
          defines you more than the work you’ve done. I love to keep learning,
          and problem-solving and I continue challenging myself to do things
          that are out of my comfort zone. and I love playing musical
          instruments, traveling, learning new languages, and exploring life in
          general. I’d love to hear from you, feel free to{" "}
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
        </p>
      </div>
      <div className="w-5/12">
        <h3
          className="text-7xl font-bold mb-12 tracking-wider"
          style={{ textShadow: "#2B2B2B 0.4rem 0px 0px" }}
        >
          Skills
        </h3>
        <motion.div
          className="flex flex-wrap"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.span
            variants={item}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
            className="text-neutral-800 text-xl uppercase m-3 bg-secondary-grey py-3 px-5 rounded-xl font-bold border-2 border-neutral-800 tracking-widest shadow-solid shadow-primary-red cursor-pointer select-none"
          >
            HTML
          </motion.span>
          <motion.span
            variants={item}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
            className="text-neutral-800 text-xl uppercase m-3 bg-secondary-grey py-3 px-5 rounded-xl font-bold border-2 border-neutral-800 tracking-widest shadow-solid shadow-primary-red cursor-pointer select-none"
          >
            CSS
          </motion.span>
          <motion.span
            variants={item}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
            className="text-neutral-800 text-xl uppercase m-3 bg-secondary-grey py-3 px-5 rounded-xl font-bold border-2 border-neutral-800 tracking-widest shadow-solid shadow-primary-red cursor-pointer select-none"
          >
            JavaScript
          </motion.span>
          <motion.span
            variants={item}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
            className="text-neutral-800 text-xl uppercase m-3 bg-secondary-grey py-3 px-5 rounded-xl font-bold border-2 border-neutral-800 tracking-widest shadow-solid shadow-primary-red cursor-pointer select-none"
          >
            Bootstrap
          </motion.span>
          <motion.span
            variants={item}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
            className="text-neutral-800 text-xl uppercase m-3 bg-secondary-grey py-3 px-5 rounded-xl font-bold border-2 border-neutral-800 tracking-widest shadow-solid shadow-primary-red cursor-pointer select-none"
          >
            JQuery
          </motion.span>
          <motion.span
            variants={item}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
            className="text-neutral-800 text-xl uppercase m-3 bg-secondary-grey py-3 px-5 rounded-xl font-bold border-2 border-neutral-800 tracking-widest shadow-solid shadow-primary-red cursor-pointer select-none"
          >
            SASS
          </motion.span>
          <motion.span
            variants={item}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
            className="text-neutral-800 text-xl uppercase m-3 bg-secondary-grey py-3 px-5 rounded-xl font-bold border-2 border-neutral-800 tracking-widest shadow-solid shadow-primary-red cursor-pointer select-none"
          >
            GIT
          </motion.span>
          <motion.span
            variants={item}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
            className="text-neutral-800 text-xl uppercase m-3 bg-secondary-grey py-3 px-5 rounded-xl font-bold border-2 border-neutral-800 tracking-widest shadow-solid shadow-primary-red cursor-pointer select-none"
          >
            VS Code
          </motion.span>
          <motion.span
            variants={item}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
            className="text-neutral-800 text-xl uppercase m-3 bg-secondary-grey py-3 px-5 rounded-xl font-bold border-2 border-neutral-800 tracking-widest shadow-solid shadow-primary-red cursor-pointer select-none"
          >
            Figma
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;

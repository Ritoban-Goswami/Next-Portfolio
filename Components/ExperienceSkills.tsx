import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function ExperienceSkills({}: Props) {
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
          Experience
        </h3>
        <motion.div
          variants={item}
          whileHover={{
            y: -8,
            transition: { duration: 0.1 },
          }}
          className="rounded-md p-4 bg-stone-950 mb-4"
        >
          <h4 className="text-lg font-semibold mb-4">
            Associate Developer At Appycodes
          </h4>
          <p className="text-base font-normal text-neutral-400">
            This is a simple Landing Page dedicated to my favorite folk artist,
            Bob Dylan. I've used HTML, CSS, JavaScript, and Bootstrap for this
            project.
          </p>
        </motion.div>
        <motion.div
          variants={item}
          whileHover={{
            y: -8,
            transition: { duration: 0.1 },
          }}
          className="rounded-md p-4 bg-stone-950"
        >
          <h4 className="text-lg font-normal mb-4">Freelance Web Developer</h4>
          <p className="text-base font-semibold text-neutral-400">
            This is a simple Landing Page dedicated to my favorite folk artist,
            Bob Dylan. I've used HTML, CSS, JavaScript, and Bootstrap for this
            project.
          </p>
        </motion.div>
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

export default ExperienceSkills;

import React from "react";
import ProjectElement from "./ProjectElement";
import { motion } from "framer-motion";

type Props = {};

function ProjectsGrid({}: Props) {
  const slides = [];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delay: 0.15,
      },
    },
  };

  for (let i = 0; i < 4; i++) {
    slides.push(<ProjectElement key={i} />);
  }

  return (
    <motion.div
      className="grid lg:grid-cols-2 gap-6 md:gap-14 lg:gap-8 mx-auto w-11/12"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {slides}
    </motion.div>
  );
}

export default ProjectsGrid;

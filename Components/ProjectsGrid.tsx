import React from "react";
import ProjectSlide from "./ProjectSlide";
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
    slides.push(<ProjectSlide key={i} />);
  }

  return (
    <motion.div
      className="grid grid-cols-2 gap-x-8 gap-y-12 mx-auto w-10/12"
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

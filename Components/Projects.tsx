import React from "react";
import ProjectsGrid from "@/Components/ProjectsGrid";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.85 }}
      className="flex flex-col justify-evenly items-center h-[95%]"
    >
      <h3
        className="text-4xl xl:text-7xl font-bold my-12 tracking-wider"
        style={{ textShadow: "#2B2B2B 0.4rem 0px 0px" }}
      >
        My Recent Projects
      </h3>
      <ProjectsGrid />
    </motion.div>
  );
}

export default Projects;

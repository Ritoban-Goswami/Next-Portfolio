import React from "react";
import ProjectSlider from "@/Components/ProjectSlider";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.85 }}
      className="h-screen flex flex-col overflow-hidden max-w-full justify-evenly mx-auto"
    >
      <h3
        className="text-7xl font-bold my-12 tracking-wider"
        style={{ textShadow: "#2B2B2B 0.4rem 0px 0px" }}
      >
        Check Out My Recent Projects
      </h3>
      <ProjectSlider />
    </motion.div>
  );
}

export default Projects;

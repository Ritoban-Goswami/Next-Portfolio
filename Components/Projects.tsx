import React from "react";
import Project from "@/Components/Project";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.85 }}
    >
      <h3 className="text-6xl font-semibold mb-12">
        These Are Some Of My Recent Projects
      </h3>
      <Project />
    </motion.div>
  );
}

export default Projects;

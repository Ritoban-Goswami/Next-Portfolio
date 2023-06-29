import React from "react";
import { motion } from "framer-motion";
import ProjectElement from "./ProjectElement";
import { Project } from "@/typings";

type Props = { projects: Project[] };

function Projects({ projects }: Props) {
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

  // for (let i = 0; i < 4; i++) {
  //   slides.push(<ProjectElement key={i} />);
  // }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.85 }}
      className="flex flex-col justify-evenly md:items-center"
    >
      <h3 className="heading text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-12 lg:mb-16 tracking-wider">
        My Recent Projects
      </h3>
      <motion.div
        className="grid lg:grid-cols-2 gap-6 md:gap-14 lg:gap-8 mx-auto w-11/12"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects?.map((project) => (
          <ProjectElement
            key={project._id}
            projectTitle={project.projectTitle}
            projectDesc={project.projectDescription}
            projectShortDesc={project.projectShortDescription}
            projectImg={project.projectImage}
            projectSlug={project.projectSlug.current}
            projectInProgress={project.projectInProgress}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Projects;

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ExperienceCard from "./ExperienceCard";
import SkillElement from "./SkillElement";

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

  const experiences = [];

  for (let i = 0; i < 2; i++) {
    const isLastCard = i === 2 - 1;
    experiences.push(<ExperienceCard key={i} isLastCard={isLastCard} />);
  }

  return (
    <motion.div
      className="flex justify-between flex-col gap-y-12 md:gap-y-16 lg:flex-row lg:gap-x-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.85 }}
    >
      <div className="flex flex-col">
        <h3 className="heading text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-10 lg:mb-12 tracking-wider">
          Experience
        </h3>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className=""
        >
          {experiences}
        </motion.div>
      </div>
      <div className="">
        <h3 className="heading text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-10 lg:mb-12 tracking-wider">
          Skills
        </h3>
        <motion.div
          className="flex flex-wrap gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <SkillElement />
          <SkillElement />
          <SkillElement />
          <SkillElement />
          <SkillElement />
          <SkillElement />
          <SkillElement />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ExperienceSkills;

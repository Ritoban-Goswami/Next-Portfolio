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
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className=""
        >
          {experiences}
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

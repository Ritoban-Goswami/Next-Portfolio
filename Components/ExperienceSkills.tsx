import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ExperienceCard from "./ExperienceCard";
import SkillElement from "./SkillElement";
import { Experience, Skills } from "@/typings";

type Props = { experiences: Experience[]; skills: Skills[] };

function ExperienceSkills(props: Props) {
  const { experiences, skills } = props;

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

  console.log(experiences);

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
          {experiences?.map((experience, index) => (
            <ExperienceCard
              key={experience._id}
              isLastCard={index === experiences.length - 1}
              experienceTitle={experience.jobTitle}
              experienceDesc={experience.description}
              experienceStart={experience.dateStarted}
              experienceEnd={experience.dateEnded}
              experienceLink={experience.companyLink}
            />
          ))}
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
          {skills?.map((skill, index) => (
            <SkillElement key={skill._id} skillName={skill.skillName} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ExperienceSkills;

import React from "react";
import { motion } from "framer-motion";

type Props = { skillName: string };

function SkillElement({ skillName }: Props) {
  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <motion.span
      variants={item}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.1 },
      }}
      whileTap={{ scale: 0.9 }}
      className="text-neutral-800 text-base sm:text-xl uppercase bg-[#fff5f5] dark:bg-secondary-grey p-2.5 py-1.5 sm:py-3 sm:px-5 rounded-xl font-bold border-2 border-neutral-800 tracking-wide lg:tracking-widest shadow-solid shadow-primary-red cursor-pointer select-none"
    >
      {skillName}
    </motion.span>
  );
}

export default SkillElement;

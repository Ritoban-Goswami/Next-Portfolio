import React from "react";
import { motion } from "framer-motion";

type Props = {};

function SkillElement({}: Props) {
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
      className="text-neutral-800 text-xl uppercase bg-secondary-grey py-3 px-5 rounded-xl font-bold border-2 border-neutral-800 tracking-widest shadow-solid shadow-primary-red cursor-pointer select-none"
    >
      HTML
    </motion.span>
  );
}

export default SkillElement;

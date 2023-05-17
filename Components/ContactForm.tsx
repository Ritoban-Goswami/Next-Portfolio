import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ContactForm({}: Props) {
  return (
    <motion.div
      className="w-full flex justify-between h-[90%] items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.85 }}
    >
      <h3
        className="text-7xl font-bold tracking-wider mb-12 w-5/12"
        style={{ textShadow: "#2B2B2B 0.4rem 0px 0px" }}
      >
        Got a Project? Let's Team Up and Make it Awesome!
      </h3>
      <form
        action="
      "
        className="flex flex-col w-7/12"
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email">Your Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="message">Your Message</label>
        <textarea name="message" id="message"></textarea>
      </form>
    </motion.div>
  );
}

export default ContactForm;

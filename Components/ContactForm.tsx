import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ContactForm({}: Props) {
  return (
    <motion.div
      className="w-full self-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.85 }}
    >
      {/* <h3 className="text-6xl font-semibold mb-12">
        Thanks For Taking The Time To Reach Out
      </h3>
      <form
        action="
      "
        className="flex flex-col"
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email">Your Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="message">Your Message</label>
        <textarea name="message" id="message"></textarea>
      </form> */}
      Contact Form To be done later
    </motion.div>
  );
}

export default ContactForm;

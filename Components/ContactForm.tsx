import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {};

function ContactForm({}: Props) {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const handleSubmit = () => {
    console.log("Form Submission");
  };

  return (
    <motion.div
      className="w-full flex justify-between h-[90%] items-center gap-x-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.85 }}
    >
      <h3
        className="text-7xl font-bold tracking-wider w-6/12"
        style={{ textShadow: "#2B2B2B 0.4rem 0px 0px" }}
      >
        Got a Project? Let's Team Up and Make it Awesome!
      </h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center w-6/12 px-12 h-4/6 rounded-lg bg-stone-950"
      >
        <h5 className="mb-12 font-bold text-3xl">Send a message</h5>
        <div className="relative z-0 w-full mb-12 group">
          <input
            type="text"
            name="formName"
            id="formName"
            onChange={(e) => {
              setFormName(e.target.value);
            }}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-neutral-100 dark:border-gray-600 dark:focus:border-primary-red focus:outline-none focus:ring-0 focus:border-primary-red peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="formName"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Your Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-12 group">
          <input
            type="email"
            name="formEmail"
            id="formEmail"
            onChange={(e) => {
              setFormEmail(e.target.value);
            }}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-neutral-100 dark:border-gray-600 dark:focus:border-primary-red focus:outline-none focus:ring-0 focus:border-primary-red peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="formEmail"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Your Email
          </label>
        </div>
        <div className="relative z-0 w-full mb-12 group">
          <textarea
            id="formMessage"
            name="formMessage"
            onChange={(e) => {
              setFormMessage(e.target.value);
            }}
            rows={5}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-neutral-100 dark:border-gray-600 dark:focus:border-primary-red focus:outline-none focus:ring-0 focus:border-primary-red peer"
            placeholder=" "
          ></textarea>
          <label
            htmlFor="formMessage"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Your Message
          </label>
        </div>
        <button
          type="submit"
          className="self-center bg-transparent hover:bg-primary-red text-primary-red font-semibold hover:text-neutral-100 py-2 px-8 border-2 border-primary-red hover:border-transparent rounded-lg"
        >
          Send
        </button>
      </form>
    </motion.div>
  );
}

export default ContactForm;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { useForm } from "react-hook-form";
import { BsFillCheckCircleFill, BsExclamationCircleFill } from "react-icons/bs";

type Props = {};

function ContactForm({}: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: {},
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");
  const [formSent, setFormSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showToast]);

  useEffect(() => {
    if (!isSubmitting) {
      reset();
    }
  }, [isSubmitting, reset]);

  function onSubmit(data: any) {
    setSuccessMessage("");
    setFormSent(false);

    setIsSubmitting(true);

    axios
      .post("https://eo9o6mq79q0ewrn.m.pipedream.net", data)
      .then((response) => {
        setSuccessMessage(`Thanks For Signing Up! 👍`);
        setFormSent(true);
        setShowToast(true);
      })
      .catch((e) => {
        setErrorMessage(`Something Went Wrong 🚫`);
        setShowToast(true);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <motion.div
      className="w-full flex flex-col lg:items-center lg:flex-row justify-between items-stretch gap-x-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.85 }}
    >
      <h3 className="heading hidden lg:inline-block lg:text-4xl xl:text-5xl font-bold tracking-wider mb-16 lg:w-6/12">
        Got a Project? Let's Team Up and Make it Awesome!
      </h3>
      <h3 className="heading lg:hidden text-2xl md:text-3xl md:text-center font-bold tracking-wider mb-12 lg:w-6/12">
        Let's Make Your Project Awesome!
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center p-3 rounded-lg bg-stone-300 dark:bg-stone-950 mx-auto w-10/12 sm:w-8/12 lg:w-5/12 lg:p-5 lg:h-4/6"
      >
        <h5 className="mb-6 lg:mb-12 font-bold text-xl lg:text-2xl">
          Send a message
        </h5>
        <div className="relative z-0 w-full mb-6 md:mb-10 lg:mb-12 group">
          <input
            type="text"
            id="formName"
            {...register("formName")}
            className="block py-2.5 px-0 w-full text-xs lg:text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-neutral-100 dark:border-gray-600 dark:focus:border-primary-red focus:outline-none focus:ring-0 focus:border-primary-red peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="formName"
            className="peer-focus:font-medium absolute text-xs lg:text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Your Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 md:mb-10 lg:mb-12 group">
          <input
            type="email"
            {...register("formEmail")}
            id="formEmail"
            className="block py-2.5 px-0 w-full text-xs lg:text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-neutral-100 dark:border-gray-600 dark:focus:border-primary-red focus:outline-none focus:ring-0 focus:border-primary-red peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="formEmail"
            className="peer-focus:font-medium absolute text-xs lg:text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Your Email
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 md:mb-10 lg:mb-12 group">
          <textarea
            id="formMessage"
            {...register("formMessage")}
            rows={4}
            className="block py-2.5 px-0 w-full text-xs lg:text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-neutral-100 dark:border-gray-600 dark:focus:border-primary-red focus:outline-none focus:ring-0 focus:border-primary-red peer"
            placeholder=" "
          ></textarea>
          <label
            htmlFor="formMessage"
            className="peer-focus:font-medium absolute text-xs lg:text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Your Message
          </label>
        </div>
        <button
          role="submit"
          className="self-center text-sm lg:text-lg w-30 lg:w-40 h-10 flex justify-center items-center bg-transparent hover:bg-primary-red text-primary-red font-semibold hover:text-neutral-100 py-2 px-4 lg:px-8 border-2 border-primary-red hover:border-transparent rounded-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div
              className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            ></div>
          ) : (
            "Submit"
          )}
        </button>
        <AnimatePresence>
          {showToast && (
            <motion.div
              id="form-toast"
              role="alert"
              className="fixed top-5 inset-x-0 z-[60]"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mx-auto flex items-center max-w-xs p-4 bg-stone-950 rounded-lg drop-shadow-lg border border-[#161616]">
                {formSent ? (
                  <BsFillCheckCircleFill />
                ) : (
                  <BsExclamationCircleFill className="text-primary-red" />
                )}
                <div className="pl-2 text-xs lg:text-sm font-semibold">
                  {formSent ? successMessage : errorMessage}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
}

export default ContactForm;

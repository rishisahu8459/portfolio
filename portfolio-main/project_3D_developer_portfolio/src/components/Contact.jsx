import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { ContactCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// Opens Google Calendar with a pre-filled event; add Google Meet in one click,
// pick a time and invite me as a guest.
const GMEET_SCHEDULE_URL =
  "https://calendar.google.com/calendar/render?action=TEMPLATE" +
  "&text=" +
  encodeURIComponent("Intro Call with Rishabh Sahu") +
  "&details=" +
  encodeURIComponent(
    "Let's connect! Add Google Meet to this event and pick a time that works for you."
  ) +
  "&add=" +
  encodeURIComponent("rishishahu112@gmail.com");

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Rishi",
          from_email: form.email,
          to_email: "rishishahu112@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] glass-card p-8'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <a
          href='mailto:rishishahu112@gmail.com'
          className='mt-3 inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors text-[15px]'
        >
          <span aria-hidden>✉</span> rishishahu112@gmail.com
        </a>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-10 flex flex-col gap-6'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3 text-[15px]'>
              Your Name
            </span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='glass py-4 px-6 placeholder:text-secondary/70 text-white rounded-xl outline-none font-medium focus:border-accent/50 transition-colors'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3 text-[15px]'>
              Your email
            </span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='glass py-4 px-6 placeholder:text-secondary/70 text-white rounded-xl outline-none font-medium focus:border-accent/50 transition-colors'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3 text-[15px]'>
              Your Message
            </span>
            <textarea
              rows={6}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='glass py-4 px-6 placeholder:text-secondary/70 text-white rounded-xl outline-none font-medium focus:border-accent/50 transition-colors resize-none'
            />
          </label>

          <div className='flex flex-wrap items-center gap-4'>
            <button type='submit' className='btn-accent'>
              {loading ? "Sending..." : "Send message"}
              <span aria-hidden>→</span>
            </button>

            <a
              href={GMEET_SCHEDULE_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='btn-ghost'
            >
              <span aria-hidden>📅</span> Schedule a call
            </a>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <ContactCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

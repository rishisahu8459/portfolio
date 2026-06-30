import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const stats = [
  { value: "1.5+", label: "Years building products" },
  { value: "10+", label: "Projects shipped" },
  { value: "95%", label: "Unit test coverage" },
];

const cardBase = "glass-card p-6 relative overflow-hidden group";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About me</h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(0,1fr)] gap-5">
        {/* Bio — spans two columns */}
        <motion.div
          variants={fadeIn("right", "spring", 0.1, 0.75)}
          className={`${cardBase} md:col-span-2 md:row-span-2`}
        >
          <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-accent/20 blur-3xl group-hover:bg-accent/30 transition-colors" />
          <h3 className="text-white text-[22px] font-bold mb-3">
            Associate Software Engineer{" "}
            <span className="text-gradient-accent">@ Accenture</span>
          </h3>
          <p className="text-secondary text-[15px] leading-[28px]">
            I build enterprise web applications with React, TypeScript and
            Redux. Currently working on Metrolinx's Content Management Platform —
            delivering production-grade features, POCs, accessibility
            improvements and high-coverage unit tests while supporting Azure
            CI/CD pipelines and releases.
          </p>
          <p className="text-secondary text-[15px] leading-[28px] mt-3">
            I love turning complex requirements into clean, fast and delightful
            interfaces — with a growing focus on cloud, DevOps and secure
            application development.
          </p>

          <div className="mt-6 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-gradient-accent text-[26px] sm:text-[32px] font-black leading-none">
                  {s.value}
                </p>
                <p className="text-secondary text-[12px] mt-1.5 leading-tight">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Availability / location card */}
        <motion.div
          variants={fadeIn("left", "spring", 0.2, 0.75)}
          className={`${cardBase} flex flex-col justify-between`}
        >
          <div className="flex items-center gap-2 text-sm text-secondary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Open to work
          </div>
          <div className="mt-4">
            <p className="text-white text-[18px] font-semibold">
              Bengaluru, India
            </p>
            <p className="text-secondary text-[13px] mt-1">
              Remote / Hybrid friendly
            </p>
          </div>
        </motion.div>

        {/* Currently exploring card */}
        <motion.div
          variants={fadeIn("left", "spring", 0.3, 0.75)}
          className={`${cardBase} flex flex-col justify-between`}
        >
          <p className="text-secondary text-[12px] uppercase tracking-[0.2em]">
            Currently exploring
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {["Three.js", "Cloud", "DevOps", "WebGL"].map((t) => (
              <span
                key={t}
                className="text-[12px] px-2.5 py-1 rounded-full border border-white/10 text-accent-light bg-white/5"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* What I do */}
      <motion.div variants={textVariant()} className="mt-16">
        <p className={styles.sectionSubText}>What I do</p>
      </motion.div>

      <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={fadeIn("up", "spring", index * 0.2, 0.6)}
            className={`${cardBase} flex flex-col items-center text-center py-8`}
          >
            <div className="w-16 h-16 rounded-2xl grid place-items-center mb-4 border border-accent/20 bg-white/5 group-hover:shadow-glow transition-shadow">
              <img
                src={service.icon}
                alt={service.title}
                className="w-9 h-9 object-contain"
              />
            </div>
            <h3 className="text-white text-[16px] font-semibold leading-snug">
              {service.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

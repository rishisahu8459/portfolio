import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { HeroCanvas } from "./canvas";

const roles = [
  "Software Development Engineer",
  "React + TypeScript",
  "Cloud & DevOps",
  "Full-Stack Engineer",
  "UI Systems Builder",
];

// Avoid mounting the heavy WebGL canvas on small / low-power devices.
const useEnable3D = () => {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(mq.matches && !reduce.matches);
    update();
    mq.addEventListener("change", update);
    reduce.addEventListener("change", update);
    return () => {
      mq.removeEventListener("change", update);
      reduce.removeEventListener("change", update);
    };
  }, []);
  return enabled;
};

// Magnetic wrapper: pulls a button slightly toward the cursor.
const Magnetic = ({ children }) => {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="inline-block transition-transform duration-300 ease-out will-change-transform"
    >
      {children}
    </div>
  );
};

const RoleRotator = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block h-[1.2em] overflow-hidden align-bottom">
      <motion.span
        key={index}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-gradient-accent inline-block"
      >
        {roles[index]}
      </motion.span>
    </span>
  );
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const Hero = () => {
  const enable3D = useEnable3D();

  return (
    <section
      id="hero"
      className="relative w-full h-screen mx-auto overflow-hidden"
    >
      {/* Backgrounds */}
      <div className="aurora" />
      <div className="absolute inset-0 grid-overlay" />

      {/* 3D centerpiece — falls back to a CSS orb on mobile / reduced motion */}
      <div className="absolute inset-0 lg:left-[35%] z-0">
        {enable3D ? (
          <HeroCanvas />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-56 h-56 rounded-full bg-accent-gradient opacity-30 blur-2xl animate-pulse-glow" />
          </div>
        )}
      </div>

      {/* Content */}
      <div
        className={`${styles.paddingX} relative z-10 h-full max-w-7xl mx-auto flex flex-col justify-center pt-24 sm:pt-28`}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          <motion.div
            variants={item}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-sm text-secondary"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Available for new opportunities
          </motion.div>

          <motion.p
            variants={item}
            className="text-secondary text-[18px] sm:text-[20px] mb-2"
          >
            Hi, I'm{" "}
            <span className="text-white font-semibold">Rishabh Sahu</span>
          </motion.p>

          <motion.h1 variants={item} className={styles.heroHeadText}>
            I build <span className="text-gradient-accent">scalable</span>
            <br className="hidden sm:block" /> product experiences
          </motion.h1>

          <motion.h2
            variants={item}
            className={`${styles.heroSubText} mt-4 font-semibold text-white/90`}
          >
            <RoleRotator />
          </motion.h2>

          <motion.p
            variants={item}
            className="text-secondary mt-5 text-[16px] sm:text-[18px] leading-relaxed max-w-xl"
          >
            I design and ship reusable React/TypeScript interfaces, performant enterprise workflows, and cloud-aware product experiences for high-traffic users.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-4 mt-8"
          >
            <Magnetic>
              <a href="#work" className="btn-accent">
                View my work
                <span aria-hidden>→</span>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="https://docs.google.com/document/d/1ti5xekszJzQ7i5w8fwUkfYHDLj2wDWZWVeQXGsLH44s/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Resume
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            variants={item}
            className="flex items-center gap-5 mt-8"
          >
            <a
              href="https://github.com/rishisahu8459"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors text-[15px]"
            >
              GitHub
            </a>
            <span className="w-px h-4 bg-white/15" />
            <a
              href="https://www.linkedin.com/in/rishabh-sahu-3ba680187/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors text-[15px]"
            >
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 w-full flex justify-center z-10">
        <a href="#about" aria-label="Scroll down">
          <div className="w-[30px] h-[54px] rounded-full border-2 border-secondary/50 flex justify-center pt-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-scroll-dot" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

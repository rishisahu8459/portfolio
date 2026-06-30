import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My toolkit</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Tech & Stack.
        </h2>
      </motion.div>

      {/* Interactive grid */}
      <div className="mt-14 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4">
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            variants={fadeIn("up", "spring", index * 0.06, 0.5)}
            className="glass-card group flex flex-col items-center justify-center gap-3 py-6 px-2 cursor-default"
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-12 h-12 object-contain transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(45,212,191,0)] group-hover:drop-shadow-[0_0_14px_rgba(45,212,191,0.5)]"
            />
            <span className="text-secondary text-[12px] text-center group-hover:text-white transition-colors">
              {technology.name}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Marquee strip */}
      <div className="mt-12 relative overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-12">
          {[...technologies, ...technologies].map((t, i) => (
            <span
              key={`${t.name}-${i}`}
              className="text-secondary/70 text-[15px] font-medium uppercase tracking-widest whitespace-nowrap flex items-center gap-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {t.name}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");

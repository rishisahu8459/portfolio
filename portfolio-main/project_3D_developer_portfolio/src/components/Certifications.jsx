import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certifications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const levelStyles = {
  Expert: "text-rose-300 border-rose-400/30 bg-rose-400/10",
  Professional: "text-accent-light border-accent/30 bg-accent/10",
  Associate: "text-sky-300 border-sky-400/30 bg-sky-400/10",
  Specialty: "text-violet-300 border-violet-400/30 bg-violet-400/10",
  Foundational: "text-amber-300 border-amber-400/30 bg-amber-400/10",
  Course: "text-secondary border-white/15 bg-white/5",
};

const initials = (issuer) =>
  issuer
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const CertCard = ({ cert, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", (index % 4) * 0.12, 0.5)}
    initial="hidden"
    animate="show"
    className="glass-card group p-5 flex flex-col gap-4 h-full"
  >
    <div className="flex items-start justify-between gap-3">
      <div className="flex items-center gap-3">
        <span
          className="grid place-items-center w-11 h-11 rounded-xl text-white font-bold text-sm shrink-0 shadow-md"
          style={{
            background: `linear-gradient(135deg, ${cert.color}, ${cert.color}99)`,
          }}
        >
          {initials(cert.issuer)}
        </span>
        <div>
          <p className="text-white text-[15px] font-semibold leading-snug">
            {cert.title}
          </p>
          <p className="text-secondary text-[12px] mt-0.5">{cert.issuer}</p>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-between mt-auto">
      <span
        className={`text-[11px] px-2.5 py-1 rounded-full border ${
          levelStyles[cert.level] || levelStyles.Course
        }`}
      >
        {cert.level}
      </span>
      <span className="text-secondary/80 text-[12px]">{cert.date}</span>
    </div>

    {cert.skills.length > 0 && (
      <div className="flex flex-wrap gap-1.5">
        {cert.skills.map((s) => (
          <span
            key={s}
            className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 text-secondary border border-white/10"
          >
            {s}
          </span>
        ))}
      </div>
    )}
  </motion.div>
);

const Certifications = () => {
  const [expanded, setExpanded] = useState(false);

  const featured = useMemo(
    () => certifications.filter((c) => c.featured),
    []
  );
  const rest = useMemo(
    () => certifications.filter((c) => !c.featured),
    []
  );

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Validated expertise
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Certifications.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[16px] max-w-3xl mx-auto text-center leading-[28px]"
      >
        {certifications.length}+ industry certifications across Cloud, DevOps and
        Security — from Google Cloud, Microsoft Azure and AWS.
      </motion.p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {featured.map((cert, index) => (
          <CertCard key={cert.title} cert={cert} index={index} />
        ))}
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="more"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {rest.map((cert, index) => (
                <CertCard key={cert.title} cert={cert} index={index} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-10 flex justify-center">
        <button
          onClick={() => setExpanded((v) => !v)}
          className="btn-ghost"
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : `Show ${rest.length} more`}
          <span
            aria-hidden
            className={`transition-transform duration-300 ${
              expanded ? "rotate-180" : ""
            }`}
          >
            ↓
          </span>
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");

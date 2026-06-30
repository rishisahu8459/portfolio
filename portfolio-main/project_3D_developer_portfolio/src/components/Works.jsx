import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const isLiveLink = (link) => link && !link.includes("github.com");

const ProjectCard = ({ index, project, onOpen }) => {
  const { name, description, tags, image } = project;
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${px * 10}deg) rotateX(${
      -py * 10
    }deg) translateY(-4px)`;
  };

  const reset = () => {
    if (ref.current)
      ref.current.style.transform =
        "perspective(900px) rotateY(0) rotateX(0) translateY(0)";
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.15, 0.6)}>
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        onClick={() => onOpen(project)}
        className="glass-card p-4 cursor-pointer transition-transform duration-200 ease-out will-change-transform"
      >
        <div className="relative w-full h-[220px] rounded-xl overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <span className="absolute top-3 left-3 text-[11px] px-2.5 py-1 rounded-full glass text-accent-light">
            {isLiveLink(project.source_code_link) ? "Live demo" : "Source"}
          </span>
        </div>

        <div className="mt-4">
          <h3 className="text-white font-bold text-[20px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.slice(0, 4).map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className="text-[12px] px-2.5 py-1 rounded-full border border-white/10 text-secondary bg-white/5"
            >
              #{tag.name}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-1 text-accent text-[13px] font-medium">
          View case study <span aria-hidden>→</span>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  const live = isLiveLink(project.source_code_link);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.92, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.92, y: 20, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="glass-card relative w-full max-w-2xl max-h-[88vh] overflow-y-auto p-0"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full glass grid place-items-center text-white hover:text-accent transition-colors"
        >
          ✕
        </button>

        <div className="relative h-[260px] w-full overflow-hidden rounded-t-[1.25rem]">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-transparent to-transparent" />
        </div>

        <div className="p-6">
          <h3 className="text-white text-[26px] font-bold">{project.name}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag.name}
                className="text-[12px] px-2.5 py-1 rounded-full border border-accent/20 text-accent-light bg-white/5"
              >
                #{tag.name}
              </span>
            ))}
          </div>
          <p className="mt-4 text-secondary text-[15px] leading-[28px]">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={project.source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent"
            >
              {live ? "Visit live site" : "View source"}
              <span aria-hidden>↗</span>
            </a>
            {!live && (
              <span className="btn-ghost cursor-default flex items-center gap-2">
                <img src={github} alt="" className="w-4 h-4 object-contain" />
                GitHub
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Works = () => {
  const [active, setActive] = useState(null);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          A selection of projects that showcase how I solve real-world problems
          across the stack — from blockchain crowdfunding to e-commerce
          platforms. Click any card to dive into the case study.
        </motion.p>
      </div>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            project={project}
            onOpen={setActive}
          />
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <ProjectModal project={active} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Works, "projects");

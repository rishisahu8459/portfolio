import React, { useEffect, useState } from "react";

// Space Cat — an astronaut cat riding a small spaceship with animated jet
// flames. Hidden over the hero, then the ship flies in from the right once
// the user scrolls past it. The cat keeps waving "hello".
const SpaceCat = () => {
  const [lucky, setLucky] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Reveal the ship once the hero is mostly scrolled away.
    const onScroll = () => {
      const trigger = window.innerHeight * 0.6;
      setVisible(window.scrollY > trigger);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    setLucky(true);
    setTimeout(() => setLucky(false), 900);
  };

  return (
    <div
      className={`space-cat ${visible ? "space-cat--in" : ""}`}
      role="button"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      aria-label="Astronaut cat — click to say hi"
      onClick={handleClick}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleClick()}
      title="Space cat · click to say hi!"
    >
      {lucky && <span className="space-cat__hello">👋</span>}
      <div className="space-cat__inner">
        <svg
          viewBox="0 0 150 130"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="shipBody" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e8edf6" />
              <stop offset="100%" stopColor="#aab6cc" />
            </linearGradient>
            <linearGradient id="jet" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5eead4" />
              <stop offset="55%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="rgba(34,211,238,0)" />
            </linearGradient>
            <radialGradient id="glass" cx="40%" cy="35%" r="70%">
              <stop offset="0%" stopColor="#d6fbff" />
              <stop offset="60%" stopColor="#7fdfff" />
              <stop offset="100%" stopColor="#2aa7d8" />
            </radialGradient>
          </defs>

          {/* ---------- Jet flames (animated) ---------- */}
          <g className="space-cat__jets">
            <path className="space-cat__flame space-cat__flame--1"
              d="M52 104 q6 22 12 0 Z" fill="url(#jet)" />
            <path className="space-cat__flame space-cat__flame--2"
              d="M86 104 q6 26 12 0 Z" fill="url(#jet)" />
          </g>

          {/* ---------- Spaceship ---------- */}
          {/* fins */}
          <path d="M40 96 l-12 12 l16 -4 Z" fill="#e23b3b" />
          <path d="M110 96 l12 12 l-16 -4 Z" fill="#e23b3b" />
          {/* hull */}
          <ellipse cx="75" cy="98" rx="42" ry="16" fill="url(#shipBody)" stroke="#8c99b3" strokeWidth="1.5" />
          <ellipse cx="75" cy="94" rx="42" ry="12" fill="#f4f7fc" />
          {/* hull stripe + rivets */}
          <path d="M34 96 q41 14 82 0" stroke="#22d3ee" strokeWidth="2.5" fill="none" opacity="0.8" />
          <g fill="#9aa6c0">
            <circle cx="50" cy="96" r="1.4" />
            <circle cx="62" cy="98" r="1.4" />
            <circle cx="75" cy="99" r="1.4" />
            <circle cx="88" cy="98" r="1.4" />
            <circle cx="100" cy="96" r="1.4" />
          </g>

          {/* booster nozzles */}
          <rect x="52" y="100" width="12" height="8" rx="3" fill="#8c99b3" />
          <rect x="86" y="100" width="12" height="8" rx="3" fill="#8c99b3" />

          {/* ---------- Astronaut cat in cockpit ---------- */}
          {/* helmet glass */}
          <circle cx="75" cy="58" r="30" fill="url(#glass)" opacity="0.5" stroke="#bfeeff" strokeWidth="2" />
          <circle cx="75" cy="58" r="30" fill="none" stroke="#e8fbff" strokeWidth="1" opacity="0.7" />
          {/* helmet glare */}
          <path d="M58 44 q8 -8 18 -6" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.8" />

          {/* cat head */}
          <g>
            {/* ears */}
            <path d="M58 44 l-3 -13 l13 7 Z" fill="#ffffff" stroke="#e7e0d2" strokeWidth="1.5" />
            <path d="M92 44 l3 -13 l-13 7 Z" fill="#ffffff" stroke="#e7e0d2" strokeWidth="1.5" />
            <path d="M59 41 l-1.5 -6 l6 3 Z" fill="#ffb3c1" />
            <path d="M91 41 l1.5 -6 l-6 3 Z" fill="#ffb3c1" />

            {/* face */}
            <circle cx="75" cy="58" r="22" fill="#ffffff" stroke="#e7e0d2" strokeWidth="1.5" />
            {/* eyes */}
            <path d="M65 56 q3 4 6 0" stroke="#333" strokeWidth="2.2" fill="none" strokeLinecap="round" />
            <path d="M79 56 q3 4 6 0" stroke="#333" strokeWidth="2.2" fill="none" strokeLinecap="round" />
            {/* nose + mouth */}
            <circle cx="75" cy="63" r="1.8" fill="#ff8aa0" />
            <path d="M75 65 q-4 5 -8 1 M75 65 q4 5 8 1" stroke="#c9a24b" strokeWidth="1.3" fill="none" strokeLinecap="round" />
            {/* cheeks */}
            <circle cx="63" cy="64" r="3.2" fill="#ffd0da" opacity="0.7" />
            <circle cx="87" cy="64" r="3.2" fill="#ffd0da" opacity="0.7" />
            {/* whiskers */}
            <g stroke="#d9d2c5" strokeWidth="1" strokeLinecap="round" opacity="0.9">
              <path d="M58 60 l-9 -2" />
              <path d="M58 64 l-9 2" />
              <path d="M92 60 l9 -2" />
              <path d="M92 64 l9 2" />
            </g>
          </g>

          {/* helmet ring / collar */}
          <path d="M50 80 q25 14 50 0 l0 6 q-25 14 -50 0 Z" fill="#d7deea" stroke="#aab6cc" strokeWidth="1.5" />
          <circle cx="55" cy="84" r="2.5" fill="#22d3ee" />
          <circle cx="95" cy="84" r="2.5" fill="#e23b3b" />

          {/* waving paw (gloved) */}
          <g className="space-cat__paw" style={{ transformOrigin: "104px 86px" }}>
            <rect x="100" y="74" width="8" height="16" rx="4" fill="#ffffff" stroke="#cdd6e6" strokeWidth="1.5" />
            <circle cx="104" cy="72" r="7" fill="#ffffff" stroke="#cdd6e6" strokeWidth="1.5" />
            <path d="M101 70 q3 3 6 0" stroke="#ffb3c1" strokeWidth="1.3" fill="none" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default SpaceCat;

import React, { useEffect, useRef, useState } from "react";

// Lightweight custom cursor: a dot + a trailing ring that grows over
// interactive elements. Disabled on touch devices.
const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isTouch =
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window;
    if (isTouch) return;
    setEnabled(true);

    const ring = ringRef.current;
    const dot = dotRef.current;
    let ringX = 0,
      ringY = 0,
      mouseX = 0,
      mouseY = 0;
    let raf;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot) {
        dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ring) ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      raf = requestAnimationFrame(tick);
    };

    const grow = (e) => {
      if (e.target.closest("a, button, [role='button'], input, textarea, label")) {
        ring?.classList.add("cursor-ring--active");
      }
    };
    const shrink = () => ring?.classList.remove("cursor-ring--active");

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", grow);
    window.addEventListener("mouseout", shrink);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", grow);
      window.removeEventListener("mouseout", shrink);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
};

export default CustomCursor;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#05060f",
        secondary: "#9aa6c0",
        tertiary: "#0c1322",
        "black-100": "#0a0f1e",
        "black-200": "#070b16",
        "white-100": "#f3f3f3",
        accent: {
          DEFAULT: "#2dd4bf",
          light: "#5eead4",
          dark: "#0d9488",
          cyan: "#22d3ee",
        },
      },
      fontFamily: {
        cali: ["Calligraffitti"],
        sans: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        card: "0px 35px 120px -15px rgba(8, 17, 30, 0.8)",
        glow: "0 0 40px -8px rgba(45, 212, 191, 0.45)",
        "glow-strong": "0 0 60px -6px rgba(45, 212, 191, 0.6)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "accent-gradient": "linear-gradient(135deg, #2dd4bf 0%, #22d3ee 100%)",
        "grid-pattern":
          "linear-gradient(to right, rgba(148,163,184,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.07) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "scroll-dot": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "30%": { opacity: "1" },
          "60%": { opacity: "1" },
          "100%": { transform: "translateY(14px)", opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-up": "fade-up 0.7s ease forwards",
        "gradient-x": "gradient-x 6s ease infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "scroll-dot": "scroll-dot 1.6s ease-in-out infinite",
        marquee: "marquee 24s linear infinite",
      },
    },
  },
  plugins: [],
};

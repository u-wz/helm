import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        "neo-yellow": "#FFE500",
        "neo-amber": "#FFB300",
        "neo-blue": "#4361EE",
        "neo-green": "#06D6A0",
        "neo-orange": "#FF6B35",
        "neo-purple": "#9B5DE5",
        "neo-pink": "#FF0F80",
        "neo-bg": "#FFFFF0",
        "neo-dark": "#0A0A0A",
        "neo-card": "#141414",
      },
      boxShadow: {
        neo: "4px 4px 0px 0px #0A0A0A",
        "neo-hover": "6px 6px 0px 0px #0A0A0A",
        "neo-white": "4px 4px 0px 0px #F5F5F0",
        "neo-white-hover": "6px 6px 0px 0px #F5F5F0",
        "neo-yellow": "4px 4px 0px 0px #FFE500",
        "neo-amber": "4px 4px 0px 0px #FFB300",
        "neo-blue": "4px 4px 0px 0px #4361EE",
        "neo-green": "4px 4px 0px 0px #06D6A0",
        "neo-orange": "4px 4px 0px 0px #FF6B35",
        "neo-purple": "4px 4px 0px 0px #9B5DE5",
        "neo-pink": "4px 4px 0px 0px #FF0F80",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
        "slide-up": "slide-up 200ms ease-out",
        "fade-in": "fade-in 300ms ease-out",
      },
    },
  },
  plugins: [],
};

export default config;

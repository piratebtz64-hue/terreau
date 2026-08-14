import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        humus: "#26201A",
        parchment: "#F2EAD9",
        moss: "#57694A",
        "moss-dark": "#3D4A33",
        clay: "#C97A3D",
        root: "#8A4A3B",
        bone: "#FBF7EE"
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"]
      },
      backgroundImage: {
        "soil-grain":
          "radial-gradient(circle at 1px 1px, rgba(38,32,26,0.08) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "var(--color-bg-primary)",
          elevated: "var(--color-bg-elevated)",
          glass: "var(--color-bg-glass)",
        },
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          muted: "var(--color-text-muted)",
        },
        accent: {
          blue: "var(--color-accent-blue)",
          soft: "var(--color-accent-blue-soft)",
          line: "var(--color-accent-line)",
        },
        border: {
          subtle: "var(--color-border-subtle)",
        },
      },
      boxShadow: {
        glass: "0 20px 60px rgba(0, 0, 0, 0.28)",
        glow: "0 0 0 1px rgba(94, 162, 255, 0.08), 0 24px 70px rgba(9, 16, 28, 0.5)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        radialBlue:
          "radial-gradient(circle at top, rgba(94, 162, 255, 0.12), transparent 42%)",
        grid:
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "56px 56px",
      },
      maxWidth: {
        content: "1200px",
      },
      animation: {
        float: "float 10s ease-in-out infinite",
        pulseSoft: "pulseSoft 5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.75" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

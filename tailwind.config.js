/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* ================= Fonts ================= */
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        script: ["Dancing Script", "cursive"],
      },

      /* ================= Colors ================= */
      colors: {
        background: "#ffffff",
        foreground: "#263238",

        card: "#ffffff",
        "card-foreground": "#263238",

        popover: "#ffffff",
        "popover-foreground": "#263238",

        primary: {
          DEFAULT: "#007a7a", // teal deep
          foreground: "#ffffff",
        },

        secondary: {
          DEFAULT: "#e6f4f4",
          foreground: "#006666",
        },

        muted: {
          DEFAULT: "#eef5f5",
          foreground: "#6b7c85",
        },

        accent: {
          DEFAULT: "#009999",
          foreground: "#ffffff",
        },

        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#f8fafc",
        },

        border: "#d6e3e3",
        input: "#d6e3e3",
        ring: "#007a7a",

        /* ===== Custom Teal Palette ===== */
        teal: {
          deep: "#005c5c",
          light: "#33a6a6",
          glow: "#3ddede",
        },

        /* ===== Sidebar ===== */
        sidebar: {
          DEFAULT: "#fafafa",
          foreground: "#3f3f46",
          primary: "#007a7a",
          "primary-foreground": "#fafafa",
          accent: "#e6f4f4",
          "accent-foreground": "#006666",
          border: "#d6e3e3",
          ring: "#007a7a",
        },
      },

      /* ================= Radius ================= */
      borderRadius: {
        lg: "0.75rem",
        md: "0.625rem",
        sm: "0.5rem",
      },

      backgroundImage: {
        "gradient-teal": "linear-gradient(135deg, #005c5c, #007a7a, #33a6a6)",

        "gradient-text-teal": "linear-gradient(135deg, #007a7a, #3ddede)",

        "hero-overlay":
          "radial-gradient(ellipse at 70% 30%, rgba(61,222,222,0.15), transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(0,92,92,0.2), transparent 50%)",
      },

      /* ================= Animations ================= */
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
});

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
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        script: ["Dancing Script", "cursive"],
      },

      colors: {
        background: "#ffffff",
        foreground: "#263238",
        card: "#ffffff",
        "card-foreground": "#263238",
        popover: "#ffffff",
        "popover-foreground": "#263238",
        primary: { DEFAULT: "#007a7a", foreground: "#ffffff" },
        secondary: { DEFAULT: "#e6f4f4", foreground: "#006666" },
        muted: { DEFAULT: "#eef5f5", foreground: "#6b7c85" },
        accent: { DEFAULT: "#009999", foreground: "#ffffff" },
        destructive: { DEFAULT: "#ef4444", foreground: "#f8fafc" },
        hero: { secondary: "#ffffffcc" },
        border: "#d6e3e3",
        input: "#d6e3e3",
        ring: "#007a7a",
        teal: { deep: "#005c5c", light: "#33a6a6", glow: "#3ddede" },
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

      borderRadius: { lg: "0.75rem", md: "0.625rem", sm: "0.5rem" },

      backgroundImage: {
        "gradient-teal": "linear-gradient(135deg, #005c5c, #007a7a, #33a6a6)",
        "gradient-text-teal": "linear-gradient(135deg, #007a7a, #3ddede)",
        "hero-overlay":
          "radial-gradient(ellipse at 70% 30%, rgba(61,222,222,0.15), transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(0,92,92,0.2), transparent 50%)",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(180 100% 24% / 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(180 100% 24% / 0.6)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-in-left": "fade-in-left 0.6s ease-out forwards",
        "fade-in-right": "fade-in-right 0.6s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
});

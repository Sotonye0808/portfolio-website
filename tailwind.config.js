/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,scss}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#ff6b6b",
          dark: "#ff8787",
          hover: "#daa520",
        },
        surface: {
          light: "#ffffff",
          dark: "#374151",
        },
        background: {
          light: "#f3f4f6",
          dark: "#1f2937",
          card: {
            light: "#ffffff",
            dark: "#374151",
          },
        },
        text: {
          light: "#111827",
          dark: "#f9fafb",
          muted: {
            light: "#6b7280",
            dark: "#9ca3af",
          },
        },
        accent: {
          default: "#daa520",
          hover: "#b8860b",
        },
      },
      fontFamily: {
        primary: ["Roboto", "sans-serif"],
        heading: ["Roboto", "sans-serif"],
      },
      fontSize: {
        body: ["1rem", { lineHeight: "1.5rem" }],
        "body-bold": ["1rem", { lineHeight: "1.5rem", fontWeight: "700" }],
        "heading-1": ["2.5rem", { lineHeight: "3rem", fontWeight: "800" }],
        "heading-2": ["2rem", { lineHeight: "2.5rem", fontWeight: "700" }],
        "heading-3": ["1.5rem", { lineHeight: "2rem", fontWeight: "600" }],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "fade-in-left": "fadeInLeft 0.5s ease-out",
        "fade-in-right": "fadeInRight 0.5s ease-out",
        "fade-in-up": "fadeInUp 0.5s ease-out",
        "slide-in": "slideIn 0.3s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

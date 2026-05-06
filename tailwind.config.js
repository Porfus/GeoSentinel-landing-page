/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.html",
    "./views/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        space: {
          900: "#080B10",
          800: "#121826",
          700: "#1F2937",
        },
        accent: {
          DEFAULT: "#00E5FF",
          dim: "rgba(0, 229, 255, 0.12)",
        },
        hazard: {
          high: "#FF3366",
          medium: "#FFB020",
          low: "#10B981",
        },
        text: {
          main: "#F8FAFC",
          muted: "#94A3B8",
        },
      },
      fontFamily: {
        headline: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries")
  ]
};

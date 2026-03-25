/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        /* ── Surfaces (warm parchment / stone) ── */
        "alpine": {
          "bg":       "#faf8f5",
          "card":     "#f5f1eb",
          "muted":    "#f0ece6",
          "border":   "#e5e0d8",
          "dim":      "#dad5cd",
          "warm":     "#ede7dd",
          "white":    "#ffffff",
        },
        /* ── On-surfaces (deep earth) ── */
        "earth": {
          "900":      "#2c2418",
          "600":      "#6b5e4f",
          "400":      "#9a8d7d",
          "200":      "#b8ad9e",
          "100":      "#d5cabb",
        },
        /* ── Primary (ochre) ── */
        "ochre": {
          "DEFAULT":  "#b07320",
          "light":    "#f5e6cc",
          "dim":      "#e0a54a",
          "dark":     "#7a5010",
          "deep":     "#3d2800",
        },
        /* ── Secondary (fir green) ── */
        "fir": {
          "DEFAULT":  "#3d6b50",
          "light":    "#dff0e5",
          "dim":      "#82c89a",
          "dark":     "#1e4d35",
          "deep":     "#0a2818",
        },
        /* ── Tertiary (warm grey) ── */
        "stone": {
          "DEFAULT":  "#6b6358",
          "light":    "#d8cfc3",
          "dim":      "#c4b8aa",
          "dark":     "#524a40",
        },
        /* ── Error ── */
        "danger": {
          "DEFAULT":  "#ba1a1a",
          "light":    "#ffdad6",
          "dark":     "#410002",
        },
      },
      fontFamily: {
        headline: ["Space Grotesk", "sans-serif"],
        body:     ["Inter", "sans-serif"],
        label:    ["Inter", "sans-serif"]
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries")
  ]
};

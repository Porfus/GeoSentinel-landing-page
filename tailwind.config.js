/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        /* ── Surfaces (sage green) ── */
        "alpine": {
          "bg": "#C7D3B5",
          "card": "#ffffff",
          "muted": "#b8c3a5",
          "border": "#D2DDE1",
          "dim": "#c0ced4",
          "warm": "#d4dec5",
          "white": "#ffffff",
        },
        /* ── On-surfaces (forest shadow) ── */
        "earth": {
          "900": "#0C1F09",
          "600": "#263f21",
          "400": "#406039",
          "200": "#7a9973",
          "100": "#b3cca8",
        },
        /* ── Primary (vibrant orange) ── */
        "ochre": {
          "DEFAULT": "#ec5a21",
          "light": "#ff773d",
          "dim": "#f57242",
          "dark": "#b84115",
          "deep": "#7a2a09",
        },
        /* ── Secondary (mosswood) ── */
        "fir": {
          "DEFAULT": "#415027",
          "light": "#bccc9b",
          "dim": "#8fa372",
          "dark": "#2a3617",
          "deep": "#121a07",
        },
        /* ── Tertiary (meadowgold) ── */
        "stone": {
          "DEFAULT": "#BDB955",
          "light": "#e6e4bb",
          "dim": "#d6d38e",
          "dark": "#918e38",
        },
        /* ── Error ── */
        "danger": {
          "DEFAULT": "#ba1a1a",
          "light": "#ffdad6",
          "dark": "#410002",
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

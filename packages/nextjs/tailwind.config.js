/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  darkTheme: "dark",
  // darkMode: "synthwave",
  daisyui: {
    themes: [
      {
        light: {
          primary: "#ff7edb", // Neon Pink for primary
          "primary-content": "#1f1f1f", // Dark text on light primary
          secondary: "#7f7fff", // Soft Blue for secondary
          "secondary-content": "#1f1f1f", // Dark text on secondary
          accent: "#00d9ff", // Neon Cyan for accent
          "accent-content": "#1f1f1f", // Dark text on accent
          neutral: "#1f1f1f", // Dark neutral
          "neutral-content": "#ffffff", // White text on neutral
          "base-100": "#ffffff", // White background
          "base-200": "#f0f0f0", // Light grey for slightly elevated surfaces
          "base-300": "#e0e0e0", // Light grey for elevated surfaces
          "base-content": "#1f1f1f", // Primary content color (dark)
          info: "#76daff", // Information messages
          success: "#4ade80", // Success messages
          warning: "#facc15", // Warning messages
          error: "#fb7185", // Error messages
          "--rounded-btn": "9999rem",
          ".tooltip": {
            "--tooltip-tail": "6px",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
      "synthwave",
    ],
  },
  theme: {
    extend: {
      boxShadow: {
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
};

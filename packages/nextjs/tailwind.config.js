/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography"), require("daisyui")],
  // darkTheme: "dark",
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
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "black-rock": {
          50: "#e4e4ff",
          100: "#d1cfff",
          200: "#aea8ff",
          300: "#8374ff",
          400: "#683eff",
          500: "#5d13ff",
          600: "#5600ff",
          700: "#5600ff",
          800: "#4d00e4",
          900: "#4100b0",
          950: "#100028",
        },
        ebony: {
          50: "#e4f0ff",
          100: "#cfe2ff",
          200: "#a8c8ff",
          300: "#74a2ff",
          400: "#3e69ff",
          500: "#1332ff",
          600: "#001bff",
          700: "#001bff",
          800: "#0018e4",
          900: "#000cb0",
          950: "#000118",
        },
        seance: {
          50: "#fcf2ff",
          100: "#fae4ff",
          200: "#f3c7ff",
          300: "#ef9bff",
          400: "#e660ff",
          500: "#d625ff",
          600: "#bc04f5",
          700: "#a000cc",
          800: "#7e029d",
          900: "#700887",
          950: "#4c005c",
        },
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
      },
    },
  },
};

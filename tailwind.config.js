/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--primary)",
        card: "var(--card)",
        faded: "var(--faded)",
        mainBg: "var(--background)",
        neutral: "var(--neutral)",
      },
      colors: {
        primary: "var(--primary)",
        faded: "var(--faded)",
        card: "var(--card)",
        accent: "var(--accent)",
        neutral: "var(--neutral)",
      },
      gridTemplateColumns: {
        24: "repeat(24, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};

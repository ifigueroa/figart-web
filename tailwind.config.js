/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        artblack: "#1E2B36",
        "artman-blue": {
          50: "#f4f8fa",
          100: "#e6eef3",
          200: "#d2e1eb",
          300: "#b3cddd",
          400: "#8fb3cb",
          500: "#749bbd",
          600: "#6487b0",
          700: "#56749f",
          800: "#4a5f83",
          900: "#3f5069",
          950: "#2a3241",
        },
        "artman-gold": {
          50: "#fdfbed",
          100: "#f8f1cd",
          200: "#f0e297",
          300: "#ebd577",
          400: "#e2bb3d",
          500: "#da9f26",
          600: "#c17c1e",
          700: "#a05c1d",
          800: "#83491d",
          900: "#6c3c1b",
          950: "#3d1e0b",
        },
      },
    },
    keyframes: {
      "gallery-move": {
        "0%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(600px)"},
        "100%": { transform: "translateY(-600px)" },
      },
      "gallery-move2": {
        "0%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-600px)"},
        "100%": { transform: "translateY(600px)" },
      },
      "fade-in":{
        "0%": { opacity:0 },
        "100%": { opacity:1 }
      },
      "logo": {
        "0%": { transform: "translateY(-100px) rotate(180deg)", opacity:0 },
        "100%": { transform: "translateY(0) rotate(0)", opacity:1 },
        
      }
    },
    animation: {
      "gallery-move": "gallery-move 60s ease infinite",
      "gallery-move2": "gallery-move2 60s ease",
      "slide-up-2": "slide-up 1.5s both 0.4s",
      "slide-up-3": "slide-up 1.5s both 0.6s",
      "fade-in" : "fade-in 0.5s both",
      "logo": "logo 1.5s both ease-out 0.2s"
    },
  },
  plugins: [],
}

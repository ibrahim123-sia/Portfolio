/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Ink Blue on Navy — deep navy surfaces, blue accent (reference-inspired)
        bg: '#0A0F1A',
        surface: '#101827',
        'surface-2': '#172136',
        line: '#1F2A3D',
        'line-strong': '#2E3D57',
        content: '#FFFFFF',
        muted: '#A3AEC2',
        faint: '#6B7688',
        accent: {
          DEFAULT: '#4C8DFF',
          hover: '#7BA9FF',
          soft: '#152238',
          on: '#8FB4FF',
          ink: '#05080F',
        },
      },
      transitionTimingFunction: {
        standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // Seamless left-to-right scroll (track holds two copies, shifts by half its width)
        'marquee-ltr': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.25s ease both',
        'marquee-ltr': 'marquee-ltr 32s linear infinite',
      },
    },
  },
  plugins: [],
}

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
        // Ink Blue system
        bg: '#08090B',
        surface: '#111318',
        'surface-2': '#15181E',
        line: '#1C1F26',
        'line-strong': '#2A2E37',
        content: '#FFFFFF',
        muted: '#A8ADBA',
        faint: '#6E7480',
        accent: {
          DEFAULT: '#4C8DFF',
          hover: '#7BA9FF',
          soft: '#16223D',
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
      },
      animation: {
        'fade-in': 'fadeIn 0.25s ease both',
      },
    },
  },
  plugins: [],
}

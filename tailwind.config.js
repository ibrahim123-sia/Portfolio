/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        // Editorial light theme: warm paper, near-black ink, one deep green accent
        paper: '#F5F2EC',
        'paper-2': '#ECE7DE',
        ink: '#141414',
        muted: '#57534C',
        faint: '#6E6A63',
        rule: '#D8D2C6',
        'rule-strong': '#BDB6A8',
        accent: {
          DEFAULT: '#1E4D3A',
          hover: '#163A2B',
        },
      },
      transitionTimingFunction: {
        standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

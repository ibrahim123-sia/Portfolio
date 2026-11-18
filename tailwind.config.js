/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // The design ships its own small reset (see index.css), so Tailwind's
  // preflight stays off and the two never disagree.
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      fontFamily: {
        head: ['Sora', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
        code: ['"JetBrains Mono"', 'ui-monospace', 'Menlo', 'Consolas', 'monospace'],
      },
      // White, ink and one green, plus one colour per problem group
      colors: {
        bg: '#FFFFFF',
        panel: '#F4F5F3',
        panel2: '#ECEEEB',
        line: '#E2E5E3',
        ink: '#0E1111',
        soft: '#4A5250',
        mute: '#6A7270',
        green: {
          DEFAULT: '#0E9F6E',
          ink: '#0B7A55',
          tint: '#E8F6EF',
        },
        problem: {
          act: '#E8742C',
          answer: '#0E9F6E',
          run: '#6D5BD0',
          numbers: '#C9971B',
          sell: '#D9466F',
          tools: '#5B6B73',
        },
      },
    },
  },
  plugins: [],
}

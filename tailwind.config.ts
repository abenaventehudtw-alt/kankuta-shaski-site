import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ks: {
          brown: '#7A3E1C',
          brownDark: '#5C2C14',
          beige: '#EBD9B9',
          bg: '#ECEBE6',
          text: '#2A2A2A'
        }
      }
    }
  },
  plugins: []
}
export default config

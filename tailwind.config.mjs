/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4A90E2',
          50: '#E8F2FB',
          100: '#D1E5F7',
          200: '#A3CBEF',
          300: '#75B1E7',
          400: '#4797DF',
          500: '#4A90E2',
          600: '#2B73C6',
          700: '#215795',
          800: '#173B64',
          900: '#0D1F33',
        },
        secondary: {
          DEFAULT: '#7FCDCD',
          50: '#F0FAFA',
          100: '#E1F5F5',
          200: '#C3EBEB',
          300: '#A5E1E1',
          400: '#87D7D7',
          500: '#7FCDCD',
          600: '#5CB8B8',
          700: '#458E8E',
          800: '#2E5F5F',
          900: '#172F2F',
        },
        accent: {
          DEFAULT: '#F5F1E8',
          50: '#FEFDFB',
          100: '#FCFAF5',
          200: '#F9F6ED',
          300: '#F7F3E6',
          400: '#F5F1E8',
          500: '#F5F1E8',
          600: '#E8DFC7',
          700: '#D4C69A',
          800: '#B8A672',
          900: '#8C7D54',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Open Sans', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Open Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 8px rgba(0, 0, 0, 0.08)',
        'soft-md': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'soft-lg': '0 8px 24px rgba(0, 0, 0, 0.12)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
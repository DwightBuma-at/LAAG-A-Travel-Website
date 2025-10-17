/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          primary: {
            50: '#e8f4fd',
            100: '#d1e9fb',
            200: '#a3d3f7',
            300: '#75bdf3',
            400: '#4a90e2', // Primary (Soft Blue) - main brand color
            500: '#3a7bc8',
            600: '#2d66ae',
            700: '#215194',
            800: '#163c7a',
            900: '#0c2760',
          },
          secondary: {
            50: '#e6faf5',
            100: '#ccf5eb',
            200: '#99ebd7',
            300: '#66e1c3',
            400: '#50e3c2', // Secondary (Teal/Green) - accents and highlights
            500: '#40b89e',
            600: '#308d7a',
            700: '#206256',
            800: '#103732',
            900: '#000c0e',
          },
          accent: {
            50: '#fef5e7',
            100: '#fdebcf',
            200: '#fbd79f',
            300: '#f9c36f',
            400: '#f5a623', // Accent (Warm Yellow/Orange) - call-to-action
            500: '#c4851c',
            600: '#936415',
            700: '#62430e',
            800: '#312207',
            900: '#000100',
          },
          neutral: {
            50: '#ffffff',
            100: '#f7f7f7', // Light gray background
            200: '#e5e5e5',
            300: '#d4d4d4',
            400: '#a3a3a3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#333333', // Dark gray for text
            900: '#171717',
          },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
        fontFamily: {
          'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
          'display': ['Inter', 'ui-sans-serif', 'system-ui'],
          'mono': ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'glow': 'glow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        glow: {
          '0%, 100%': {
            filter: 'brightness(1)',
          },
          '50%': {
            filter: 'brightness(1.2)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
        boxShadow: {
          'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          'soft': '0 2px 8px rgba(0, 0, 0, 0.08)',
          'soft-lg': '0 4px 16px rgba(0, 0, 0, 0.1)',
          'soft-xl': '0 8px 32px rgba(0, 0, 0, 0.12)',
          'premium': '0 20px 60px rgba(0, 0, 0, 0.15)',
        },
        borderRadius: {
          'xl': '1rem',
          '2xl': '1.5rem',
          '3xl': '2rem',
        }
    },
  },
  plugins: [],
  darkMode: 'class',
}

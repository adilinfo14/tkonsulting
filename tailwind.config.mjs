/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'tk-black':      '#FEFCF8',
        'tk-dark':       '#F9F5EE',
        'tk-card':       '#FFFFFF',
        'tk-border':     '#E8E2D6',
        'tk-gold':       '#5B7FA6',
        'tk-gold-light': '#82A2C4',
        'tk-gold-dark':  '#3E5C7D',
        'tk-muted':      '#6B6560',
        'tk-text':       '#1A1714',
        'tk-night':      '#0B0F17',
        'tk-night-alt':  '#111827',
      },
      fontFamily: {
        serif:  ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:   ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #5B7FA6 0%, #82A2C4 50%, #3E5C7D 100%)',
        'gold-shine':    'linear-gradient(90deg, transparent 0%, rgba(130,162,196,0.12) 50%, transparent 100%)',
      },
      animation: {
        'float-slow':  'float 6s ease-in-out infinite',
        'float-mid':   'float 4s ease-in-out infinite',
        'float-fast':  'float 3s ease-in-out infinite',
        'fade-up':     'fadeUp 0.8s ease forwards',
        'shine':       'shine 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: '0.6' },
          '50%':       { transform: 'translateY(-18px) scale(1.15)', opacity: '1' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        shine: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
};

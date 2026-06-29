/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'tk-black':      '#0A0A0A',
        'tk-dark':       '#111111',
        'tk-card':       '#161616',
        'tk-border':     '#1F1F1F',
        'tk-gold':       '#C9A84C',
        'tk-gold-light': '#E2C97A',
        'tk-gold-dark':  '#8B6A14',
        'tk-muted':      '#6B7280',
        'tk-text':       '#E8E8E8',
      },
      fontFamily: {
        serif:  ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:   ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #E2C97A 40%, #C9A84C 80%, #A8872A 100%)',
        'gold-shine':    'linear-gradient(90deg, transparent 0%, rgba(226,201,122,0.15) 50%, transparent 100%)',
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

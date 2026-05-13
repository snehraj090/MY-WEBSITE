export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 45px rgba(56, 189, 248, 0.18)',
      },
      colors: {
        deep: '#050816',
        surface: '#0b1220',
        accent: '#4f46e5',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at top, rgba(96, 165, 250, 0.16), transparent 36%)',
      },
      animation: {
        float: 'float 10s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.9s ease forwards',
        pulseGlow: 'pulseGlow 2.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '0.4' },
        },
      },
    },
  },
  plugins: [],
};

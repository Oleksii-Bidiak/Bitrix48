import plugin from 'tailwindcss/plugin';
import { type Config } from 'tailwindcss';
import themeConfig from './config/tailwind/theme';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: themeConfig,
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addBase({
        h1: {
          fontSize: theme('fontSize.3xl'),
          fontWeight: '700',
          color: theme('colors.primary'),
        },
        h2: {
          fontSize: theme('fontSize.2xl'),
          fontWeight: '600',
          color: theme('colors.primary'),
        },
        p: { fontSize: theme('fontSize.base'), color: theme('colors.neutral') },
      });

      addComponents({
        '.card': {
          backgroundColor: theme('colors.card'),
          borderRadius: theme('borderRadius.lg'),
          boxShadow: theme('boxShadow.lg'),
          padding: theme('spacing.lg'),
          border: `1px solid ${theme('colors.borderColor')}`,
        },
        '.btn': {
          padding: `${theme('spacing.sm')} ${theme('spacing.md')}`,
          fontSize: theme('fontSize.sm'),
          fontWeight: '500',
          borderRadius: theme('borderRadius.md'),
          color: 'white',
          backgroundColor: theme('colors.primary'),
          '&:hover': {
            backgroundColor: theme('colors.hover'),
          },
        },
        '.sidebar': {
          width: '16rem' /* 256px */,
          transition: 'width 0.3s ease-in-out',
          backgroundColor: theme('colors.bg'),
          '&.collapsed': {
            width: '4rem' /* 64px */,
          },
        },
      });

      addUtilities({
        '.fade-in': {
          animation: 'fadeIn 0.3s ease-in-out',
        },
        '.fade-out': {
          animation: 'fadeOut 0.3s ease-in-out',
        },
        '@keyframes fadeIn': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        '@keyframes fadeOut': {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
      });
    }),
  ],
};

export default config;

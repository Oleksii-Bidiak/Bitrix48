import { TailwindThemeConfig } from './types';

const theme: TailwindThemeConfig = {
  extend: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontSize: {
      xs: '0.25rem', // 4px
      sm: '0.5rem', // 8px
      md: '0.75rem', // 12px
      lg: '1rem', // 16px
      xl: '1.5rem', // 24px
      '2xl': '2rem', // 32px
      '3xl': '3rem', // 48px
      '4xl': '4rem', // 48px
    },
    spacing: {
      xs: '0.25rem', // 4px
      sm: '0.5rem', // 8px
      md: '0.75rem', // 12px
      lg: '1rem', // 16px
      xl: '1.5rem', // 24px
      '2xl': '2rem', // 32px
      '3xl': '3rem', // 48px
      '4xl': '4rem', // 48px
    },
    colors: {
      primary: 'var(--primary-color)',
      secondary: 'var(--secondary-color)',
      bg: 'var(--bg-color)',
      card: 'var(--card-bg)',
      borderColor: 'var(--border-color)',
      hover: 'var(--hover-color)',
      danger: 'var(--danger-color)',
    },
    fontFamily: {
      sans: ['Roboto', 'Arial', 'sans-serif'],
    },
    borderRadius: {
      md: '0.375rem',
      lg: '0.5rem',
    },
    boxShadow: {
      sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
      lg: '0 10px 15px -3px rgba(150, 150, 150, 0.5), 0 4px 6px -2px rgba(150, 150, 150, 0.5)',
    },
    transitionProperty: {
      sidebar: 'width, background-color',
    },
    transitionTimingFunction: {
      sidebar: 'ease-in-out',
    },
    transitionDuration: {
      short: '200ms',
      default: '300ms',
    },
  },
};

export default theme;

import { TailwindThemeConfig } from './types';

const theme: TailwindThemeConfig = {
  extend: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      main: ['Roboto', 'sans-serif'],
    },
    fontSize: {
      xs: 'var(--font-size-xs)',
      sm: 'var(--font-size-s)',
      md: 'var(--font-size-m)',
      lg: 'var(--font-size-l)',
      xl: 'var(--font-size-xl)',
    },
    lineHeight: {
      xs: 'var(--line-height-xs)',
      sm: 'var(--line-height-s)',
      md: 'var(--line-height-m)',
      lg: 'var(--line-height-l)',
      xl: 'var(--line-height-xl)',
    },
    spacing: {
      xs: '0.25rem', // 4px
      sm: '0.5rem', // 8px
      md: '0.75rem', // 12px
      lg: '1rem', // 16px
      xl: '1.5rem', // 24px
      '2xl': '2rem', // 32px
      '3xl': '3rem', // 48px
      '4xl': '4rem', // 64px
    },
    colors: {
      primary: 'var(--primary-color)',
      secondary: 'var(--secondary-color)',
      danger: 'var(--danger-color)',
      warning: 'var(--warning-color)',
      success: 'var(--success-color)',
      bg: 'var(--bg-color)',
      card: 'var(--card-bg)',
      borderColor: 'var(--border-color)',
      hover: 'var(--hover-color)',
    },
    borderRadius: {
      sm: '0.125rem', // 2px
      md: '0.25rem', // 4px
      lg: '0.5rem', // 8px
      xl: '1rem', // 16px
    },
    boxShadow: {
      sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
      lg: '0 10px 15px -3px rgba(150, 150, 150, 0.5), 0 4px 6px -2px rgba(150, 150, 150, 0.5)',
    },
    zIndex: {
      base: '1',
      modal: '10',
      dropdown: '100',
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

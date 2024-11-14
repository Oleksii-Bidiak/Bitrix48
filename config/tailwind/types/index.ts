import { CustomThemeConfig } from 'tailwindcss/types/config';

type CustomScreens = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

type CustomSpacing = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
};

export type CustomFontSize = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  //   '2xl': string;
  //   '3xl': string;
  //   '4xl': string;
};

type CustomLineHeight = CustomFontSize;

type CustomColors = {
  primary: string;
  secondary: string;
  danger: string;
  warning: string;
  success: string;
  bg: string;
  card: string;
  borderColor: string;
  hover: string;
};

type CustomZIndex = {
  base: string;
  modal: string;
  dropdown: string;
};

export type TailwindThemeConfig = Partial<CustomThemeConfig> & {
  extend: {
    screens: CustomScreens;
    spacing: CustomSpacing;
    colors: CustomColors;
    fontSize: CustomFontSize;
    lineHeight: CustomLineHeight;
    fontFamily: Record<string, string[]>;
    borderRadius: Record<string, string>;
    boxShadow: Record<string, string>;
    transitionProperty: Record<string, string>;
    transitionTimingFunction: Record<string, string>;
    transitionDuration: Record<string, string>;
    zIndex: CustomZIndex;
  };
};

import { Theme } from '@mui/material';
import { createContext } from 'react';

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
}

type ThemeContextType = {
  themeMode?: ThemeMode;
  setThemeMode?: (theme: ThemeMode) => void;
  setTheme?: (mode: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({});

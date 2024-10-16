import { useContext } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  ThemeMode,
  ThemeContext,
} from './ThemeContext';
import { Theme } from '@mui/material';
import { DarkTheme, LightTheme } from './theme';

interface UseThemeResult {
  theme: ThemeMode;
  toggleTheme: () => void;
}

export function useTheme(): UseThemeResult {
  const { themeMode, setThemeMode, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: ThemeMode;
    let theme: Theme;
    switch (themeMode) {
      case ThemeMode.LIGHT:
        newTheme = ThemeMode.DARK;
        theme = DarkTheme;
        break;
      case ThemeMode.DARK:
        newTheme = ThemeMode.LIGHT;
        theme = LightTheme;
        break;

      default:
        newTheme = ThemeMode.LIGHT;
        theme = LightTheme;
    }

    setTheme(theme);
    setThemeMode?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme: themeMode || ThemeMode.LIGHT,
    toggleTheme,
  };
}

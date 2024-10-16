import { ReactNode, useMemo, useState } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
  ThemeMode,
} from '../lib/ThemeContext';
import { CssBaseline, Theme } from '@mui/material';
import { DarkTheme, LightTheme } from '../lib/theme';
import { ThemeProvider } from '@mui/material';

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeMode) ||
  ThemeMode.LIGHT;

interface ThemeProviderProps {
  initialTheme?: ThemeMode;
  children: ReactNode;
}

export const ThemeContextProvider = (props: ThemeProviderProps) => {
  const { initialTheme, children } = props;
  const [themeMode, setThemeMode] = useState<ThemeMode>(
    initialTheme || defaultTheme
  );
  const [theme, setTheme] = useState<Theme>(
    themeMode === ThemeMode.LIGHT ? LightTheme : DarkTheme
  );

  const defaultProps = useMemo(
    () => ({
      themeMode,
      setThemeMode,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

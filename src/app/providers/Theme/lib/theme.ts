import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    customColor: string; // Додати свої кольори
  }
  interface PaletteOptions {
    customColor?: string; // Додати свої кольори
  }
}

export const LightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // Синій для основних елементів
      contrastText: '#fff', // Білий текст на кнопках
    },
    secondary: {
      main: '#ff4081', // Рожевий для акцентів
    },
    background: {
      default: '#f4f6f8', // Світло-сірий для фону
      paper: '#ffffff', // Білий для карток
    },
    text: {
      primary: '#212121', // Темний текст
      secondary: '#757575', // Сірий текст
    },
    success: {
      main: '#4caf50', // Зелений для успішних дій
    },
    error: {
      main: '#f44336', // Червоний для помилок
    },
    warning: {
      main: '#ff9800', // Помаранчевий для попереджень
    },
    info: {
      main: '#2196f3', // Блакитний для інформації
    },
    divider: '#e0e0e0', // Лінії розділення
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    h1: { fontSize: '2.2rem', fontWeight: 600 },
    h2: { fontSize: '1.8rem', fontWeight: 500 },
    h3: { fontSize: '1.6rem', fontWeight: 500 },
    body1: { fontSize: '1rem' },
    body2: { fontSize: '0.875rem', color: '#757575' },
    button: { textTransform: 'none' }, // Без перетворення в великі літери
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Закруглені краї кнопок
        },
      },
    },
  },
});

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // Світлий синій для основних елементів
      contrastText: '#000', // Чорний текст на кнопках
    },
    secondary: {
      main: '#f48fb1', // Світлий рожевий для акцентів
    },
    background: {
      default: '#121212', // Темний фон
      paper: '#1e1e1e', // Трохи світліший для карток
    },
    text: {
      primary: '#ffffff', // Білий текст
      secondary: '#b0bec5', // Світло-сірий текст
    },
    success: {
      main: '#66bb6a', // Світлий зелений
    },
    error: {
      main: '#ef5350', // Світлий червоний
    },
    warning: {
      main: '#ffa726', // Світлий помаранчевий
    },
    info: {
      main: '#29b6f6', // Світлий блакитний
    },
    divider: '#424242', // Темно-сірі лінії розділення
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    h1: { fontSize: '2.2rem', fontWeight: 600, color: '#ffffff' },
    h2: { fontSize: '1.8rem', fontWeight: 500, color: '#ffffff' },
    h3: { fontSize: '1.6rem', fontWeight: 500, color: '#ffffff' },
    body1: { fontSize: '1rem', color: '#ffffff' },
    body2: { fontSize: '0.875rem', color: '#b0bec5' },
    button: { textTransform: 'none' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
  },
});

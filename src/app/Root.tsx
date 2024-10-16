import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { ThemeContextProvider } from './providers/Theme/ui/ThemeProvider';

export const Root = () => {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </BrowserRouter>
  );
};

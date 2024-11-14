import { BrowserRouter } from 'react-router-dom';
import { ThemeContextProvider } from './providers/Theme';
import { ErrorBoundary } from './providers/ErrorBoundary';
import { App } from './App';

export const Root = () => {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ThemeContextProvider>
    </BrowserRouter>
  );
};

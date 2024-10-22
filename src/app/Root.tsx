import { BrowserRouter } from 'react-router-dom';
import { App } from './App/App';
import { ThemeContextProvider } from './providers/Theme/ui/ThemeProvider';
import { ErrorBoundary } from './providers/ErrorBoundary';

import '@fontsource/roboto/300.css'; // Light weight
import '@fontsource/roboto/400.css'; // Regular weight
import '@fontsource/roboto/500.css'; // Medium weight
import '@fontsource/roboto/700.css'; // Bold weight
import './styles/index.scss';

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

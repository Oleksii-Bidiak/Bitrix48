import { createRoot } from 'react-dom/client';
import { Root } from './app/Root';
import './shared/config/i18n/i18n';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Container root not found');
}

const root = createRoot(container);
root.render(<Root />);

import { createRoot } from 'react-dom/client';
import { Root } from './app/Root';
const container = document.getElementById('root');

if (!container) {
  throw new Error('Container root not found');
}

const root = createRoot(container);
root.render(<Root />);

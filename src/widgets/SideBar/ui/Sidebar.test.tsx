import { renderWithTranslation } from '@/shared/lib/tests/renderWithTranslation';
import { Sidebar } from './Sidebar';
import { screen } from '@testing-library/react';

describe('Sidebar', () => {
  test('renders Sidebar', () => {
    renderWithTranslation(<Sidebar />);
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toBeInTheDocument();
  });

  test('renders NightModeToggle', () => {
    renderWithTranslation(<Sidebar />);
    const nightModeToggle = screen.getByTestId('night-mode-toggle'); // обов'язково впевніться, що в компоненті `NightModeToggle` є атрибут `data-testid`
    expect(nightModeToggle).toBeInTheDocument();
  });

  test('applies custom className', () => {
    const customClass = 'custom-class';
    renderWithTranslation(<Sidebar className={customClass} />);
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toHaveClass(customClass);
  });
});

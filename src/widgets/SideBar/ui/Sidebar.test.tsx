import { renderWithTranslation } from '@/shared/lib/tests/renderWithTranslation';
import { Sidebar } from './Sidebar';
import { screen } from '@testing-library/react';
import { renderComponents } from '@/shared/lib/tests/renderComponents';

describe('Sidebar', () => {
  test('renders Sidebar', () => {
    renderComponents(<Sidebar />);
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toBeInTheDocument();
  });

  test('renders NightModeToggle', () => {
    renderComponents(<Sidebar />);
    const nightModeToggle = screen.getByTestId('night-mode-toggle');
    expect(nightModeToggle).toBeInTheDocument();
  });

  test('applies custom className', () => {
    const customClass = 'custom-class';
    renderComponents(<Sidebar className={customClass} />);
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toHaveClass(customClass);
  });
});

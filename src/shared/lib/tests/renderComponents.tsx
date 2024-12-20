import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/shared/config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';

export interface renderComponentsOptions {
  route?: string;
}

export function renderComponents(
  component: ReactNode,
  options: renderComponentsOptions = {}
) {
  const { route = '/' } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
    </MemoryRouter>
  );
}

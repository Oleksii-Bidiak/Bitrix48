import { Theme } from '@/app/providers/Theme';
import { Story } from 'config/storybook/types';

export const ThemeDecorator = (theme: Theme) => (Story: Story) => {
  return (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );
};

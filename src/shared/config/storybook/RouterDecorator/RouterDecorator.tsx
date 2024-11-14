import { Story } from 'config/storybook/types';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (Story: Story) => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  );
};

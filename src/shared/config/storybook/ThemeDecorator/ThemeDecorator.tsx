import { Theme } from '@/app/providers/Theme';
import { Story } from 'config/storybook/types';
import cls from './ThemeDecorator.module.scss';
import classNames from 'classnames';

export const ThemeDecorator =
  (theme: Theme, centered?: boolean) => (Story: Story) => {
    return (
      <div
        className={classNames('app', { [cls.centered]: centered }, [
          theme,
          cls.decorator,
        ])}>
        <Story />
      </div>
    );
  };

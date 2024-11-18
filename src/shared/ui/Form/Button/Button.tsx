import classNames from 'classnames';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import cls from './button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clear_inverted',
  OUTLINE = 'outline',
  OUTLINE_INVERTED = 'outline_inverted',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'background_inverted',
}
export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode | string;
  theme?: ButtonTheme;
  size?: ButtonSize;
  square?: boolean;
}

export const Button = memo((props: ButtonProps) => {
  const {
    children,
    className,
    theme = ButtonTheme.OUTLINE,
    size = ButtonSize.L,
    square = false,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: square,
  };

  const additionalClasses: string[] = [cls[theme], cls[size]];

  return (
    <button
      className={classNames(className, cls.button, mods, additionalClasses)}
      {...otherProps}>
      {children}
    </button>
  );
});

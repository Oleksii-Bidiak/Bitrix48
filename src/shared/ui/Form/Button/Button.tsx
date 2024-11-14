import classNames from 'classnames';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import './button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode | string;
}

export const Button = memo((props: ButtonProps) => {
  const { children, className, ...otherProps } = props;

  return (
    <button className={classNames(className, 'button')} {...otherProps}>
      {children}
    </button>
  );
});

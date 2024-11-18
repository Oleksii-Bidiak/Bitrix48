import classNames from 'classnames';
import { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cls from './appLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface Props extends LinkProps {
  className?: string;
  children: ReactNode;
  theme?: AppLinkTheme;
}

export const AppLink = memo((props: Props) => {
  const { to, className, children, theme = AppLinkTheme.PRIMARY } = props;

  return (
    <Link to={to} className={classNames(cls.link, [className, cls[theme]])}>
      {children}
    </Link>
  );
});

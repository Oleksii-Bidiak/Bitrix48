import { FC, ReactNode } from 'react';
import cls from './page.module.scss';
import classNames from 'classnames';

interface Props {
  className?: string;
  children: ReactNode;
}

export const Page: FC<Props> = ({ children, className }) => {
  return <div className={classNames(cls.page, className)}>{children}</div>;
};

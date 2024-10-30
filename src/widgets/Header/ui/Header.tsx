/* eslint-disable i18next/no-literal-string */
import cls from './header.module.scss';
import { FC } from 'react';
import classNames from 'classnames';

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  return (
    <header className={classNames(className, cls.header)}>
      <h1>Bitrix48</h1>
    </header>
  );
};

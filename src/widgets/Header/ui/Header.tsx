/* eslint-disable i18next/no-literal-string */
import { AppBar, Toolbar, Typography } from '@mui/material';
import cls from './header.module.scss';
import { FC } from 'react';
import classNames from 'classnames';

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  return (
    <AppBar position="static" className={classNames(className, cls.header)}>
      <Toolbar>
        <Typography variant="h6">Bitrix48</Typography>
      </Toolbar>
    </AppBar>
  );
};

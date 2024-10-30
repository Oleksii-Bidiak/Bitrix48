import { Suspense } from 'react';
import { AppRouter } from '../providers/router';
import { Header } from '../../widgets/Header/ui/Header';
import { Sidebar } from '@/widgets/SideBar';
import cls from './app.module.scss';
import { useTheme } from '../providers/Theme';
import classNames from 'classnames';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames(cls.app, [theme])}>
      <Suspense fallback={<div>{'...'}</div>}>
        <Header className={cls.header} />
        <Sidebar className={cls.sideBar} />
        <main className={cls.main}>
          <AppRouter />
        </main>
      </Suspense>
    </div>
  );
};

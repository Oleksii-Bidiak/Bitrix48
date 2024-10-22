import { Suspense } from 'react';
import { AppRouter } from '../providers/router';
import { Header } from '../../widgets/Header/ui/Header';
import { Sidebar } from '@/widgets/SideBar';
import cls from './app.module.scss';
import { Box } from '@mui/material';

export const App = () => {
  return (
    <Box className={cls.app}>
      <Suspense fallback={<div>{'...'}</div>}>
        <Header className={cls.header} />
        <Sidebar className={cls.sideBar} />
        <main className={cls.main}>
          <AppRouter />
        </main>
      </Suspense>
    </Box>
  );
};

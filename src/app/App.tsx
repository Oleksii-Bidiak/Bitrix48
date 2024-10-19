import { Suspense, useEffect } from 'react';
import { AppRouter } from './providers/router';
import { Header } from '../widgets/Header/ui/Header';
import NightModeToggle from '../widgets/ModeSwitcher/ModeSwitcher';
import { Box } from '@mui/material';

export const App = () => {
  return (
    <Box className="app">
      <Suspense fallback={<div>{'...'}</div>}>
        <NightModeToggle />
        <Header />
        <main className="main">
          {/* SideBar */}
          <AppRouter />
        </main>
      </Suspense>
    </Box>
  );
};

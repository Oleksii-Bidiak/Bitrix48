import { Suspense } from 'react';
import classNames from 'classnames';
import { PageLoader } from '@/shared/ui/PageLoader';
import { useTheme } from './providers/Theme';
import { Header } from '@/widgets/Header/ui/Header';
import { Sidebar } from '@/widgets/SideBar';
import { AppRouter } from './providers/router';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <Suspense fallback={<PageLoader />}>
        <Header className={'header'} />
        <Sidebar className={'sideBar'} />
        <main className={'main'}>
          <AppRouter />
        </main>
      </Suspense>
    </div>
  );
};

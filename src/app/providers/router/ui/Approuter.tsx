import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  AppRoutesProps,
  routeConfig,
} from '../../../../shared/config/routeConfig';

const AppRouter = () => {
  const renderWithWrapper = useCallback(({ path, element }: AppRoutesProps) => {
    const routeElement = (
      <Suspense fallback={<div>"Loading..."</div>}>{element}</Suspense>
    );

    return <Route key={path} path={path} element={routeElement} />;
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
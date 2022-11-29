import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages';
import React, { lazy, Suspense } from 'react';

const NotFoundLazyPage = lazy(() => import('./pages/NotFoundPage'));

const NotFoundPage = () => (
  <Suspense>
    <NotFoundLazyPage />
  </Suspense>
);

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

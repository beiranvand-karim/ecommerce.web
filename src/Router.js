import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';

import { HomePage } from './pages';

const NotFoundLazyPage = lazy(() => import('./pages/NotFoundPage'));

const NotFoundPage = () => (
  <Suspense fallback={<>Loading ...</>}>
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

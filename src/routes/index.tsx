import { FC, lazy } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

import { Routes } from 'constants/routes';
import { MainLayout } from 'layouts/MainLayout';

const NotFoundPage = lazy(() => import(/* webpackChunkName: "404" */ 'pages/NotFoundPage'));
const AviaPage = lazy(() => import(/* webpackChunkName: "main'" */ 'pages/AviaPage'));

const routes: RouteObject[] = [
  {
    path: Routes.main,
    element: <MainLayout />,
    children: [
      {
        path: Routes.avia,
        element: <AviaPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];

export const RenderRoute: FC = () => useRoutes(routes);

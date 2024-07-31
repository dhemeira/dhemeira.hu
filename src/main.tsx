import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import { Root } from './routes/root';
import { Home } from './routes/Home';
import { ErrorPage } from './ErrorPage';
import '@fontsource-variable/inter';
import { Uni } from './routes/Uni';
import { Admin } from './routes/Admin';
import { Login } from './routes/Login';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    id: 'Home',
  },
  {
    path: '/uni',
    element: <Uni />,
    id: 'University',
  },
  {
    path: '/admin',
    element: <Admin />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: (
      <ErrorPage
        err="Page Not Found"
        statusCode={404}
      />
    ),
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: routes,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import ErrorPage from './404';
import App from './App';
import Patrol from './routes/Patrol';
import PatrolDetail from './routes/PatrolDetail';
import Employee from './routes/Employee';
import './style/apt.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'employee',
        element: <Employee />,
      },
      {
        path: '/patrol',
        element: <Patrol />,
      },
      {
        path: '/patrol/:id',
        element: <PatrolDetail />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();

root.render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </RecoilRoot>,
);

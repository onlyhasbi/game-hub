import { createBrowserRouter } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import Layout from './layout';
import ErrorPage from './components/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'games/:slug',
        element: <DetailPage />,
      },
    ],
  },
]);

import { createBrowserRouter } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import Layout from './layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'games/:id',
        element: <DetailPage />,
      },
    ],
  },
]);

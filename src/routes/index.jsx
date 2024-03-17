import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Trending from '../pages/trending';
import Recommendation from '../pages/recommendation';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'trending', element: <Trending /> },
      { path: 'recommendation', element: <Recommendation /> },
    ],
  },
]);

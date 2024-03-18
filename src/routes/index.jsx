import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Trending from '../pages/trending';
import Recommendation from '../pages/recommendation';
import Home from '../pages/home';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', index: true, element: <Home /> },
      { path: 'trending', element: <Trending /> },
      { path: 'recommendation', element: <Recommendation /> },
    ],
  },
]);

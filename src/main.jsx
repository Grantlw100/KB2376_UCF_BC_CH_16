import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";

import App from './App';
import NotFoundPage from './pages/404';
import HomePage from './pages/homePage';
import ProjectsPage from './pages/projects';
import AboutMePage from './pages/aboutMe';
import ContactPage from './pages/contact';
import ResumePage from './pages/resume';

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <NotFoundPage />,
  children: [
    {
      index: '/',
      element: <HomePage />,
    },
    {
      path: 'projects',
      element: <ProjectsPage />,
    },
    {
      path: 'aboutme',
      element: <AboutMePage />,
    },
    {
      path: 'contact',
      element: <ContactPage />,
    },
    {
      path: 'resume',
      element: <ResumePage />,
    },
  ],
}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);

import LandingPage from './Pages/LandingPage'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import UrlProvider from './context';

import AppLayout from "./layouts/app-layout";
import RequireAuth from './components/ui/require-auth';

import RedirectLink from './Pages/Redirect-link';
import Dashboard from './Pages/Dashboard';
import Link from './Pages/Link';
import Auth from "./Pages/auth";
import './App.css'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/dashboard",
        element: (
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        ),
      },
      {
        path: "/link/:id",
        element: (
          <RequireAuth>
            <Link />
          </RequireAuth>
        ),
      },
      {
        path: "/:id",
        element: <RedirectLink />,
      },
    ],
  },
]);


function App() {


  return (
    <>
    <UrlProvider>
      <RouterProvider router={router} />
    </UrlProvider>
    </>
  )
}

export default App

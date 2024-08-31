import React, { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/app-layout";
import RequireAuth from './components/ui/require-auth';
import UrlProvider from "./context";
import './index.css';


const LandingPage = React.lazy(() => import('./Pages/LandingPage'));
const RedirectLink = React.lazy(() => import('./Pages/Redirect-link'));
const Dashboard = React.lazy(() => import('./Pages/Dashboard'));
const Link = React.lazy(() => import('./Pages/Link'));
const Auth = React.lazy(() => import('./Pages/Auth'));

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LandingPage />
          </Suspense>
        ),
      },
      {
        path: "/auth",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Auth />
          </Suspense>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <RequireAuth>
            <Suspense fallback={<div>Loading...</div>}>
              <Dashboard />
            </Suspense>
          </RequireAuth>
        ),
      },
      {
        path: "/link/:id",
        element: (
          <RequireAuth>
            <Suspense fallback={<div>Loading...</div>}>
              <Link />
            </Suspense>
          </RequireAuth>
        ),
      },
      {
        path: "/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <RedirectLink />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <UrlProvider>
    <RouterProvider router={router} />
  </UrlProvider>
  );
}

export default App

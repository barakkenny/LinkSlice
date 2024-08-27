<<<<<<< HEAD
import React, { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UrlProvider from './context';
import AppLayout from "./layouts/app-layout";
import RequireAuth from './components/ui/require-auth';
import './App.css';

// Lazy load the components
const LandingPage = React.lazy(() => import('./Pages/LandingPage'));
const RedirectLink = React.lazy(() => import('./Pages/Redirect-link'));
const Dashboard = React.lazy(() => import('./Pages/Dashboard'));
const Link = React.lazy(() => import('./Pages/Link'));
const Auth = React.lazy(() => import('./Pages/auth'));

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
=======
import './App.css'

function App() {

  return (
    <>
      <h1>hello world</h1>
    </>
  )
>>>>>>> parent of 93fd2ed (Resolved conflicting merges)
}

export default App;

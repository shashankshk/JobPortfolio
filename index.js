import React from 'react';
import App from './src/App';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blogs from './src/Containers/Blogs';
import Home from './src/Containers/Home';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "blog",
            element: <Blogs/>
        }
    ]
  },
]);

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

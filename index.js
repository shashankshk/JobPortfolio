import React from 'react';
import App from './src/App';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import Blogs from './src/Containers/Blogs';
import Home from './src/Containers/Home';
import { client } from './src/API/api';
import Resume from './src/Containers/Resume';
import BlogReader from './src/Containers/BlogReader';
import Projects from './src/Containers/Projects';

client;
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'blog',
        element: <Blogs />,
      },
      {
        path: 'blog/:blogId',
        element: <BlogReader />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
    ],
  },
]);

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
);

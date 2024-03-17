import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { ArticleDetail, BlogLanding } from '@burkel24/blog';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
    children: [
      {
        path: "blog",
        element: <BlogLanding />
      },
      {
        path: "blog/:slug",
        element: <ArticleDetail />,
      }
    ]
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

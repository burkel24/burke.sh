import { ArticleDetail } from "@burkel24/blog";
import App from "./app";
import { BlogLanding } from "@burkel24/blog";
import { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
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
];

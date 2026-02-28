import React from "react";

import Home from "../components/Home";
import Root from "../layout/Root";
import Dashboard from "../components/Dashboard";
import SignUpPage from "../components/SignUpPage";
import LoginPage from "../components/LoginPage";
import { movieDataLoader } from "../loaders/loaders";
import FallbackElement from "../components/FallbackElement";

const MainRouter = [
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/dashboard",
        Component: Dashboard,
        loader: movieDataLoader,
        HydrateFallback: FallbackElement
      },
      { path: "/signup", Component: SignUpPage },
      { path: "/login", Component: LoginPage },
    ],
  },
];

export default MainRouter;
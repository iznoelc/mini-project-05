import React from "react";

import Home from "../components/Home";
import Root from "../layout/Root";
import Dashboard from "../components/Dashboard";
import SignUpPage from "../components/SignUpPage";
import LoginPage from "../components/LoginPage";
import { movieDataLoader } from "../loaders/loaders";
import FallbackElement from "../components/FallbackElement";
import ErrorPage, { ErrorBoundary } from "../components/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const MainRouter = [
  {
    path: "/",
    Component: Root,
    ErrorBoundary: ErrorBoundary,
    children: [
      { index: true,
        Component: Home,
        loader: movieDataLoader,
        HydrateFallback: FallbackElement },
      { 
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
        loader: movieDataLoader,
        HydrateFallback: FallbackElement
      },
      { path: "signup", Component: SignUpPage },
      { path: "login", Component: LoginPage },
      { path: "error", Component: ErrorPage },
    ],
  },
];

export default MainRouter;
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import { createBrowserRouter } from "react-router";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FallbackElement from "./components/FallbackElement"


import MainRouter from "./routes/MainRouter.jsx";
import AuthProvider from './contexts/AuthProvider.jsx';

const router = createBrowserRouter(MainRouter);

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} fallbackElement={<FallbackElement />} />
    </AuthProvider>
  </StrictMode>,
)

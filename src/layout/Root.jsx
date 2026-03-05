import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
// import { FavoriteMovieProvider } from "../hooks/FavoriteMovieProvider";
import FavoriteMovieProvider from '../contexts/FavoriteMovieProvider.jsx';
import { ToastContainer, toast, Zoom } from 'react-toastify';

const Root = () => {
  return (
    <>
    {/* IMPORTANT: wrap the ENTIRE project in FavoriteMovieProvider. this allows for ALL components to have access to the favorites
      * movie list and operators if necessary. */}
      <FavoriteMovieProvider>
      <div className="w-full h-screen">
        <NavBar />
        
        <div className="min-h-[70vh] p-10 m-10">
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Zoom}
          />
          <Outlet />
        </div>

        <Footer/>
      </div>
      </FavoriteMovieProvider>
    </>
  );
};

export default Root;
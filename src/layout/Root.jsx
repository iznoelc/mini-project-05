import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { FavoriteMovieProvider } from "../hooks/FavoriteMovieProvider";

const Root = () => {
  return (
    <>
    {/* IMPORTANT: wrap the ENTIRE project in FavoriteMovieProvider. this allows for ALL components to have access to the favorites
      * movie list and operators if necessary. */}
      <FavoriteMovieProvider>
      <div className="w-full h-screen">
        <NavBar />
        
        <div className="min-h-[70vh] p-10 m-10">
          <Outlet />
        </div>

        <Footer/>
      </div>
      </FavoriteMovieProvider>
    </>
  );
};

export default Root;
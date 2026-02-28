/* FavoriteMovieProvider.jsx 
 * provides a custom hook for using the favorites movie list globally, using react's useContext and createContext. 
 * code references from previous mini-project-04 presentations and this youtube tutorial
 * https://www.youtube.com/watch?v=0DRj470vJ74
 */ 

import { useState, createContext, useContext } from "react";

// create the context 
const FavoriteMovieContext = createContext();

// set up what the context will do. for favorite movies, it creates functions to add to favorites, remove from favorites, and the favorites list
// make sure it takes children as a prop, because this allows all components wrapped in this component access to the context.
export function FavoriteMovieProvider({children}) {
  const [favorites, setFavMovies] = useState([]);
    /* add a movie to the favorites list, but dont add it if its already in the list. if its already in the list, give an alert */
    const addToFav = (movie) => {
      setFavMovies(currentItems => {
          const existingItem = currentItems.find(item => item.title === movie.title);
            
          if (!existingItem) {
            return [...currentItems, movie]
          } else {
            alert("Movie is already in favorites!");
            return currentItems;
          }
      });
    };
  
    /* remove a movie from the favorites list. It takes in a movie object as an argument and updates the favMovies state by filtering out the movie with the matching title. */
    const removeFromFav = (movie) => {
      setFavMovies(currentItems => {
          const existingItem = currentItems.find(item => item.title === movie.title);
  
          if (existingItem) {
            return currentItems.filter(item => item.title !== movie.title);
          } else {
            return currentItems;
          }
        });
    };

  return (
    // provide the context value to the children components
    <FavoriteMovieContext.Provider value={{ favorites, addToFav, removeFromFav }}>
      {children}
    </FavoriteMovieContext.Provider>
  );
}

// export the context for use as a hook 
export function useFavoriteMovies() {
  return useContext(FavoriteMovieContext);
}
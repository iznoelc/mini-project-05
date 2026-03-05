import { useContext } from "react";
import { FavoriteMovieContext } from "../contexts/FavoriteMovieContext";

// export the context for use as a hook 
const useFavoriteMovies = () => {
  const favMovies = useContext(FavoriteMovieContext);

  return favMovies;
}

export default useFavoriteMovies;
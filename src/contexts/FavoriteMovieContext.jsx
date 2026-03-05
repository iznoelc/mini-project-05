/** FavoriteMovieContext.jsx
 * creates the favorite movie context, which will be modified in FavoriteMovieProvider.jsx to provide the favorite movie functionality.
 * in a separate file to prevent react fast refresh from losing the context state
 */
import { createContext } from "react";

export const FavoriteMovieContext = createContext();

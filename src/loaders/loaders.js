/* loaders.js 
 * creates a loader to be used to load the movie data for the dashboard component. 
 * it can simulate loading time by adding a delay before returning the data.
 * source for creating a loader and using it: https://www.youtube.com/watch?v=SkOysEZ_fvs */

async function movieDataLoader(){
    try {
      const response = await fetch("/movie.json",);

      if (!response.ok) throw new Error("failed to fetch");
      return await response.json();
    } catch (err) {
      console.log(err);
      return null;
    }
}

export {movieDataLoader};
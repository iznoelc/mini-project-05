/* loaders.js 
 * creates a loader to be used to load the movie data for the dashboard component. 
 * it can simulate loading time by adding a delay before returning the data.
 * source for creating a loader and using it: https://www.youtube.com/watch?v=SkOysEZ_fvs */

const MIN_LOADING_MS = 2000; // minimum time to simulate data loading

// simulate loading time for the dashboard loader by adding a delay of 2 seconds before returning the data from the movie.json file
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function movieDataLoader(){
    try {
      const response = await fetch("/movie.json",);
      await delay(MIN_LOADING_MS); // ensure the loading takes at least MIN_LOADING_MS milliseconds

      if (!response.ok) throw new Error("failed to fetch");
      return await response.json();
    } catch (err) {
      console.log(err);
      return null;
    }
}

export {movieDataLoader};
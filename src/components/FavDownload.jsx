export function Download(myFavorites){
    // parse array to text
    const text = myFavorites
    .map(movie => `${movie.title} (${movie.releasing_year}) - Directed by ${movie.director}.
        Rated ${movie.age_group}
        Runtime ${movie.runtime} minutes
        IMDB Rating ${movie.imdb_rating}/10\n`) 
    .join("\n"); 

    // Create Blob 
    const file = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(file);

    // trigger the download on click
    const a = document.createElement("a"); a.href = url;
    a.download = "YourFavorites.txt";
    a.click();
    URL.revokeObjectURL(url); 
return;
}
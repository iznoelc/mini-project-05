function Download({myFavorites}){
    const downloadTxtFile = () => {
        // parse array to text
        const text = myFavorites
        .map(movie => `${movie.title} (${movie.year}) - Directed by ${movie.director}`) 
        .join("\n"); 

        // Create Blob 
        const file = new Blob([text], { type: "text/plain" });
        const url = URL.createObjectURL(file);

        // trigger the download on click
        const a = document.createElement("a"); a.href = url;
        a.download = "YourFavorites.txt";
        a.click();
        URL.revokeObjectURL(url); 
    };
    
        return(
        <>
        <button onClick={downloadTxtFile}>Download Your Favorites</button>
        </>
    );
}

export default Download
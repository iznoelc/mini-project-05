let favoriteArray = [];


/* Adds favorite based on the index asociated with the movie
    Input 1: Type : Integer
*/
function addFavorite(Data){
    if (favoriteArray.includes(Data)){
        return;
    }
    else{
        favoriteArray.push(Data);
    }
    return;
}

/* Removes favorite based on the index asociated with the movie
    Input 1: Type : Integer
*/
function removeFavorite(Data){
    if (favoriteArray.includes(Data)){
            favoriteArray.splice(favoriteArray.indexOf(Data));
    }
    else{
        
        return;
    }
    return;
}

function displayFavorites(){


    return(
        <>
            <div>
                {favoriteArray.map((d, index) => 
                    <div key={index}>
                            <h1> {d[index].title}</h1>
                            <h2> {d[index].short_description}</h2>
                            <button onClick={removeFavorite(favoriteArray[index])}> RemoveFavorite</button>
                    </div>
                )}
            </div>
        </>
    )
}


export default displayFavorites, addFavorite, removeFavorite;
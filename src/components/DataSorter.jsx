/* Data Sorting Function
    Input 1: Type : String - Date, Title, Rating
    Input 2: Type : Bool - True = Ascending, False = Descending
    Input 3: Type : DataArray
*/
function DataSorter (Type, Ascending, DataArray){
    let returnArray = [...DataArray];

    switch (Type){
        case "Date":{
            returnArray = sortDate(Ascending, returnArray);
            break;
        };
        case "Title":{
            returnArray = sortTitle(Ascending, returnArray);
            break;
        };
        case "Rating":{
            returnArray = sortRating(Ascending, returnArray);
            break;
        };
    }

    return returnArray;
}

function sortDate(Ascending, DataArray){
    let returnArray = [...DataArray];
    
    returnArray.sort((a, b) => {
        const diff = a.releasing_year - b.releasing_year;
        return Ascending ? diff : -diff;
    });


    return returnArray;
}

function sortTitle(Ascending, DataArray){
    let returnArray = [...DataArray];

    returnArray.sort((a,b) => {
        let stringA = a.title;
        let stringB = b.title;
        return stringA.localeCompare(stringB);
    });
    if(!Ascending){
        returnArray.reverse();
    }
    

    return returnArray;

}

function sortRating(Ascending, DataArray){
    let returnArray = [...DataArray];

    returnArray.sort((a, b) => {
        const diff = a.imdb_rating - b.imdb_rating;
        return Ascending ? diff : -diff;
    });

    return returnArray;

}


export default DataSorter;
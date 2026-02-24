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
        };
        case "Title":{
            returnArray = sortTitle(Ascending, returnArray);
        };
        case "Rating":{
            returnArray = sortRating(Ascending, returnArray);
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


    /*if (Ascending){    // Old Version

        for (let i = 1; i < returnArray.length; i++) {
        let currentYear = 0;
        currentYear = returnArray[i].releasing_year;

        let j = i-1;

            while(j >= 0 && returnArray[j].releasing_year >= currentYear){
                returnArray[j + 1] = returnArray[j];
                j--;
            }
            returnArray[j + 1].releasing_year = currentYear;

        }
    }
    else{

        for (let i = 1; i < returnArray.length; i++) {
        let currentYear = 0;
        currentYear = returnArray[i].releasing_year;

        let j = i-1;

            while(j >= 0 && returnArray[j].releasing_year <= currentYear){
                returnArray[j + 1] = returnArray[j];
                j--;
            }
            returnArray[j + 1].releasing_year = currentYear;

        }
    }*/


    return returnArray;
}

function sortTitle(Ascending, DataArray){
    let returnArray = [...DataArray];

    returnArray.sort((a,b) => {
        return a.attr.localeCompare(b.attr)
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
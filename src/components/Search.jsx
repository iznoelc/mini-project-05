import { useState} from "react";

function Search({onSearch, data}){
    //declaring variables for future use
    const [searchType, setSearchType] = useState("genre")

    //on sensing a change to the search string
    const handleChangeInSearch = (event) => {
        //set what str we will search for
        const search4 = event.target.value;
        //use filter to find the str in the data and return the result
        //specific to each type of search we want to enable
        //Note: we change things to lowercase to avoid simple grammer mistakes resulting in no results
        const results = data.filter(item => {
        const value = search4.toString().toLowerCase();

        switch (searchType) {
        case "genre":
            return item.genre.toLowerCase().includes(value);

        case "age_group":
            return item.age_group.toLowerCase().includes(value);

        case "releasing_year":
            return item.releasing_year.toString().toLowerCase().includes(value);

        default:
            return true;
        }
        });
    //set the results to be returned and given to the data displayer
        onSearch(results)
    }

    return (
        <>
            <div className="flex items-center justify-center gap-5 pt-16">
            <select onChange={(e) => setSearchType(e.target.value)} className="secondary-font">
                <option value="genre">Genre</option>
                <option value="age_group">Age Rating</option>
                <option value="releasing_year">Release Year</option>
            </select>
            <label class="input input-bordered input-m w-lg">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                    <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                    >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input type="search" required placeholder="Search for movies..." onChange={handleChangeInSearch}/>
            </label>
            </div>
        </>
    );
}

export default Search;
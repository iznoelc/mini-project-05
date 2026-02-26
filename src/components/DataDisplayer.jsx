import { useState, useMemo } from "react";
import DataSorter from "./DataSorter";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";


function DataDisplayer({isLoading, data, addToFav, removeFromFav}){
    const [sortType, setSortType] = useState("Rating"); // default sort type
    const [ascending, setAscending] = useState(true); // default sort direction 

    /* use useMemo to cache the result of DataSorter (jnside sortedData) that its only updated when its dependencies change. 
       if data, sortType, or ascending are updated, the result of DataSorter will also update to display the 
       new sortedData.
     */ 
    const sortedData = useMemo(() => {
        if (!data){
            console.log("Data is null");
            return [];
        }
        return DataSorter(sortType, ascending, data);
    }, [data, sortType, ascending]);

    // console.log("Incoming data:", data);
    console.log("Sorted data:", sortedData);

    return (
        <>
        
        <div className="flex items-center justify-center gap-5">
            {/* drop down menu for search type */}
            <div className="dropdown dropdown-hover">
                <div tabindex="0" role="button" className="btn m-1 secondary-font">SORT...</div>
                    <ul tabindex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-lg">
                        <li><a onClick={() => setSortType("Title")}>By Title</a></li>
                        <li><a onClick={() => setSortType("Date")}>By Date</a></li>
                        <li><a onClick={() => setSortType("Rating")}>By IMDb Rating</a></li>
                    </ul>
            </div>
            {/* ascending/descending checkbox */}
            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-32 border p-4">
                <legend className="fieldset-legend secondary-font">Sorting Options</legend>
                <label className="label secondary-font">
                    <input type="checkbox" defaultChecked className="checkbox" onChange={() => setAscending(!ascending)}/>
                    Ascending Order
                </label>
            </fieldset>
        </div>

        {/* To be displayed if data is still loading */}
        {isLoading && 
            <div className="flex flex-col items-center justify-center gap-5">
                <h1 className="primary-font text-5xl">Loading data ... please wait</h1>
                <span class="loading loading-spinner loading-xl"></span>
            </div>
        }
        {/* To be displayed if data is not loading and the current data length is bigger than zero */}
        {!isLoading && sortedData.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto p-8"> 

            {sortedData.map((d, index) => (
                <div key={index} className="card w-96 bg-base-100 card-xs shadow-sm">
                    <div className="card-body">
                        {/* put the title and description of the movie in the cards */}
                        <h2 className="card-title primary-font text-2xl" key={index}>{d.title} ({d.releasing_year})</h2>
                        <p className="secondary-font text-base">{d.imdb_rating}/10 - {d.runtime}</p>
                        <p className="secondary-font text-sm">{d.short_description}</p>
                        
                        <div className="justify-end card-actions">
                        <button className="text-xl transform transition-transform duration-75 hover:text-green-500 hover:scale-125 hover:cursor-pointer" onClick={() => addToFav(d)}>
                            <AiFillLike />
                        </button>
                        <button className="text-xl transform transition-transform duration-75 hover:text-red-500 hover:scale-125 hover:cursor-pointer" onClick={() => removeFromFav(d)}>
                            <AiFillDislike />
                        </button>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        )}
        {/* To be displayed if data is not loading and the current data length is zero (i.e. no search results) */}
        {!isLoading && sortedData.length === 0 && (
            <div className="flex flex-col items-center justify-center gap-5 p-16">
                <h1 className="secondary-font text-2xl">No movies found.</h1>
            </div>
        )}
        </>
    );
}

export default DataDisplayer;
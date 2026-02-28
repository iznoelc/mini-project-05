import { useState, useMemo, useEffect } from "react";
import DataSorter from "./DataSorter";
import Search from "./Search";
//import handleChangeInSearch from "./Search";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";
import { useFavoriteMovies } from "../hooks/FavoriteMovieProvider";

export default function Dashboard(){
    const { addToFav, removeFromFav } = useFavoriteMovies();
    // get the data from the dashboard loader in MainRouter using useLoaderData
     const dataFromLoader = useLoaderData();

    const [data, setData] = useState(null); // the movie data
    const [sortType, setSortType] = useState("Date"); // default sort type
    const [ascending, setAscending] = useState(true); // default sort direction 

    const [searchQuery, setSearchQuery] = useState(""); // default search query - empty string
    const [searchType, setSearchType] = useState("genre"); //default search type

    /* use useEffect here to get the data once its loaded from the loader, since it will take some time. */
    useEffect(() => {
        if (dataFromLoader) {
            setData(dataFromLoader);
        }
    }, [dataFromLoader]);

    /* use useMemo to cache the result of Search that its only updated when its dependencies change. 
       if searchQuery, searchType, or data are updated, the result of Search will also update to display the 
       new filteredData.
     */ 
    const filteredData = useMemo(() => {
        if (!data) return []; // if there is no data, return null for filteredData
        return Search(data, searchQuery, searchType);
    }, [searchQuery, searchType, data]);
      

    /* use useMemo to cache the result of DataSorter (jnside sortedData) that its only updated when its dependencies change. 
       if data, sortType, or ascending are updated, the result of DataSorter will also update to display the 
       new sortedData.
     */ 
    const sortedData = useMemo(() => {
        // if there is no filtered data, just use the normal data list
        if (!filteredData){
            console.log("Data is null");
            return DataSorter(sortType, ascending, data);
        }
        // otherwise, sort the filtered data
        return DataSorter(sortType, ascending, filteredData);
    }, [filteredData, sortType, ascending, data]);

    console.log("Sorted data:", sortedData);

    // temp
    

    return (
        <>
        
        <div className="flex items-center justify-center gap-5">
            {/* search bar */}
            <select onChange={(e) => setSearchType(e.target.value)} className="secondary-font">
                <option value="genre">Genre</option>
                <option value="age_group">Age Rating</option>
                <option value="releasing_year">Release Year</option>
            </select>
            <label className="input input-bordered input-m w-lg">
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
                <input type="search" required placeholder="Search for movies..." onChange={(e) => setSearchQuery(e.target.value)}/>
            </label>
            {/* drop down menu for search type */}
            <div className="dropdown dropdown-hover">
                <div tabIndex="0" role="button" className="btn m-1 secondary-font">SORT...</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-lg">
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

        {/* To be displayed if data is not loading and the current data length is bigger than zero */}
        {sortedData.length > 0 && (
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
        {sortedData.length === 0 && (
            <div className="flex flex-col items-center justify-center gap-5 p-16">
                <h1 className="secondary-font text-2xl">No movies found.</h1>
            </div>
        )}
        </>
    );
}
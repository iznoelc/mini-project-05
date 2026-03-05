import { useMemo } from "react";
import { useLoaderData } from "react-router-dom";
import GleebusFilm from "../assets/GleebusFilm.png"; 

export default function Home(){

    const data = useLoaderData();

    const slicedData = useMemo(() => {
        if (!data) return []; // if there is no data, return null for filteredData
        ; // set the data to the data from the loader, which is the movie data from movie.json;
        return data.slice(0,3)
    }, [data]);     

    console.log("sliced data:", slicedData);
    

    return(
        <>
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content text-center gap-5">
                <div className="max-w-md">
                <img src={GleebusFilm} alt="GleebusFilm" className="object-contain mx-auto mb-4"></img>
                <h1 className="text-5xl font-bold primary-font">Welcome To Gleebus' Movies</h1>
                <p className="py-2">
                    Providing you with the most out of this world movie database for you to like, dislike, and explore. 
                    Sign up or log in to get started on your movie journey with us!
                </p>
                </div>
            </div>
        </div>
             {slicedData.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-8xl mx-auto p-8"> 

            {slicedData.map((d, index) => (
                <div key={index} className="card w-full bg-base-100 card-xs shadow-sm ">
                    <div className="card-body">
                        {/* put the title and description of the movie in the cards */}
                        <h2 className="card-title primary-font text-2xl" key={index}>{d.title} ({d.releasing_year})</h2>
                        <p className="secondary-font text-base">{d.imdb_rating}/10 - {d.runtime}</p>
                        <p className="secondary-font text-sm">{d.short_description}</p>
                        
                        <div className="justify-end card-actions">

                        </div>
                    </div>
                </div>
            ))}
            </div>
        )}  
            <div className="flex flex-col items-center justify-center gap-5">
                 <p className="secondary-font"><a href="/dashboard" className="btn btn-primary">See More Movies</a></p>
            </div>
        </>
    );
}


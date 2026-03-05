import { useMemo } from "react";
import { useLoaderData } from "react-router-dom";

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
                <div class="hero bg-base-200 min-h-screen">
        <div class="hero-content text-center">
            <div class="max-w-md">
            <h1 class="text-5xl font-bold">Home</h1>
             {slicedData.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto p-8"> 

            {slicedData.map((d, index) => (
                <div key={index} className="card w-96 bg-base-100 card-xs shadow-sm">
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
            <a href="/dashboard"> See More Movies</a>
            </div>
        </div>
        </div>

        </>
    );
}


import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Home(){

    const dataFromLoader = useLoaderData();
    const data = [data, setData];
    useEffect(() => {
            if (dataFromLoader) {
                setData(dataFromLoader);
            }
        }, [dataFromLoader]);
        
    const splicedData = useMemo(() => {
        if (!data) return []; // if there is no data, return null for filteredData
        return data.splice(0,3)
    }, [data]);     
    

    return(
        <d>
        <h1>Home</h1>
        {dataFromLoader.length > 0 && (
            {splicedData.map((d, index) => (
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
                )}
        <a href="/dashboard"> See More Movies</a>

        </d>
    );
}

export default Home;
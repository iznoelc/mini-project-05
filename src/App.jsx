import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Dashboard from './components/Dashboard';
import Footer from './components/Footer'
import './App.css'
import Search from "./components/Search";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  // const [filteredData,setFilteredData] = useState(null);
  const [favMovies, setFavMovies] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch("/movie.json",);

      if (!response.ok) throw new Error("failed to fetch");
      const myData = await response.json();
      console.log(myData);
      setData(myData);
      setError(null);
      console.log(data);
    } catch (err) {
      setError(err);
      console.log(err);
      console.log(error);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

    /* add a movie to the favorites list, but dont add it if its already in the list. if its already in the list, give an alert */
    const addToFav = (movie) => {
      setFavMovies(currentItems => {
          const existingItem = currentItems.find(item => item.title === movie.title);
          
          if (!existingItem) {
            return [...currentItems, movie]
          } else {
            alert("Movie is already in favorites!");
            return currentItems;
          }
      });
    };

    /* remove a movie from the favorites list. It takes in a movie object as an argument and updates the favMovies state by filtering out the movie with the matching title. */
    const removeFromFav = (movie) => {
      setFavMovies(currentItems => {
          const existingItem = currentItems.find(item => item.title === movie.title);

          if (existingItem) {
            return currentItems.filter(item => item.title !== movie.title);
          } else {
            return currentItems;
          }
        });
    };

    return(
        <>
            <NavBar favorites={favMovies} />
            <DataDisplayer isLoading={isLoading} data={data} addToFav={addToFav} removeFromFav={removeFromFav}/>
            <Footer />
            
        </>
    );
};


export default App;

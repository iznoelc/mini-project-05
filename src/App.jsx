import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import DataDisplayer from './components/DataDisplayer';
import Footer from './components/Footer'
import './App.css'
import Search from "./components/Search";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [filteredData,setFilteredData] = useState(null);
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

    const addToFav = (movie) => {
      setFavMovies(currentItems => {
          // check if the vinyl is already in the cart
          const existingItem = currentItems.find(item => item.title === movie.title);
          
          if (!existingItem) {
            // if it is, use map to create a new array of all the items in the cart, but update the quantity of the existing item
            return [...currentItems, movie]
          } else {
            // if it isn't, add it to the cart with a quantity of 1
            return currentItems;
          }
      });
    };

    /* removes a vinyl from the cart using setCartItems. it takes the initial state of the cart and filters out the desired item. 
     * as a safe guard, it makes sure the item exists in the list first, and if it doesn't, it just returns the current cart items. */
    const removeFromFav = (movie) => {
      setFavMovies(currentItems => {
          // check if the vinyl is already in the cart
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
            <Search data={data} onSearch={setFilteredData}></Search>
            <DataDisplayer isLoading={isLoading} data={filteredData ?? data} addToFav={addToFav} removeFromFav={removeFromFav}/>
            <Footer />
            
        </>
    );
};


export default App;

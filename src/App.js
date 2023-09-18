import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";

function App() {
  const API_URL = "https://www.omdbapi.com?apikey=";

  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    console.log("data", data.Search);
  };

  useEffect(() => {
    searchMovies("Braveheart");
  }, []);

  const movie1 = {
    Title: "Braveheart",
    Year: "1995",
    imdbID: "tt0112573",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="search for movies"
          value="Braveheart"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>
      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>
          <div>
            <img
              src={
                movie1.Poster !== "N/A"
                  ? movie1.Poster
                  : "https://via.placeholder.com/400"
              }
              alt={movie1.Title}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

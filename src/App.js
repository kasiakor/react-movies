import { useEffect } from "react";

function App() {
  const API_URL = "https://www.omdbapi.com?apikey=";

  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    console.log("data", data);
  };

  useEffect(() => {
    searchMovies("Braveheart");
  }, []);

  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./Home.css";

export default function Home() {

  const [genre, setGenre] = useState("");
  const [results, setResults] = useState([]);


  if (!localStorage.getItem("access")) {
    window.location.href = "/login";
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    window.location.href = "/login";
  };

  async function loadMovies() {
    const file = await fetch("/data/movies.json");
    const movies_list = await file.json();
    return movies_list;
  }

  function clusterMovies(movies) {
    return movies.map(movie => {
      const score = movie.action_level + movie.complexity;

      let cluster;
      if (score > 140) cluster = "High-Intensity Cluster";
      else if (score > 80) cluster = "Medium-Intensity Cluster";
      else cluster = "Low-Intensity Cluster";

      return { ...movie, cluster };
    });
  }

  function predictPopularity(movie) {
    return Math.round(movie.rating * 10 + movie.complexity * 0.5);
  }

  async function handleSearch() {
    const movies = await loadMovies();
    const selected = movies.filter(movie => movie.genre === genre);
    const clustered = clusterMovies(selected);
    setResults(clustered.slice(0, 5));
  }

  return (
    <div id="home-container">

      {/* Top Bar */}
      <div
        style={{
          width: "100%",
          height: "60px",
          backgroundColor: "#003366",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          boxSizing: "border-box",
        }}
      >
        <h2 style={{ color: "white", margin: 0, fontSize: "24px" }}> </h2>

        <button
          className="btn btn-danger"
          style={{ padding: "6px 12px", fontSize: "14px" }}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="p-4">
        <h1>Categories</h1>

        <select
          className="form-select"
          style={{ width: "200px" }}
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="" disabled>---</option>
          <option value="Action">Action</option>
          <option value="Action/Adventure">Action/Adventure</option>
          <option value="Comedy">Comedy</option>
          <option value="Horror">Horror</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>

        <button className="btn btn-primary mt-3" onClick={handleSearch}>
          Search
        </button>

        <div id="results" className="mt-4">
          {results.map((movie, index) => (
            <div key={index} className="movie">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Title: {movie.title}</h5>
                  <p className="card-text">Genre: {movie.genre}</p>
                  <p className="card-text">{movie.description}</p>
                  <p className="card-text">{movie.year}</p>
                  <p className="card-text">{movie.rating}/5</p>
                  <p className="card-text">Duration: {movie.duration_minutes}</p>
                  <p className="card-text">Cluster: {movie.cluster}</p>
                  <p className="card-text">
                    Predicted Popularity: {predictPopularity(movie)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
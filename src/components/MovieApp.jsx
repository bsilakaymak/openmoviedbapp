import React, { useState } from "react";
import Search from "./Search";
import MovieCard from "./MovieCard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Details from "./Details";

const MovieApp = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [indexMessage, setIndexMessage] = useState("Welcome To Movies App");
  const [selectedMovie, setSelectedMovie] = useState([]);

  function fetchMovies(title, plot) {
    setLoading(true);
    fetch(`https://www.omdbapi.com/?t=${title}&apikey=90c8ee2f${plot}`)
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        const newMovies = movies.filter(movie => {
          return movie.imdbID !== data.imdbID;
        });
        if (data.Response === "True") {
          setMovies([data, ...newMovies]);
          setIndexMessage("Search another movie");
        }
        if (data.Response === "False") {
          setIndexMessage("Movie Not Found!");
        }
      })
      .catch(err => {
        setError(true);
        setLoading(false);
      });
  }

  function selectMovie(id) {
    const selected = movies.filter(movie => movie.imdbID === id);
    setSelectedMovie(selected);
  }

  function removeMovies(id) {
    const newMovies = movies.filter(movie => movie.imdbID !== id);
    setMovies(newMovies);
  }
  if (hasError) return <h1 className="index-msg">Something Went Wrong</h1>;
  if (isLoading) return <div className="loading"></div>;
  else {
    return (
      <Router>
        <div>
          <Route exact path="/">
            {indexMessage && <h1 className="index-msg">{indexMessage}</h1>}
            <Search fetchMovies={fetchMovies} />
            {movies && (
              <MovieCard
                movies={movies}
                removeMovies={removeMovies}
                selectMovie={selectMovie}
                selectedMovie={selectedMovie}
              />
            )}
          </Route>
          <Route exact path="/details">
            {movies && <Details movies={movies} movie={selectedMovie} />}
          </Route>
        </div>
      </Router>
    );
  }
};

export default MovieApp;

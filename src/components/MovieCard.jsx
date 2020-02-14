import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movies, removeMovies, selectMovie, selectedMovie }) => {
  return movies.map((item, i) => {
    return (
      <div className="movie-card" key={i}>
        <h1>{item.Title}</h1>
        <img className="movie-image" src={item.Poster} alt={item.Title} />
        <p className="movie-plot">{item.Plot}</p>
        <Link to="/details">
          <button
            onClick={() => {
              selectMovie(item.imdbID);
            }}
            className="details-button"
          >
            Details
          </button>
        </Link>
        <button
          className="remove-button"
          onClick={() => {
            removeMovies(item.imdbID);
          }}
        >
          Remove
        </button>
      </div>
    );
  });
};

export default MovieCard;

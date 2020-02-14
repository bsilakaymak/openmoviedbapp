import React from "react";
import { useHistory } from "react-router-dom";

const Details = ({ movie }) => {
  const history = useHistory();
  const back = () => history.goBack();
  return (
    <div className="details">
      <h3>Details</h3>
      <ul>
        <li>Year : {movie[0].Year}</li>
        <li>Released: {movie[0].Released}</li>
        <li>Genre: {movie[0].Genre}</li>
        <li>Actors: {movie[0].Actors}</li>
        <li>IMDB Rating: {movie[0].imdbRating}</li>
      </ul>
      <button className="submit-button" onClick={back}>
        Go back
      </button>
    </div>
  );
};

export default Details;

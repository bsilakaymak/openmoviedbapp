import React, { useState } from "react";

const Search = ({ fetchMovies }) => {
  const [value, setValue] = useState("");
  const [plotValue, setPlotValue] = useState("");
  const submit = e => {
    if (value === "undefined" || value.trim() === "") {
      return alert("Please type a valid input");
    } else {
      e.preventDefault();
      fetchMovies(value, plotValue);
      setValue(" ");
    }
  };

  return (
    <div>
      <form className="form-area">
        <input
          placeholder="Search movie"
          className="input-area"
          type="text"
          value={value}
          onChange={e => {
            setValue(e.target.value);
          }}
        />
        <select
          className="select-area"
          defaultValue={plotValue}
          onChange={e => {
            setPlotValue(e.target.value);
          }}
        >
          <option value="">Plot</option>
          <option value="&plot=full">Full</option>
          <option value="">Short</option>
        </select>
        <button className="submit-button" onClick={submit}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;

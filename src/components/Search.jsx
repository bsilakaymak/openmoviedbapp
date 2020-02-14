import React, { useState } from "react";

const Search = ({ fetchMovies }) => {
  const [value, setValue] = useState("");
  const [plotValue, setPlotValue] = useState("");
  const [year, setYear] = useState("")
  const submit = e => {
    if (value === "undefined" || value.trim() === "") {
      return alert("Please type a valid input");
    } else {
      e.preventDefault();
      fetchMovies(value, plotValue, year);
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
        <input 
          placeholder="Year"
          className="input-area"
          value={year}
          onChange={e=>{setYear(e.target.value)}}
         />
        <select
          name="Plot"
          className="select-area"
          defaultValue={plotValue}
          onChange={e => {
            setPlotValue(e.target.value);
          }}
        >
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

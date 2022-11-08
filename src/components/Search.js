import React, { useState } from "react";
import FetchNutrition from "./FetchNutrition";

function Search() {
  const [searchString, setSearchString] = useState("");
  const [searchField, setSearchField] = useState("apple");

  function handleClick() {
    setSearchField(searchString);
  }

  return (
    <div>
      <div>
        <p>Enter a food item to search for its nutritional value</p>
        <input
          className="form-control"
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchString(e.target.value)}
        />
        <button onClick={handleClick}>Search</button>
      </div>
      <FetchNutrition query={searchField} />
    </div>
  );
}

export default Search;

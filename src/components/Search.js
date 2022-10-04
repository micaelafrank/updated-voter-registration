import React from "react";

function Search({ search, handleSearch }) {
  return (
    <div>
      <label style={{paddingTop:"40px", alignItems:"center"}} htmlFor="search">Search by name to see if you're registered:</label>
      <input
        type="text"
        id="search"
        value={search}
        name="search"
        placeholder="Start typing..."
        onChange={(e) => (handleSearch(e.target.value))}
      />
    </div>
  );
}

export default Search;
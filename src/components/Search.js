import React, {useState} from "react";

function Search({ onSearch }) {

  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(search);
  }

  return (
    <div className="searchBarContainer">
      <form className="searchbarForm" onSubmit={handleSubmit}>
        <h4>View Voter Information</h4>
        <div style={{display: "flex", flexDirection: "row"}}>
          <input
            type="text"
            id="search"
            placeholder="Filter by first or last name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">🔍</button>
      </div>
      </form>
    </div>
  );
}

export default Search;
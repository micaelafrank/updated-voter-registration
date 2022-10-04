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
        <p><span style={{ fontWeight: "bold" }}>Instructions:</span> Fill out the following information to view a voter's record. All fields are required.</p>
        <div id="row1" style={{display: "flex", flexDirection: "row"}}>
          <input
            required
            type="text"
            id="search"
            placeholder="First name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <input
            required
            type="text"
            id="search"
            placeholder="Last name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div id="row2" style={{ display: "flex", flexDirection: "row" }}>
          <input
            required 
            type="text"
            id="search"
            placeholder="Birthday (MM/DD/YYYY)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <input
            required
            type="text"
            id="search"
            placeholder="Zip Code"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default Search;
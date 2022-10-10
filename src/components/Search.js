import React, {useState} from "react";

function Search({ setFirstNameSearch, isFiltering, setIsFiltering, isSearching, setLastNameSearch, setZipSearch, handleSearchClear, handleSearchSubmit }) {
  // const [formData, setFormData] = useState({ firstNameSearch:"", lastNameSearch: "", zipSearch:"" });
  const [fnSearch, setFNSearch] = useState("");
  const [lnSearch, setLNSearch] = useState("");
  const [zcSearch, setZCSearch] = useState("");
  const [birthdaySearch, setBirthday] = useState("");
  const [inputColor, setInputColor] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setFirstNameSearch(fnSearch);
    setLastNameSearch(lnSearch);
    setZipSearch(zcSearch);
    setBirthday(birthdaySearch);
    handleSearchSubmit();
  }
  
  function handleBirthday(e){
    setInputColor(true);
    setBirthday(e.target.value);
  }

  function handleSearch(){
    setIsFiltering(true);
    console.log(`Filter results: ${isFiltering}`);
  }

  function clearSearch(){
    setFNSearch("");
    setLNSearch("");
    setZCSearch("");
    setBirthday("");
    handleSearchClear();
    setIsFiltering(false);
  }

  function SubmitButton() {
    if (fnSearch && lnSearch && (zcSearch.length === 5)) {
      return <button type="submit">Submit</button>
    } else {
      return <button type="submit" disabled>Submit</button>
    };
  };

  return (
    <div className="searchBarContainer">
      <form id="searchForm" style={{fontFamily:"monospace"}} className="searchbarForm" onSubmit={handleSubmit}>
        <h4 style={{lineHeight:"0", fontSize:"30px", textAlign:"center"}}>CHECK YOUR VOTER STATUS</h4>
        <p style={{ fontSize:"15px", lineHeight:"1.2"}}><span style={{ fontSize:"18px", fontWeight: "bold" }}>Instructions:</span> Fill out the following information to view a voter's record. All fields are required.</p>
        <div id="row1" style={{ display: "flex", fontFamily: "monospace", flexDirection: "row"}}>
          <input
          width="20%"
            required
            type="search"
            id="firstNameSearch"
            name="firstNameSearch"
            placeholder="First name"
            value={fnSearch}
            onChange={(e) => setFNSearch(e.target.value)}
            // onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            required
            width="20%"
            type="search"
            id="lastNameSearch"
            name="lastNameSearch"
            placeholder="Last name"
            value={lnSearch}
            onChange={(e) => setLNSearch(e.target.value)}
            // onChange={(e) => setLastName(e.target.value)}
          />
        {/* </div>
        <div id="row2" style={{ display: "flex", flexDirection: "row" }}> */}
          <input
            width="20%"
            required 
            type="date"
            value={birthdaySearch}
            style={inputColor ? { color: "black" } : { color: "gray" }}
            name="birthdaySearch"
            id="birthdaySearch"
            placeholder="Birthday (MM/DD/YYYY)"
            onChange={handleBirthday}
            // onChange={(e) => setBirthday(e.target.value)}
          />
          <input
            width="20%"
            required
            type="text"
            maxLength="5"
            minLength="5"
            id="zipSearch"
            name="zipSearch"
            placeholder="Postal Code"
            value={zcSearch}
            onChange={(e) => setZCSearch(e.target.value)}
            // onChange={(e) => setPostalCode(e.target.value)}
          />
          <SubmitButton className="search-btn" onClick={handleSearch} />
          <button className="search-btn" style={{ fontFamily: "monospace"}} onClick={clearSearch}>Clear Search</button>
        </div>
      </form>
    </div>
  );
}

export default Search;
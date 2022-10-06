import React, {useState} from "react";

function Search({ setSearch }) {
  const [formData, setFormData] = useState({ firstName:"", lastName: "", postalCode:"" });
  // const [lastName, setLastName] = useState("");
  // const [firstName, lastName] = useState("");
  // const [postalCode, setPostalCode] = useState("");

  function handleChange(e) {
    let key = e.target.name
    let value = e.target.value
    setFormData((formData) => ({ ...formData, [key]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSearch(formData);
  }

  return (
    <div className="searchBarContainer">
      <form style={{fontFamily:"monospace"}} className="searchbarForm" onSubmit={handleSubmit}>
        <h4 style={{lineHeight:"0", fontSize:"30px", textAlign:"center"}}>CHECK YOUR VOTER STATUS</h4>
        <p style={{ fontSize:"15px", lineHeight:"0"}}><span style={{ fontSize:"18px", fontWeight: "bold" }}>Instructions:</span> Fill out the following information to view a voter's record. All fields are required.</p>
        <div id="row1" style={{ display: "flex", fontFamily: "monospace", flexDirection: "row"}}>
          <input
            required
            type="text"
            id="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            // onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            required
            type="text"
            id="search"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            // onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div id="row2" style={{ display: "flex", flexDirection: "row" }}>
          <input
            required 
            type="text"
            id="search"
            placeholder="Birthday (MM/DD/YYYY)"
          />
          <input
            required
            type="text"
            id="zip"
            placeholder="Postal Code"
            value={formData.zip}
            onChange={handleChange}
            // onChange={(e) => setPostalCode(e.target.value)}
          />
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default Search;
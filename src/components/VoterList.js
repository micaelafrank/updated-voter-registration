import React, {useState} from "react";
import Voter from "./Voter";

function VoterList({ handleSearchSubmit, count, handleSearchClear, searchedNames, isSearching, voters, setVoters, deleteVoter, zipSearch, firstNameSearch, lastNameSearch}) {

  const listOfVoters = voters.map((voter) => (
      <Voter 
      key={voter.id}
      id={voter.id}
      lastName={voter.last}
      firstName={voter.first}
      voters={voters}
      isActive={voter.isActive}
      setVoters={setVoters}
      searchedNames={searchedNames}
      count={count}
      // setSearch={setSearch}
      party={voter.party}
      password={voter.password}
      postalCode={voter.postalCode}
      // handleSearch={setUserSearch}
      deleteVoter={deleteVoter}
      firstNameSearch={firstNameSearch}
      lastNameSearch={lastNameSearch}
      zipSearch={zipSearch}
      />
    ))
  
    return (
      <React.Fragment>
        <section className="voterGridContainer">
          {isSearching ? searchedNames : listOfVoters}
        </section>
        {count ? null : <p id="error-message"><span style={{fontWeight:"bold"}}>Not Found:</span> Your search did not match any record on file. Please ensure fields are accurate and try again.</p>}
      </React.Fragment>
    );
  }

  export default VoterList;
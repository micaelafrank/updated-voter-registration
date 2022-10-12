import React, {useState} from "react";
import Voter from "./Voter";

function VoterList({ handleSearchSubmit, isFiltering, count, handleSearchClear, searchedNames, isSearching, voters, setVoters, deleteVoter, zipSearch, firstNameSearch, lastNameSearch}) {

  const listOfVoters = voters.map((voter) => (
      <Voter 
      key={voter.id}
      id={voter.id}
      // onLogin={onLogin}
      lastName={voter.last}
      firstName={voter.first}
      voters={voters}
      isActive={voter.isActive}
      setVoters={setVoters}
      searchedNames={searchedNames}
      count={count}
      address1={voter.address1}
      address2={voter.address2}
      // setSearch={setSearch}
      party={voter.party}
      password={voter.password}
      postalCode={voter.postalCode}
      // handleSearch={setUserSearch}
      deleteVoter={deleteVoter}
      firstNameSearch={firstNameSearch}
      lastNameSearch={lastNameSearch}
      zipSearch={zipSearch}
      isSearching={isSearching}
      isFiltering={isFiltering}
      age={voter.age}
      />
    ))
  
    return (
      <React.Fragment>
        <h1 className="formHeading4" style={{padding:"50px 0 30px 0"}}>REGISTERED VOTERS</h1>
        <section className={isFiltering ? "searchGridContainer" : `voterGridContainer`}>
          {isSearching ? searchedNames : listOfVoters}
        </section>
        {(isSearching && count===0) ? <p id="error-message"><span style={{fontWeight:"bold"}}>Not Found:</span> Your search did not match any record on file. Please ensure fields are accurate and try again.</p> : null}
      </React.Fragment>
    );
  }

  export default VoterList;
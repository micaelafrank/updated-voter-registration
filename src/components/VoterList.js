import React, {useState} from "react";
import Voter from "./Voter";

function VoterList({ handleSearch, searchedNames, isSearching, voters, setVoters, deleteVoter, zipSearch, firstNameSearch, lastNameSearch}) {

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
      </React.Fragment>
    );
  }

  export default VoterList;
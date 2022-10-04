import React from "react";
import Voter from "./Voter";

function VoterList({ voters, setVoters, searchVoters, setUserSearch, deleteVoter }) {
    const listOfVoters = voters.map((voter) => (
      <Voter 
      key={voter.id}
      id={voter.id}
      name={voter.name}
      voters={voters}
      setVoters={setVoters}
      searchVoters={searchVoters}
      party={voter.party}
      password={voter.password}
      postalCode={voter.postalCode}
      handleSearch={setUserSearch}
      deleteVoter={deleteVoter}
      />
    ))
  
    return (
      <React.Fragment>
        <section className="voterGridContainer">
            {listOfVoters}
        </section>
      </React.Fragment>
    );
  }

  export default VoterList;
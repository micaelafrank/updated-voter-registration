import React, { useState } from "react";
import VoterList from "./VoterList";
// import GridColSizesExample from "./GridColSizesExample";
import Search from "./Search";

function VoterPage({ voters, setVoters }) {
    // const [voters, setVoters] = useState([])
    const [search, setSearch] = useState("")

    function deleteVoter(id) {
        const updatedList = voters.filter((voter) => voter.id !== id);
        setVoters(updatedList);
    }

    const searchedNames = voters.filter((voter) => 
        voter.first.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <main style={{paddingTop: "35px", paddingBottom: "30px"}}>
            <h4 style={{fontSize: "36px", textAlign: "center"}}>Am I Registered?</h4>
            {/* <GridColSizesExample /> */}
            <Search search={search} onSearch={setSearch} />
            {/* <VoterList voters={searchedNames} voters={voters} setVoters={setVoters} searchVoters={searchVoters} deleteVoter={deleteVoter} /> */}
            <VoterList voters={searchedNames} handleDelete={deleteVoter} />
        </main>
)}

export default VoterPage;

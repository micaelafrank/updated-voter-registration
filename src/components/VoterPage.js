import React, { useState } from "react";
import VoterList from "./VoterList";
// import GridColSizesExample from "./GridColSizesExample";
import Search from "./Search";

function VoterPage({ voters, setVoters }) {
    const [search, setSearch] = useState("");
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [zip, setZip] = useState("");

    function deleteVoter(id) {
        const updatedList = voters.filter((voter) => voter.id !== id);
        setVoters(updatedList);
    }

    const searchedNames = voters.filter((voter) => {
        return (voter.first.toLowerCase() && voter.last.toLowerCase() && voter.postalCode.toLowerCase()) === (search.toLowerCase())
    })

    return (
        <main className="voterPageContainer" style={{paddingTop: "35px", paddingBottom: "30px"}}>
            {/* <GridColSizesExample /> */}
            <Search handleSearch={setSearch} />
            {/* <VoterList voters={searchedNames} voters={voters} setVoters={setVoters} searchVoters={searchVoters} deleteVoter={deleteVoter} /> */}
            <VoterList search={search} voters={searchedNames} handleDelete={deleteVoter} />
        </main>
)}

export default VoterPage;

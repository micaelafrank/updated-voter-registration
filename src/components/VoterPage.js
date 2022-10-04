import React, { useState, useEffect } from "react";
import VoterList from "./VoterList";
import Search from "./Search";

function VoterPage({ voters, setVoters }) {
    // const [voters, setVoters] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch("http://localhost:9292/voters")
            .then(res => res.json())
            .then(setVoters)
    }, [])
    console.log(voters)

    function deleteVoter(id) {
        const updatedList = voters.filter((voter) => voter.id !== id);
        setVoters(updatedList);
    }

    const searchedNames = voters.filter((voter) => 
        voter.first.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <main>
            <Search search={search} onSearch={setSearch} />
            {/* <VoterList voters={searchedNames} voters={voters} setVoters={setVoters} searchVoters={searchVoters} deleteVoter={deleteVoter} /> */}
            <VoterList voters={searchedNames} handleDelete={deleteVoter} />
        </main>
)}

export default VoterPage;
